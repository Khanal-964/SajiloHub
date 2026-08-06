// ============================================
// Auth Controller
// Handles registration, login, Google OAuth,
// session check, and logout
// ============================================

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const pool = require('../config/db');

// Initialize Google OAuth client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// --------------------------------------------------
// Helper: Generate JWT and set it as an httpOnly cookie
// --------------------------------------------------
const generateTokenAndSetCookie = (res, user) => {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );

  res.cookie('token', token, {
    httpOnly: true,                                    // Not accessible via JS (XSS protection)
    secure: process.env.NODE_ENV === 'production',     // HTTPS only in production
    sameSite: 'lax',                                   // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000,                  // 7 days in milliseconds
  });

  return token;
};

// --------------------------------------------------
// POST /api/auth/register
// Register a new user with email and password
// --------------------------------------------------
exports.register = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    // --- Validation ---
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (fullName.trim().length < 2) {
      return res.status(400).json({ message: 'Full name must be at least 2 characters.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    // --- Check for existing user ---
    const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    // --- Hash password with bcrypt (10 salt rounds) ---
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // --- Insert new user ---
    const [result] = await pool.query(
      'INSERT INTO users (full_name, email, password, auth_provider) VALUES (?, ?, ?, ?)',
      [fullName.trim(), email.toLowerCase().trim(), hashedPassword, 'local']
    );

    const user = {
      id: result.insertId,
      full_name: fullName.trim(),
      email: email.toLowerCase().trim(),
      auth_provider: 'local',
    };

    // --- Auto-login: generate JWT and set cookie ---
    generateTokenAndSetCookie(res, user);

    return res.status(201).json({
      message: 'Registration successful.',
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        auth_provider: user.auth_provider,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// --------------------------------------------------
// POST /api/auth/login
// Login with email and password
// --------------------------------------------------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // --- Validation ---
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // --- Find user by email ---
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const user = users[0];

    // --- Check if this is a Google-only account ---
    if (user.auth_provider === 'google' && !user.password) {
      return res.status(401).json({
        message: 'This account uses Google Sign-In. Please use "Continue with Google".',
      });
    }

    // --- Verify password ---
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // --- Generate JWT and set cookie ---
    generateTokenAndSetCookie(res, user);

    return res.json({
      message: 'Login successful.',
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        auth_provider: user.auth_provider,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// --------------------------------------------------
// POST /api/auth/google
// Login or register via Google OAuth 2.0
// --------------------------------------------------
exports.googleAuth = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ message: 'Google credential is required.' });
    }

    // --- Verify the Google ID token ---
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, email_verified } = payload;

    if (!email_verified) {
      return res.status(401).json({ message: 'Google email is not verified.' });
    }

    // --- Check if user already exists ---
    const [existing] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    let user;

    if (existing.length > 0) {
      // User exists — log them in
      user = existing[0];

      // Link Google ID if not already linked
      if (!user.google_id) {
        await pool.query(
          'UPDATE users SET google_id = ?, updated_at = NOW() WHERE id = ?',
          [googleId, user.id]
        );
      }
    } else {
      // New user — create account automatically
      const [result] = await pool.query(
        'INSERT INTO users (full_name, email, auth_provider, google_id) VALUES (?, ?, ?, ?)',
        [name, email, 'google', googleId]
      );

      user = {
        id: result.insertId,
        full_name: name,
        email: email,
        auth_provider: 'google',
      };
    }

    // --- Generate JWT and set cookie ---
    generateTokenAndSetCookie(res, user);

    return res.json({
      message: 'Google authentication successful.',
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        auth_provider: user.auth_provider,
      },
    });
  } catch (error) {
    console.error('Google auth error:', error);
    return res.status(401).json({ message: 'Invalid Google token. Please try again.' });
  }
};

// --------------------------------------------------
// GET /api/auth/me
// Get the currently logged-in user's info (protected)
// --------------------------------------------------
exports.getMe = async (req, res) => {
  try {
    const [users] = await pool.query(
      'SELECT id, full_name, email, auth_provider, created_at FROM users WHERE id = ?',
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.json({ user: users[0] });
  } catch (error) {
    console.error('GetMe error:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

// --------------------------------------------------
// POST /api/auth/logout
// Clear the JWT cookie to log the user out
// --------------------------------------------------
exports.logout = (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: new Date(0), // Expire immediately
  });

  return res.json({ message: 'Logged out successfully.' });
};
