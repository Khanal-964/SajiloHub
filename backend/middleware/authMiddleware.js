// ============================================
// JWT Authentication Middleware
// Reads token from httpOnly cookie, verifies it,
// and attaches decoded user payload to req.user
// ============================================

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Read JWT from the httpOnly cookie named "token"
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'Not authenticated. Please log in.',
    });
  }

  try {
    // Verify the token and extract the payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, email, iat, exp }
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Session expired. Please log in again.',
    });
  }
};

module.exports = authMiddleware;
