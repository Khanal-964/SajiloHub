// ============================================
// App — Root component with routing
// Handles protected and guest routes
// ============================================

import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './App.css';

/**
 * ProtectedRoute — only accessible to authenticated users.
 * Shows a loading spinner while the session is being verified,
 * then redirects to /login if no user is found.
 */
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading your session...</p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

/**
 * GuestRoute — only accessible to unauthenticated users.
 * Redirects authenticated users to /dashboard.
 */
const GuestRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
    );
  }

  return !user ? children : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <Routes>
      {/* Homepage (public) */}
      <Route path="/" element={<Homepage />} />

      {/* Guest-only routes */}
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/register"
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        }
      />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Forgot Password — UI placeholder */}
      <Route
        path="/forgot-password"
        element={
          <div className="auth-page">
            <div className="auth-card forgot-page">
              <h2>Reset Password</h2>
              <p>This feature is coming soon. Stay tuned!</p>
              <Link to="/login">← Back to Login</Link>
            </div>
          </div>
        }
      />

      {/* Catch-all — redirect to homepage */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
