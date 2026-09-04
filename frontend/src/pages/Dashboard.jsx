// ============================================
// Dashboard Page — Minimal placeholder
// Shows welcome message + stats after login
// ============================================

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="dashboard">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <h1 className="brand-name">
          <span className="brand-japanese">学</span>
          SajiloHub
        </h1>
        <button onClick={handleLogout} className="btn-logout">
          Sign Out
        </button>
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">
        <div className="welcome-card">
          <h2>ようこそ！ Welcome, {user?.full_name}!</h2>
          <p>You&apos;re ready to start your Japanese learning journey.</p>

          <div className="dashboard-stats">
            <div className="stat-card">
              <span className="stat-icon">📚</span>
              <h3>0</h3>
              <p>Lessons Completed</p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🔥</span>
              <h3>0</h3>
              <p>Day Streak</p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⭐</span>
              <h3>0</h3>
              <p>Points Earned</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
