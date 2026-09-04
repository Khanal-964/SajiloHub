import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SakuraPetals from '../../components/SakuraPetals';
import { lessonsData } from '../../data/grammarLessons';
import { 
  FaArrowLeft, 
  FaInfoCircle, 
  FaBookOpen, 
  FaComments, 
  FaLightbulb, 
  FaCheck, 
  FaTimes, 
  FaEye, 
  FaEyeSlash,
  FaAward
} from 'react-icons/fa';
import './GrammarTopicDetail.css';

const GrammarTopicDetail = () => {
  const { level, topicId } = useParams();
  const navigate = useNavigate();

  const currentLevel = level?.toLowerCase();
  const lessons = lessonsData[currentLevel];

  // Helper to find the specific topic and its parent lesson from lessonsData
  let foundTopic = null;
  let foundLesson = null;

  if (lessons) {
    for (const lesson of lessons) {
      const topic = lesson.topics.find((t) => t.id === topicId);
      if (topic) {
        foundTopic = topic;
        foundLesson = lesson;
        break;
      }
    }
  }

  // Safety check: redirect to level grammar list if topic does not exist
  useEffect(() => {
    if (!lessons || !foundTopic || !foundLesson) {
      if (currentLevel && lessonsData[currentLevel]) {
        navigate(`/theory/${currentLevel}/grammar`, { replace: true });
      } else {
        navigate('/theory', { replace: true });
      }
    }
  }, [lessons, foundTopic, foundLesson, currentLevel, navigate]);

  const [activeTab, setActiveTab] = useState('overview'); // overview, examples, tips, quiz
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({}); // { questionIndex: optionIndex }

  if (!lessons || !foundTopic || !foundLesson) return null;

  const handleSelectOption = (questionIndex, optionIndex) => {
    setSelectedQuizAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main className="topic-detail-page">
        {/* Breadcrumbs */}
        <nav className="topic-detail-breadcrumbs">
          <Link to="/theory">Theory Overview</Link>
          <span className="separator">/</span>
          <Link to={`/theory/${currentLevel}`}>{currentLevel.toUpperCase()}</Link>
          <span className="separator">/</span>
          <Link to={`/theory/${currentLevel}/grammar`}>Grammar Lessons</Link>
          <span className="separator">/</span>
          <Link to={`/theory/${currentLevel}/grammar/lesson/${foundLesson.lessonNum}`}>
            Lesson {foundLesson.lessonNum}
          </Link>
          <span className="separator">/</span>
          <span className="current">{foundTopic.pattern}</span>
        </nav>

        <div className="topic-detail-container">
          {/* Main Card */}
          <article className="topic-detail-card">
            {/* Header portion */}
            <header className="topic-detail-header">
              <div className="topic-meta-row">
                <span className="level-label-badge">{currentLevel.toUpperCase()} Syllabus</span>
                <span className="lesson-reference-label">Lesson {foundLesson.lessonNum}</span>
              </div>
              <h1 className="topic-pattern-main">{foundTopic.pattern}</h1>
              {foundTopic.pronunciation && (
                <span className="topic-pronunciation-text">[{foundTopic.pronunciation}]</span>
              )}
              <h2 className="topic-meaning-sub">{foundTopic.meaning}</h2>
            </header>

            <hr className="detail-divider" />

            {foundTopic.isImplemented ? (
              /* Implemented Topic Details with Tabbed Layout */
              <div className="topic-detailed-body">
                {/* Tabs Navigator */}
                <nav className="detail-tabs-nav">
                  <button 
                    type="button"
                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    <FaBookOpen className="tab-icon" />
                    <span>Overview & Rules</span>
                  </button>
                  <button 
                    type="button"
                    className={`tab-btn ${activeTab === 'examples' ? 'active' : ''}`}
                    onClick={() => setActiveTab('examples')}
                  >
                    <FaComments className="tab-icon" />
                    <span>Examples & Dialogue</span>
                  </button>
                  <button 
                    type="button"
                    className={`tab-btn ${activeTab === 'tips' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tips')}
                  >
                    <FaLightbulb className="tab-icon" />
                    <span>Study Tips</span>
                  </button>
                  <button 
                    type="button"
                    className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
                    onClick={() => setActiveTab('quiz')}
                  >
                    <FaAward className="tab-icon" />
                    <span>Practice Quiz</span>
                  </button>
                </nav>

                {/* Tab content panels */}
                <div className="tab-panels-content">
                  
                  {/* TAB 1: OVERVIEW & RULES */}
                  {activeTab === 'overview' && (
                    <div className="panel-fade-in">
                      {foundTopic.whenAndWhy && (
                        <section className="detail-panel-section when-why-section">
                          <h3>When & Why to Use</h3>
                          <p>{foundTopic.whenAndWhy}</p>
                        </section>
                      )}

                      <section className="detail-panel-section explanation-section">
                        <h3>Detailed Explanation</h3>
                        <p className="explanation-paragraph">{foundTopic.explanation}</p>
                      </section>

                      {foundTopic.formation && (
                        <section className="detail-panel-section formula-section">
                          <h3>Sentence Structure & Formation</h3>
                          <div className="formula-code-box">
                            <code>{foundTopic.formation.formula}</code>
                          </div>
                          {foundTopic.formation.rules && foundTopic.formation.rules.length > 0 && (
                            <ul className="formation-rules-list">
                              {foundTopic.formation.rules.map((rule, index) => (
                                <li key={index}>
                                  <span className="bullet">❀</span>
                                  <span>{rule}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </section>
                      )}

                      {foundTopic.conjugations && (
                        <section className="detail-panel-section conjugations-section">
                          <h3>Conjugation & Forms</h3>
                          <div className="table-responsive">
                            <table className="conjugations-table">
                              <thead>
                                <tr>
                                  {foundTopic.conjugations.headers.map((header, index) => (
                                    <th key={index}>{header}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {foundTopic.conjugations.rows.map((row, rowIndex) => (
                                  <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                      <td key={cellIndex}>{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </section>
                      )}
                    </div>
                  )}

                  {/* TAB 2: EXAMPLES & DIALOGUE */}
                  {activeTab === 'examples' && (
                    <div className="panel-fade-in">
                      <section className="detail-panel-section examples-section">
                        <h3>Example Sentences</h3>
                        <div className="detail-examples-list">
                          {foundTopic.examples && foundTopic.examples.map((ex, idx) => (
                            <div key={idx} className="detail-example-item">
                              <span className="ex-num">{idx + 1}.</span>
                              <div className="ex-content">
                                <span className="ex-jp">{ex.japanese}</span>
                                {ex.romaji && <span className="ex-romaji">{ex.romaji}</span>}
                                <span className="ex-en">{ex.english}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      {foundTopic.conversation && (
                        <section className="detail-panel-section conversation-section">
                          <h3>Natural Dialogue</h3>
                          <p className="conversation-context-text">
                            <strong>Context:</strong> {foundTopic.conversation.context}
                          </p>
                          <div className="conversation-chat-box">
                            {foundTopic.conversation.dialogue.map((dialogue, index) => {
                              const isEven = index % 2 === 0;
                              return (
                                <div key={index} className={`chat-bubble-row ${isEven ? 'left' : 'right'}`}>
                                  <div className="chat-avatar">{dialogue.speaker[0]}</div>
                                  <div className="chat-bubble-content">
                                    <span className="chat-speaker">{dialogue.speaker}</span>
                                    <p className="chat-jp">{dialogue.japanese}</p>
                                    <p className="chat-en">{dialogue.english}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </section>
                      )}
                    </div>
                  )}

                  {/* TAB 3: STUDY TIPS */}
                  {activeTab === 'tips' && (
                    <div className="panel-fade-in">
                      {foundTopic.memoryTips && (
                        <section className="detail-panel-section memory-tips-section">
                          <h3>
                            <FaLightbulb className="section-title-icon highlight" /> 
                            <span>Memory Tips</span>
                          </h3>
                          <div className="tip-box">
                            <p>{foundTopic.memoryTips}</p>
                          </div>
                        </section>
                      )}

                      {foundTopic.comparison && (
                        <section className="detail-panel-section comparison-section">
                          <h3>Similar Grammar Comparison</h3>
                          <div className="comparison-box">
                            <div className="comparison-header">
                              <span>VS</span> <strong>{foundTopic.comparison.similarPattern}</strong>
                            </div>
                            <p className="comparison-difference-text">
                              {foundTopic.comparison.difference}
                            </p>
                          </div>
                        </section>
                      )}

                      {foundTopic.realLifeUsage && (
                        <section className="detail-panel-section real-life-section">
                          <h3>Real-Life Usage Examples</h3>
                          <div className="real-life-box">
                            <p>{foundTopic.realLifeUsage}</p>
                          </div>
                        </section>
                      )}

                      <div className="tips-row">
                        {foundTopic.notes && (
                          <section className="guide-box notes-box">
                            <h3>Usage Notes & Exceptions</h3>
                            <p>{foundTopic.notes}</p>
                          </section>
                        )}
                        {foundTopic.mistakes && (
                          <section className="guide-box mistakes-box">
                            <h3>Common Mistakes</h3>
                            <p>{foundTopic.mistakes}</p>
                          </section>
                        )}
                      </div>
                    </div>
                  )}

                  {/* TAB 4: PRACTICE QUIZ */}
                  {activeTab === 'quiz' && (
                    <div className="panel-fade-in">
                      {/* Interactive JLPT Questions */}
                      {foundTopic.jlptQuestions && foundTopic.jlptQuestions.length > 0 && (
                        <section className="detail-panel-section quiz-questions-section">
                          <h3>JLPT-Style Practice Questions</h3>
                          <div className="quiz-list">
                            {foundTopic.jlptQuestions.map((q, qIndex) => {
                              const selectedOption = selectedQuizAnswers[qIndex];
                              const hasAnswered = selectedOption !== undefined;
                              return (
                                <div key={qIndex} className="quiz-question-card">
                                  <span className="quiz-question-num">Question {qIndex + 1}</span>
                                  <p className="quiz-question-text">{q.question}</p>
                                  <div className="quiz-options-list">
                                    {q.options.map((opt, oIndex) => {
                                      const isSelected = selectedOption === oIndex;
                                      const isCorrect = q.correctIndex === oIndex;
                                      
                                      let optionClass = '';
                                      if (hasAnswered) {
                                        if (isCorrect) {
                                          optionClass = 'correct';
                                        } else if (isSelected) {
                                          optionClass = 'incorrect';
                                        } else {
                                          optionClass = 'disabled';
                                        }
                                      } else if (isSelected) {
                                        optionClass = 'selected';
                                      }

                                      return (
                                        <button
                                          key={oIndex}
                                          type="button"
                                          className={`quiz-option-btn ${optionClass}`}
                                          onClick={() => !hasAnswered && handleSelectOption(qIndex, oIndex)}
                                          disabled={hasAnswered}
                                        >
                                          <span className="option-label">{oIndex + 1}</span>
                                          <span className="option-text">{opt}</span>
                                          {hasAnswered && isCorrect && <FaCheck className="quiz-feedback-icon text-success" />}
                                          {hasAnswered && isSelected && !isCorrect && <FaTimes className="quiz-feedback-icon text-danger" />}
                                        </button>
                                      );
                                    })}
                                  </div>
                                  
                                  {hasAnswered && (
                                    <div className={`quiz-explanation-box ${selectedOption === q.correctIndex ? 'success' : 'failure'}`}>
                                      <div className="explanation-status">
                                        {selectedOption === q.correctIndex ? (
                                          <span className="status-correct"><FaCheck /> Correct!</span>
                                        ) : (
                                          <span className="status-incorrect"><FaTimes /> Incorrect</span>
                                        )}
                                      </div>
                                      <p className="explanation-text"><strong>Explanation:</strong> {q.explanation}</p>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </section>
                      )}

                      {/* Exercises with Show/Hide answers */}
                      {foundTopic.exercises && (
                        <section className="detail-panel-section exercises-section">
                          <h3>Written Practice Exercises</h3>
                          <div className="exercise-questions-box">
                            <ul className="exercise-list">
                              {foundTopic.exercises.questions.map((q, idx) => (
                                <li key={idx} className="exercise-question-item">
                                  <span className="ex-bullet">Q{idx + 1}.</span>
                                  <p>{q}</p>
                                </li>
                              ))}
                            </ul>

                            <button
                              type="button"
                              className={`toggle-answers-btn ${showAnswers ? 'visible' : ''}`}
                              onClick={() => setShowAnswers(!showAnswers)}
                            >
                              {showAnswers ? (
                                <>
                                  <FaEyeSlash className="eye-icon" />
                                  <span>Hide Answers & Explanations</span>
                                </>
                              ) : (
                                <>
                                  <FaEye className="eye-icon" />
                                  <span>Show Answers & Explanations</span>
                                </>
                              )}
                            </button>

                            {showAnswers && (
                              <div className="exercise-answers-panel">
                                <h4>Answer Key & Explanations</h4>
                                <ul className="answers-list">
                                  {foundTopic.exercises.answers.map((ans, idx) => (
                                    <li key={idx} className="exercise-answer-item">
                                      <span className="ans-bullet">A{idx + 1}.</span>
                                      <p>{ans}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </section>
                      )}
                    </div>
                  )}

                </div>
              </div>
            ) : (
              /* Unimplemented Lesson Placeholder */
              <div className="topic-unimplemented-body">
                <div className="clean-curation-notice">
                  <FaInfoCircle className="curation-notice-icon" />
                  <h3>Lesson Coming Soon</h3>
                  <p>Detailed lesson content will be available soon.</p>
                </div>
              </div>
            )}
          </article>

          {/* Navigation Helper */}
          <div className="topic-detail-footer-nav">
            <Link 
              to={`/theory/${currentLevel}/grammar/lesson/${foundLesson.lessonNum}`} 
              className="back-to-lesson-trigger-btn"
            >
              <FaArrowLeft className="back-arrow-icon" />
              <span>Back to Lesson {foundLesson.lessonNum} ({foundLesson.title})</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GrammarTopicDetail;
