import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { vocabularyData } from '../../data/vocabularyData';
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './VocabularyLessonView.css';

const VocabularyLessonView = () => {
  const { level, lessonNum } = useParams();
  const navigate = useNavigate();

  const currentLevel = level?.toLowerCase();
  const currentLessonNum = parseInt(lessonNum, 10);

  const levelData = vocabularyData[currentLevel];
  const lessonData = levelData?.find((l) => l.lessonNum === currentLessonNum);

  // Redirect if invalid level or lesson
  useEffect(() => {
    if (!levelData || !lessonData) {
      navigate(`/theory/${currentLevel}/vocabulary`, { replace: true });
    }
  }, [levelData, lessonData, currentLevel, navigate]);

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const key = `sajilohub_completed_vocab_${currentLevel}_lesson_${currentLessonNum}`;
    setIsCompleted(localStorage.getItem(key) === 'true');
    window.scrollTo(0, 0);
  }, [currentLevel, currentLessonNum]);

  if (!lessonData) return null;

  const handleToggleComplete = () => {
    const key = `sajilohub_completed_vocab_${currentLevel}_lesson_${currentLessonNum}`;
    if (isCompleted) {
      localStorage.removeItem(key);
      setIsCompleted(false);
    } else {
      localStorage.setItem(key, 'true');
      setIsCompleted(true);
    }
  };

  const prevLesson = currentLessonNum > 1 ? currentLessonNum - 1 : null;
  const nextLesson = currentLessonNum < levelData.length ? currentLessonNum + 1 : null;

  return (
    <>
      <Navbar />
      <main className="vocab-lesson-view-page">
        <div className="vocab-lesson-container">
          
          <nav className="list-breadcrumbs">
            <Link to="/theory">Theory</Link>
            <span className="separator">/</span>
            <Link to={`/theory/${currentLevel}`}>{currentLevel.toUpperCase()}</Link>
            <span className="separator">/</span>
            <Link to={`/theory/${currentLevel}/vocabulary`}>Vocabulary</Link>
            <span className="separator">/</span>
            <span className="current">Lesson {currentLessonNum}</span>
          </nav>

          <header className="vocab-view-header">
            <h1 className="vocab-view-title">{lessonData.title}</h1>
            <p className="vocab-view-meta">JLPT {currentLevel.toUpperCase()} • {lessonData.words.length} Words</p>
          </header>

          <div className="vocab-flashcard-grid">
            {lessonData.words.map((w, idx) => (
              <div key={idx} className="vocab-word-card">
                <div className="vocab-jp-word">{w.word}</div>
                <div className="vocab-en-meaning">{w.meaning}</div>
              </div>
            ))}
          </div>

          <div className="vocab-action-bar">
            <button 
              className={`vocab-mark-complete-btn ${isCompleted ? 'completed' : ''}`}
              onClick={handleToggleComplete}
            >
              <FaCheckCircle />
              {isCompleted ? 'Lesson Completed' : 'Mark Lesson as Complete'}
            </button>

            <div className="vocab-lesson-navigation">
              {prevLesson ? (
                <Link to={`/theory/${currentLevel}/vocabulary/lesson/${prevLesson}`} className="vocab-nav-btn">
                  <FaArrowLeft /> Previous Lesson
                </Link>
              ) : (
                <div /> 
              )}

              {nextLesson ? (
                <Link to={`/theory/${currentLevel}/vocabulary/lesson/${nextLesson}`} className="vocab-nav-btn">
                  Next Lesson <FaArrowRight />
                </Link>
              ) : (
                <Link to={`/theory/${currentLevel}/vocabulary`} className="vocab-nav-btn">
                  Finish Course <FaCheckCircle />
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VocabularyLessonView;
