import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Jlpt.css';

const JlptTestEngine = () => {
  const { level, testId } = useParams();
  const navigate = useNavigate();
  
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Test State
  const [activeSection, setActiveSection] = useState('vocabulary'); // vocabulary, grammar, reading
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: selectedOptionIndex }
  const [timeLeft, setTimeLeft] = useState(0); // in seconds
  
  // Load data dynamically
  useEffect(() => {
    const loadTest = async () => {
      try {
        setLoading(true);
        // Note: In Vite, dynamic imports with template literals need to be careful.
        // For now, we simulate fetching by importing a JS module or we can fetch a static JSON from public.
        // Assuming we place data in src/data/jlpt/{level}/test{id}.json
        // For the sake of this build, we use a dynamic import.
        const data = await import(`../../data/jlpt/${level}/test${testId}.json`);
        setTestData(data.default || data);
        
        // Initialize timer for first section
        if (data.sections && data.sections.vocabulary) {
          setTimeLeft(data.sections.vocabulary.timeLimit * 60);
        }
      } catch (err) {
        console.error("Failed to load test data", err);
        setError("Test data not found or is still being generated.");
      } finally {
        setLoading(false);
      }
    };
    
    loadTest();
  }, [level, testId]);

  // Timer Countdown
  useEffect(() => {
    if (loading || error || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, loading, error]);

  // Handle auto-submit section or test when time is up
  useEffect(() => {
    if (timeLeft === 0 && testData) {
      // Auto move to next section or submit
      // For simplicity in practice mode, we just let it sit at 0 and show warning, 
      // but in strict mode we would auto-submit. Let's just show warning for now.
    }
  }, [timeLeft, testData]);

  const handleOptionSelect = (qId, optIdx) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: optIdx
    }));
  };

  const handleSectionChange = (sectionKey) => {
    setActiveSection(sectionKey);
    setCurrentQuestionIndex(0);
    // Note: in a real JLPT exam, sections are timed separately and you cannot go back.
    // For this practice engine, we allow free navigation but reset the timer visual.
    if (testData.sections[sectionKey]) {
      setTimeLeft(testData.sections[sectionKey].timeLimit * 60);
    }
  };

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to submit the test?')) {
      navigate(`/jlpt/${level}/test/${testId}/results`, {
        state: { testData, answers }
      });
    }
  };

  if (loading) return <div className="jlpt-page" style={{textAlign: 'center', paddingTop: '100px'}}>Loading Test...</div>;
  if (error) return <div className="jlpt-page" style={{textAlign: 'center', paddingTop: '100px'}}>{error}</div>;
  if (!testData) return null;

  // Derive current view based on section
  let currentQuestions = [];
  let isReading = false;
  
  if (activeSection === 'vocabulary' && testData.sections.vocabulary) {
    currentQuestions = testData.sections.vocabulary.questions;
  } else if (activeSection === 'grammar' && testData.sections.grammar) {
    currentQuestions = testData.sections.grammar.questions;
  } else if (activeSection === 'reading' && testData.sections.reading) {
    isReading = true;
    // Flatten reading questions for the grid navigation, but we render them grouped by passage
    testData.sections.reading.passages.forEach(p => {
      p.questions.forEach(q => {
        currentQuestions.push({ ...q, passageText: p.text });
      });
    });
  }

  const currentQ = currentQuestions[currentQuestionIndex];

  // Format time
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="test-engine-container">
      <div className="test-engine-header">
        <h2 style={{ fontSize: '1.2rem', margin: 0 }}>{testData.title}</h2>
        <div className={`timer ${timeLeft < 300 && timeLeft > 0 ? 'warning' : ''}`}>
          ⏱ {formatTime(Math.max(0, timeLeft))}
        </div>
      </div>

      <div className="section-tabs">
        {['vocabulary', 'grammar', 'reading'].map(sec => (
          testData.sections[sec] && (
            <div 
              key={sec} 
              className={`section-tab ${activeSection === sec ? 'active' : ''}`}
              onClick={() => handleSectionChange(sec)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </div>
          )
        ))}
      </div>

      <div className="test-content">
        <div className="question-area">
          {currentQ ? (
            <>
              {isReading && currentQ.passageText && (
                <div className="reading-passage">
                  {currentQ.passageText}
                </div>
              )}
              
              <div className="question-text">
                {currentQuestionIndex + 1}. {currentQ.question}
              </div>
              
              <div className="options-list">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentQ.id] === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`option-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleOptionSelect(currentQ.id, idx)}
                    >
                      <div className="option-marker">{idx + 1}</div>
                      <div className="option-text">{opt}</div>
                    </div>
                  );
                })}
              </div>

              <div className="action-buttons">
                <button 
                  className="btn-nav" 
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                >
                  ← Previous
                </button>
                <button 
                  className="btn-nav" 
                  disabled={currentQuestionIndex === currentQuestions.length - 1}
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                >
                  Next →
                </button>
              </div>
            </>
          ) : (
            <div>No questions available for this section.</div>
          )}
        </div>

        <div className="navigation-area">
          <h3 style={{ marginBottom: '16px', fontSize: '1.1rem' }}>Navigation</h3>
          <div className="question-grid">
            {currentQuestions.map((q, idx) => {
              const isAnswered = answers[q.id] !== undefined;
              const isActive = idx === currentQuestionIndex;
              let classes = 'grid-item';
              if (isAnswered) classes += ' answered';
              if (isActive) classes += ' active';
              
              return (
                <div 
                  key={q.id} 
                  className={classes}
                  onClick={() => setCurrentQuestionIndex(idx)}
                >
                  {idx + 1}
                </div>
              );
            })}
          </div>
          
          <button className="btn-submit" onClick={handleSubmit}>
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default JlptTestEngine;
