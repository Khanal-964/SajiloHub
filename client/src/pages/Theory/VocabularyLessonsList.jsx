import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SakuraPetals from '../../components/SakuraPetals';
import { vocabularyData } from '../../data/vocabularyData';
import { FaListUl, FaSearch, FaCheckCircle, FaChevronRight, FaArrowLeft, FaAward } from 'react-icons/fa';
import './VocabularyLessonsList.css';

const LEVEL_TITLES = {
  n5: 'JLPT N5 Vocabulary Course',
  n4: 'JLPT N4 Vocabulary Course',
  n3: 'JLPT N3 Vocabulary Course',
  n2: 'JLPT N2 Vocabulary Course',
  n1: 'JLPT N1 Vocabulary Course',
};

const VocabularyLessonsList = ({ level: propLevel }) => {
  const { level: routeLevel } = useParams();
  const navigate = useNavigate();

  const currentLevel = (propLevel || routeLevel)?.toLowerCase();
  const levelTitle = LEVEL_TITLES[currentLevel];
  const lessons = vocabularyData[currentLevel];

  // Safety redirect
  useEffect(() => {
    if (!levelTitle || !lessons) {
      navigate('/theory', { replace: true });
    }
  }, [levelTitle, lessons, navigate]);

  const [searchQuery, setSearchQuery] = useState('');
  const [completedLessons, setCompletedLessons] = useState({});
  const [progressPercent, setProgressPercent] = useState(0);

  // Load completion progress from localStorage on mount
  useEffect(() => {
    if (!lessons) return;
    
    const completionMap = {};
    let completedCount = 0;
    
    lessons.forEach((les) => {
      const key = `sajilohub_completed_vocab_${currentLevel}_lesson_${les.lessonNum}`;
      const isDone = localStorage.getItem(key) === 'true';
      completionMap[les.lessonNum] = isDone;
      if (isDone) completedCount++;
    });

    setCompletedLessons(completionMap);
    setProgressPercent(Math.round((completedCount / lessons.length) * 100));
  }, [currentLevel, lessons]);

  if (!levelTitle || !lessons) return null;

  // Compile a flat list of all words for the search indexer
  const allWords = lessons.reduce((acc, lesson) => {
    return acc.concat(
      lesson.words.map((wordObj) => ({
        ...wordObj,
        lessonNum: lesson.lessonNum,
      }))
    );
  }, []);

  // Filter words by query
  const filteredWords = allWords.filter((w) => {
    const q = searchQuery.toLowerCase();
    return (
      w.word.toLowerCase().includes(q) ||
      w.meaning.toLowerCase().includes(q)
    );
  });

  const isSearching = searchQuery.trim() !== '';

  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main className="vocab-lessons-page">
        {/* Breadcrumbs */}
        <nav className="list-breadcrumbs">
          <Link to="/theory">Theory Overview</Link>
          <span className="separator">/</span>
          <Link to={`/theory/${currentLevel}`}>{currentLevel.toUpperCase()}</Link>
          <span className="separator">/</span>
          <span className="current">Vocabulary Lessons</span>
        </nav>

        <div className="vocab-list-container">
          {/* Header */}
          <header className="vocab-header">
            <div className="vocab-icon-wrapper">
              <FaListUl />
            </div>
            <span className="vocab-jp-subtitle">単語コース (Tango)</span>
            <h1 className="vocab-title">{levelTitle}</h1>
            <p className="vocab-desc">
              Master essential vocabulary for {currentLevel.toUpperCase()}. A structured roadmap of {lessons.length} lessons, each containing 50-60 unique words.
            </p>
          </header>

          {/* Progress Dashboard */}
          {!isSearching && (
            <div className="vocab-progress-card">
              <div className="vocab-progress-info">
                <div className="dashboard-progress-text">
                  <FaAward className="award-icon" />
                  <span>Course Progress: <strong>{progressPercent}% Complete</strong></span>
                </div>
                <span className="progress-fraction">
                  {Object.values(completedLessons).filter(Boolean).length} / {lessons.length} Lessons Finished
                </span>
              </div>
              <div className="vocab-progress-track">
                <div 
                  className="vocab-progress-fill" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Search Controls */}
          <div className="vocab-search-controls">
            <div className="vocab-search-bar">
              <FaSearch className="vocab-search-icon" />
              <input
                type="text"
                placeholder="Search Japanese vocabulary or English meanings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="vocab-search-input"
              />
            </div>
            {isSearching && (
              <div className="search-results-info">
                Found <strong>{filteredWords.length}</strong> words matching your search
              </div>
            )}
          </div>

          {/* Lessons Grid vs Search results */}
          {!isSearching ? (
            <div className="vocab-grid-layout">
              {lessons.map((lesson) => {
                const isCompleted = completedLessons[lesson.lessonNum];
                return (
                  <Link 
                    key={lesson.lessonNum} 
                    to={`/theory/${currentLevel}/vocabulary/lesson/${lesson.lessonNum}`}
                    className={`vocab-lesson-card ${isCompleted ? 'completed' : ''}`}
                  >
                    <div className="vocab-card-top">
                      <span className="vocab-lesson-number">Lesson {lesson.lessonNum}</span>
                      {isCompleted && (
                        <span className="vocab-completed-badge">
                          <FaCheckCircle /> Completed
                        </span>
                      )}
                    </div>
                    <h3 className="vocab-lesson-title">{lesson.title}</h3>
                    <p className="vocab-word-count">{lesson.words.length} Words</p>

                    <div className="vocab-card-action">
                      <span>Start Learning</span>
                      <FaChevronRight className="chevron-icon" />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            /* Search Results View */
            <div className="vocab-search-results">
              {filteredWords.length > 0 ? (
                filteredWords.map((w, idx) => (
                  <Link
                    key={idx}
                    to={`/theory/${currentLevel}/vocabulary/lesson/${w.lessonNum}`}
                    className="vocab-search-result-card"
                  >
                    <div>
                      <span className="vocab-result-word">{w.word}</span>
                      <span className="vocab-result-meaning">{w.meaning}</span>
                    </div>
                    <div className="vocab-result-lesson">
                      Lesson {w.lessonNum}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="no-search-results">
                  <p>No vocabulary found matching "{searchQuery}". Try other keywords.</p>
                </div>
              )}
            </div>
          )}

          {/* Footer Back triggers */}
          <div className="list-footer-nav" style={{ marginTop: '40px' }}>
            <Link to={`/theory/${currentLevel}`} className="list-back-btn">
              <FaArrowLeft /> Back to {currentLevel.toUpperCase()} Overview
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VocabularyLessonsList;
