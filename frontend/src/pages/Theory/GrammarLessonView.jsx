import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SakuraPetals from '../../components/SakuraPetals';
import { lessonsData } from '../../data/grammarLessons';
import { FaArrowLeft, FaArrowRight, FaCheck, FaInfoCircle, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import './GrammarLessonView.css';

const GrammarLessonView = () => {
  const { level, lessonNum } = useParams();
  const navigate = useNavigate();

  const currentLevel = level?.toLowerCase();
  const currentLessonNum = parseInt(lessonNum, 10);

  const lessons = lessonsData[currentLevel];
  const lesson = lessons?.find((l) => l.lessonNum === currentLessonNum);

  // Redirect if parameters are invalid
  useEffect(() => {
    if (!lessons || !lesson) {
      navigate('/theory', { replace: true });
    }
  }, [lessons, lesson, navigate]);

  const [expandedTopics, setExpandedTopics] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const completionKey = `sajilohub_completed_${currentLevel}_lesson_${currentLessonNum}`;

  // Load completion status
  useEffect(() => {
    const done = localStorage.getItem(completionKey) === 'true';
    setIsCompleted(done);
    // Reset expanded states on route change
    setExpandedTopics({});
  }, [completionKey]);

  if (!lessons || !lesson) return null;

  const toggleTopicExpand = (id) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleComplete = () => {
    const nextState = !isCompleted;
    setIsCompleted(nextState);
    localStorage.setItem(completionKey, String(nextState));
  };

  const hasPrev = currentLessonNum > 1;
  const hasNext = currentLessonNum < lessons.length;

  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main className="lesson-view-page">
        {/* Breadcrumbs */}
        <nav className="lesson-view-breadcrumbs">
          <Link to="/theory">Theory Overview</Link>
          <span className="separator">/</span>
          <Link to={`/theory/${currentLevel}`}>{currentLevel.toUpperCase()}</Link>
          <span className="separator">/</span>
          <Link to={`/theory/${currentLevel}/grammar`}>Grammar Lessons</Link>
          <span className="separator">/</span>
          <span className="current">Lesson {lesson.lessonNum}</span>
        </nav>

        <div className="lesson-view-container">
          {/* Header Card */}
          <header className="lesson-view-header">
            <div className="lesson-header-meta">
              <span className="lesson-badge-tag">{currentLevel.toUpperCase()} Level</span>
              <span className="lesson-badge-tag">Lesson {lesson.lessonNum} of {lessons.length}</span>
            </div>
            <h1 className="lesson-title-heading">{lesson.title}</h1>
            <p className="lesson-subtitle-desc">{lesson.description}</p>

            <button 
              type="button"
              className={`lesson-complete-toggle-btn ${isCompleted ? 'completed' : ''}`}
              onClick={handleToggleComplete}
            >
              <FaCheck className="check-icon" />
              <span>{isCompleted ? 'Completed (Click to Undo)' : 'Mark Lesson as Completed'}</span>
            </button>
          </header>

          {/* Grammar Topics Accordion */}
          <div className="lesson-topics-accordion">
            <h2 className="topics-heading">Grammar Patterns in this Lesson</h2>
            <div className="topics-accordion-list">
              {lesson.topics.map((topic) => {
                const isExpanded = !!expandedTopics[topic.id];
                return (
                  <div 
                    key={topic.id} 
                    className={`topic-accordion-card ${isExpanded ? 'expanded' : ''} ${!topic.isImplemented ? 'unimplemented' : ''}`}
                    onClick={() => toggleTopicExpand(topic.id)}
                  >
                    {/* Accordion Trigger */}
                    <div className="topic-accordion-trigger">
                      <div className="trigger-left-col">
                        <span className="pattern-jp-tag">{topic.pattern}</span>
                        {topic.pronunciation && (
                          <span className="pattern-pronounce">[{topic.pronunciation}]</span>
                        )}
                        <span className="pattern-translation-summary">{topic.meaning}</span>
                      </div>
                      <div className="trigger-right-col">
                        <span className="expansion-chevron-btn">
                          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </div>
                    </div>

                    {/* Accordion Expand Panel */}
                    <div className="topic-accordion-panel-wrapper">
                      <div className="topic-accordion-panel" onClick={(e) => e.stopPropagation()}>
                        {topic.isImplemented ? (
                          <>
                            {/* Explanation */}
                            <div className="panel-block explanation-block">
                              <h3>Grammar Explanation</h3>
                              <p>{topic.explanation}</p>
                            </div>

                            {/* Formula */}
                            {topic.formula && (
                              <div className="panel-block formula-block">
                                <h3>Construction Formula</h3>
                                <div className="syntax-highlight-formula">
                                  <code>{topic.formula}</code>
                                </div>
                              </div>
                            )}

                            {/* Examples */}
                            {topic.examples && topic.examples.length > 0 && (
                              <div className="panel-block examples-block">
                                <h3>Example Sentences</h3>
                                <div className="lesson-examples-list">
                                  {topic.examples.map((ex, idx) => (
                                    <div key={idx} className="lesson-example-card">
                                      <span className="example-jp">{ex.japanese}</span>
                                      <span className="example-en">{ex.english}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Notes & Mistakes */}
                            <div className="usage-guide-grid">
                              {topic.notes && (
                                <div className="guide-card notes-card">
                                  <h3>Usage Notes</h3>
                                  <p>{topic.notes}</p>
                                </div>
                              )}
                              {topic.mistakes && (
                                <div className="guide-card mistakes-card">
                                  <h3>Common Mistakes</h3>
                                  <p>{topic.mistakes}</p>
                                </div>
                              )}
                            </div>
                          </>
                        ) : (
                          /* Unimplemented Lesson View */
                          <div className="unimplemented-topic-placeholder">
                            <FaInfoCircle className="placeholder-info-icon" />
                            <p>Detailed lesson content will be available soon.</p>
                          </div>
                        )}

                        {/* Dedicated Link */}
                        <div className="topic-dedicated-link-box">
                          <Link 
                            to={`/theory/${currentLevel}/grammar/topic/${topic.id}`} 
                            className="dedicated-topic-btn"
                          >
                            <span>Open Dedicated Lesson Page</span>
                            <FaExternalLinkAlt className="external-link-icon" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Previous/Next Navigation */}
          <div className="lesson-pager-navigation">
            {hasPrev ? (
              <Link 
                to={`/theory/${currentLevel}/grammar/lesson/${currentLessonNum - 1}`} 
                className="pager-btn prev-btn"
              >
                <FaArrowLeft />
                <div className="pager-label-block">
                  <span className="pager-tag">Previous Lesson</span>
                  <span className="pager-title">Lesson {currentLessonNum - 1}</span>
                </div>
              </Link>
            ) : (
              <div className="pager-btn-placeholder" />
            )}

            {hasNext ? (
              <Link 
                to={`/theory/${currentLevel}/grammar/lesson/${currentLessonNum + 1}`} 
                className="pager-btn next-btn"
              >
                <div className="pager-label-block">
                  <span className="pager-tag">Next Lesson</span>
                  <span className="pager-title">Lesson {currentLessonNum + 1}</span>
                </div>
                <FaArrowRight />
              </Link>
            ) : (
              <div className="pager-btn-placeholder" />
            )}
          </div>

          {/* Footer Back triggers */}
          <div className="lesson-view-footer">
            <Link to={`/theory/${currentLevel}/grammar`} className="back-to-course-btn">
              ← Back to Grammar Course Index
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GrammarLessonView;
