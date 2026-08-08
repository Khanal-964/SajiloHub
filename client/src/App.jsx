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
import Translator from './pages/Translator';
import BasicLearning from './pages/BasicLearning/BasicLearning';
import TheoryOverview from './pages/Theory/TheoryOverview';
import TheoryLevel from './pages/Theory/TheoryLevel';
import TheorySection from './pages/Theory/TheorySection';
import GrammarLessonsList from './pages/Theory/GrammarLessonsList';
import GrammarLessonView from './pages/Theory/GrammarLessonView';
import GrammarTopicDetail from './pages/Theory/GrammarTopicDetail';
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

/**
 * PlaceholderPage — for upcoming features
 */
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: '140px 20px 60px', textAlign: 'center', minHeight: '60vh' }}>
    <h1 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2.5rem' }}>{title}</h1>
    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>This page is coming soon. Stay tuned!</p>
    <Link to="/" style={{ display: 'inline-block', marginTop: '30px', padding: '12px 28px', background: 'var(--primary-gradient)', color: '#fff', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontWeight: '600', boxShadow: 'var(--shadow-md)' }}>
      ← Back to Home
    </Link>
  </div>
);

function App() {
  return (
    <Routes>
      {/* Homepage (public) */}
      <Route path="/" element={<Homepage />} />

      {/* Translator (public) */}
      <Route path="/translator" element={<Translator />} />

      {/* Basic Learning (Interactive) */}
      <Route path="/basic-learning" element={<BasicLearning />} />

      {/* Theory (Dynamic Module Routes) */}
      <Route path="/theory" element={<TheoryOverview />} />
      <Route path="/theory/:level" element={<TheoryLevel />} />
      
      {/* Explicit Grammar Course Routes */}
      <Route path="/theory/n5/grammar" element={<GrammarLessonsList level="n5" />} />
      <Route path="/theory/n4/grammar" element={<GrammarLessonsList level="n4" />} />
      <Route path="/theory/n3/grammar" element={<GrammarLessonsList level="n3" />} />
      <Route path="/theory/n2/grammar" element={<GrammarLessonsList level="n2" />} />
      <Route path="/theory/n1/grammar" element={<GrammarLessonsList level="n1" />} />

      {/* Lesson & Topic detail views */}
      <Route path="/theory/:level/grammar/lesson/:lessonNum" element={<GrammarLessonView />} />
      <Route path="/theory/:level/grammar/topic/:topicId" element={<GrammarTopicDetail />} />
      
      <Route path="/theory/:level/:section" element={<TheorySection />} />

      {/* JLPT Test (Placeholder routes) */}
      <Route path="/jlpt" element={<PlaceholderPage title="JLPT Tests Overview" />} />
      <Route path="/jlpt/n5" element={<PlaceholderPage title="JLPT N5 Tests" />} />
      <Route path="/jlpt/n4" element={<PlaceholderPage title="JLPT N4 Tests" />} />
      <Route path="/jlpt/n3" element={<PlaceholderPage title="JLPT N3 Tests" />} />
      <Route path="/jlpt/n2" element={<PlaceholderPage title="JLPT N2 Tests" />} />
      <Route path="/jlpt/n1" element={<PlaceholderPage title="JLPT N1 Tests" />} />
      <Route path="/jlpt/boost" element={<PlaceholderPage title="JLPT Boost" />} />
      <Route path="/jlpt/review" element={<PlaceholderPage title="JLPT Review" />} />

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
