// ============================================
// App — Root component with routing
// Handles protected and guest routes
// ============================================

import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
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
import JlptOverview from './pages/JLPT/JlptOverview';
import JlptLevel from './pages/JLPT/JlptLevel';
import JlptTestEngine from './pages/JLPT/JlptTestEngine';
import JlptResult from './pages/JLPT/JlptResult';
import FlashcardsOverview from './pages/Flashcards/FlashcardsOverview';
import FlashcardsLevel from './pages/Flashcards/FlashcardsLevel';
import FlashcardEngine from './pages/Flashcards/FlashcardEngine';
import GrammarLessonsList from './pages/Theory/GrammarLessonsList';
import GrammarLessonView from './pages/Theory/GrammarLessonView';
import GrammarTopicDetail from './pages/Theory/GrammarTopicDetail';
import VocabularyLessonsList from './pages/Theory/VocabularyLessonsList';
import VocabularyLessonView from './pages/Theory/VocabularyLessonView';
import KanjiLessonsList from './pages/Theory/KanjiLessonsList';
import KanjiLessonView from './pages/Theory/KanjiLessonView';
import './App.css';

/**
 * ProtectedRoute — only accessible to authenticated users.
 * Shows a loading spinner while the session is being verified,
 * then redirects to /login if no user is found, storing the requested location.
 */
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading your session...</p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

/**
 * GuestRoute — only accessible to unauthenticated users.
 * Redirects authenticated users to the home page (/).
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

  return !user ? children : <Navigate to="/" replace />;
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

      {/* Basic Learning (Protected) */}
      <Route path="/basic-learning" element={<ProtectedRoute><BasicLearning /></ProtectedRoute>} />

      {/* Theory (Protected) */}
      <Route path="/theory" element={<ProtectedRoute><TheoryOverview /></ProtectedRoute>} />
      <Route path="/theory/:level" element={<ProtectedRoute><TheoryLevel /></ProtectedRoute>} />
      
      {/* Explicit Grammar Course Routes (Protected) */}
      <Route path="/theory/n5/grammar" element={<ProtectedRoute><GrammarLessonsList level="n5" /></ProtectedRoute>} />
      <Route path="/theory/n4/grammar" element={<ProtectedRoute><GrammarLessonsList level="n4" /></ProtectedRoute>} />
      <Route path="/theory/n3/grammar" element={<ProtectedRoute><GrammarLessonsList level="n3" /></ProtectedRoute>} />
      <Route path="/theory/n2/grammar" element={<ProtectedRoute><GrammarLessonsList level="n2" /></ProtectedRoute>} />
      <Route path="/theory/n1/grammar" element={<ProtectedRoute><GrammarLessonsList level="n1" /></ProtectedRoute>} />

      {/* Lesson & Topic detail views for Grammar (Protected) */}
      <Route path="/theory/:level/grammar/lesson/:lessonNum" element={<ProtectedRoute><GrammarLessonView /></ProtectedRoute>} />
      <Route path="/theory/:level/grammar/topic/:topicId" element={<ProtectedRoute><GrammarTopicDetail /></ProtectedRoute>} />

      {/* Explicit Vocabulary Course Routes (Protected) */}
      <Route path="/theory/n5/vocabulary" element={<ProtectedRoute><VocabularyLessonsList level="n5" /></ProtectedRoute>} />
      <Route path="/theory/n4/vocabulary" element={<ProtectedRoute><VocabularyLessonsList level="n4" /></ProtectedRoute>} />
      <Route path="/theory/n3/vocabulary" element={<ProtectedRoute><VocabularyLessonsList level="n3" /></ProtectedRoute>} />
      <Route path="/theory/n2/vocabulary" element={<ProtectedRoute><VocabularyLessonsList level="n2" /></ProtectedRoute>} />
      <Route path="/theory/n1/vocabulary" element={<ProtectedRoute><VocabularyLessonsList level="n1" /></ProtectedRoute>} />
      
      {/* Lesson detail view for Vocabulary (Protected) */}
      <Route path="/theory/:level/vocabulary/lesson/:lessonNum" element={<ProtectedRoute><VocabularyLessonView /></ProtectedRoute>} />
      
      {/* Explicit Kanji Course Routes (Protected) */}
      <Route path="/theory/n5/kanji" element={<ProtectedRoute><KanjiLessonsList level="n5" /></ProtectedRoute>} />
      <Route path="/theory/n4/kanji" element={<ProtectedRoute><KanjiLessonsList level="n4" /></ProtectedRoute>} />
      <Route path="/theory/n3/kanji" element={<ProtectedRoute><KanjiLessonsList level="n3" /></ProtectedRoute>} />
      <Route path="/theory/n2/kanji" element={<ProtectedRoute><KanjiLessonsList level="n2" /></ProtectedRoute>} />
      <Route path="/theory/n1/kanji" element={<ProtectedRoute><KanjiLessonsList level="n1" /></ProtectedRoute>} />
      
      {/* Lesson detail view for Kanji (Protected) */}
      <Route path="/theory/:level/kanji/lesson/:lessonNum" element={<ProtectedRoute><KanjiLessonView /></ProtectedRoute>} />

      <Route path="/theory/:level/:section" element={<ProtectedRoute><TheorySection /></ProtectedRoute>} />

      {/* JLPT Test (Protected) */}
      <Route path="/jlpt" element={<ProtectedRoute><JlptOverview /></ProtectedRoute>} />
      <Route path="/jlpt/:level" element={<ProtectedRoute><JlptLevel /></ProtectedRoute>} />
      <Route path="/jlpt/:level/test/:testId" element={<ProtectedRoute><JlptTestEngine /></ProtectedRoute>} />
      <Route path="/jlpt/:level/test/:testId/results" element={<ProtectedRoute><JlptResult /></ProtectedRoute>} />

      {/* Flashcards (Protected) */}
      <Route path="/flashcards" element={<ProtectedRoute><FlashcardsOverview /></ProtectedRoute>} />
      <Route path="/flashcards/:level" element={<ProtectedRoute><FlashcardsLevel /></ProtectedRoute>} />
      <Route
        path="/flashcards/:level/section/:sectionId/play"
        element={<ProtectedRoute><FlashcardEngine /></ProtectedRoute>}
      />

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

      {/* Note: Dashboard route removed from auth flow as Home is the main page now */}
      
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
