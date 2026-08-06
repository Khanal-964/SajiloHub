// ============================================
// Login Page
// Email/password login + Google OAuth
// ============================================

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GoogleAuthButton from '../components/GoogleAuthButton';

// Deterministic sakura petal positions (no Math.random — stable across re-renders)
const PETALS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 5.3 + 2) % 100}%`,
  delay: `${(i * 1.7) % 12}s`,
  duration: `${8 + (i * 1.1) % 7}s`,
  size: `${8 + (i * 1.3) % 8}px`,
  opacity: 0.25 + (i % 5) * 0.1,
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Floating sakura petals background */}
      <div className="sakura-container">
        {PETALS.map((p) => (
          <div
            key={p.id}
            className="petal"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Auth card */}
      <div className="auth-card">
        {/* Brand */}
        <div className="auth-header">
          <h1 className="brand-name">
            <span className="brand-japanese">学</span>
            SajiloHub
          </h1>
          <p className="brand-tagline">Learn Japanese the Easy Way</p>
        </div>

        <h2 className="auth-title">Welcome Back</h2>

        {/* Error banner */}
        {error && <div className="error-message" role="alert">{error}</div>}

        {/* Login form */}
        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <div className="password-wrapper">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                disabled={isLoading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="form-options">
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? <span className="spinner" /> : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Google Sign-In */}
        <GoogleAuthButton onError={setError} />

        {/* Switch to Register */}
        <p className="auth-switch">
          Don&apos;t have an account?{' '}
          <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
