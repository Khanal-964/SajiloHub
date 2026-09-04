import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SakuraPetals from '../../components/SakuraPetals';
import { lessonsData } from '../../data/grammarLessons';
import { FaBook, FaSearch, FaCheckCircle, FaChevronRight, FaArrowLeft, FaAward } from 'react-icons/fa';
import './GrammarLessonsList.css';

const LEVEL_TITLES = {
  n5: 'JLPT N5 Grammar Course',
  n4: 'JLPT N4 Grammar Course',
  n3: 'JLPT N3 Grammar Course',
  n2: 'JLPT N2 Grammar Course',
  n1: 'JLPT N1 Grammar Course',
};

const GrammarLessonsList = ({ level: propLevel }) => {
  const { level: routeLevel } = useParams();
  const navigate = useNavigate();

  const currentLevel = (propLevel || routeLevel)?.toLowerCase();
  const levelTitle = LEVEL_TITLES[currentLevel];
  const lessons = lessonsData[currentLevel];

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
      const key = `sajilohub_completed_${currentLevel}_lesson_${les.lessonNum}`;
      const isDone = localStorage.getItem(key) === 'true';
      completionMap[les.lessonNum] = isDone;
      if (isDone) completedCount++;
    });

    setCompletedLessons(completionMap);
    setProgressPercent(Math.round((completedCount / lessons.length) * 100));
  }, [currentLevel, lessons]);

  if (!levelTitle || !lessons) return null;

  // Compile a flat list of all topics for the search indexer
  const allTopics = lessons.reduce((acc, lesson) => {
    return acc.concat(
      lesson.topics.map((topic) => ({
        ...topic,
        lessonNum: lesson.lessonNum,
        lessonTitle: lesson.title,
      }))
    );
  }, []);

  // Filter topics by query
  const filteredTopics = allTopics.filter((t) => {
    const q = searchQuery.toLowerCase();
    return (
      t.pattern.toLowerCase().includes(q) ||
      (t.pronunciation && t.pronunciation.toLowerCase().includes(q)) ||
      t.meaning.toLowerCase().includes(q)
    );
  });

  const isSearching = searchQuery.trim() !== '';

  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main className="lessons-list-page">
        {/* Breadcrumbs */}
        <nav className="list-breadcrumbs">
          <Link to="/theory">Theory Overview</Link>
          <span className="separator">/</span>
          <Link to={`/theory/${currentLevel}`}>{currentLevel.toUpperCase()}</Link>
          <span className="separator">/</span>
          <span className="current">Grammar Lessons</span>
        </nav>

        <div className="list-container">
          {/* Header */}
          <header className="list-header">
            <div className="list-icon-wrapper">
              <FaBook />
            </div>
            <span className="list-jp-subtitle">文法コース</span>
            <h1 className="list-title">{levelTitle}</h1>
            <p className="list-desc">
              A structured roadmap comprising {lessons.length} lessons and {lessons.length * 5} level-specific grammar topics. Master them step-by-step.
            </p>
          </header>

          {/* Progress Dashboard */}
          {!isSearching && (
            <div className="progress-dashboard-card">
              <div className="progress-dashboard-info">
                <div className="dashboard-progress-text">
                  <FaAward className="award-icon" />
                  <span>Course Progress: <strong>{progressPercent}% Complete</strong></span>
                </div>
                <span className="progress-fraction">
                  {Object.values(completedLessons).filter(Boolean).length} / {lessons.length} Lessons Finished
                </span>
              </div>
              <div className="progress-dashboard-bar-track">
                <div 
                  className="progress-dashboard-bar-fill" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Search Controls */}
          <div className="list-search-controls">
            <div className="search-bar-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search patterns or meanings in this course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="list-search-input"
              />
            </div>
            {isSearching && (
              <div className="search-results-info">
                Found <strong>{filteredTopics.length}</strong> patterns matching your search
              </div>
            )}
          </div>

          {/* Lessons Grid vs Search results */}
          {!isSearching ? (
            <div className="lessons-grid-layout">
              {lessons.map((lesson) => {
                const isCompleted = completedLessons[lesson.lessonNum];
                return (
                  <Link 
                    key={lesson.lessonNum} 
                    to={`/theory/${currentLevel}/grammar/lesson/${lesson.lessonNum}`}
                    className={`lesson-list-card ${isCompleted ? 'completed' : ''}`}
                  >
                    <div className="card-top-row">
                      <span className="lesson-number-label">Lesson {lesson.lessonNum}</span>
                      {isCompleted && (
                        <span className="lesson-completed-badge">
                          <FaCheckCircle /> Completed
                        </span>
                      )}
                    </div>
                    <h3 className="lesson-card-title">{lesson.title}</h3>
                    <p className="lesson-card-desc">{lesson.description}</p>
                    
                    <div className="lesson-syllabus-pills">
                      {lesson.topics.map((t, idx) => (
                        <span key={idx} className="syllabus-pill">
                          {t.pattern}
                        </span>
                      ))}
                    </div>

                    <div className="lesson-card-action">
                      <span>Start Learning</span>
                      <FaChevronRight className="chevron-icon" />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            /* Search Results View */
            <div className="searched-topics-list">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic) => (
                  <Link
                    key={topic.id}
                    to={`/theory/${currentLevel}/grammar/lesson/${topic.lessonNum}`}
                    className="search-topic-result-card"
                  >
                    <div className="result-card-left">
                      <span className="result-pattern">{topic.pattern}</span>
                      {topic.pronunciation && (
                        <span className="result-romaji">[{topic.pronunciation}]</span>
                      )}
                      <span className="result-meaning">{topic.meaning}</span>
                    </div>
                    <div className="result-card-right">
                      <span className="result-lesson-tag">Lesson {topic.lessonNum}</span>
                      <FaChevronRight className="arrow-icon" />
                    </div>
                  </Link>
                ))
              ) : (
                <div className="no-search-results">
                  <p>No grammar points found matching "{searchQuery}". Try other keywords.</p>
                </div>
              )}
            </div>
          )}

          {/* Footer Back triggers */}
          <div className="list-footer-nav">
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

export default GrammarLessonsList;
