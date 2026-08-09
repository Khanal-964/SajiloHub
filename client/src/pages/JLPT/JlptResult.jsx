import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Jlpt.css';

const JlptResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state || !state.testData || !state.answers) {
    // If accessed directly without test data, redirect back
    return (
      <div className="jlpt-page" style={{ textAlign: 'center' }}>
        <h2>No Result Found</h2>
        <p>Please complete a test to view results.</p>
        <button className="start-btn" onClick={() => navigate('/jlpt')}>Back to JLPT</button>
      </div>
    );
  }

  const { testData, answers } = state;
  const { level, id, sections } = testData;

  // Calculate scores
  let vocabScore = 0;
  let vocabTotal = 0;
  let grammarScore = 0;
  let grammarTotal = 0;
  let readingScore = 0;
  let readingTotal = 0;

  const allQuestions = [];

  // Parse Vocabulary
  if (sections.vocabulary && sections.vocabulary.questions) {
    sections.vocabulary.questions.forEach(q => {
      vocabTotal++;
      const isCorrect = answers[q.id] === q.correctAnswer;
      if (isCorrect) vocabScore++;
      allQuestions.push({ ...q, section: 'Vocabulary', isCorrect, selectedAnswer: answers[q.id] });
    });
  }

  // Parse Grammar
  if (sections.grammar && sections.grammar.questions) {
    sections.grammar.questions.forEach(q => {
      grammarTotal++;
      const isCorrect = answers[q.id] === q.correctAnswer;
      if (isCorrect) grammarScore++;
      allQuestions.push({ ...q, section: 'Grammar', isCorrect, selectedAnswer: answers[q.id] });
    });
  }

  // Parse Reading
  if (sections.reading && sections.reading.passages) {
    sections.reading.passages.forEach(passage => {
      if (passage.questions) {
        passage.questions.forEach(q => {
          readingTotal++;
          const isCorrect = answers[q.id] === q.correctAnswer;
          if (isCorrect) readingScore++;
          allQuestions.push({ ...q, passageText: passage.text, section: 'Reading', isCorrect, selectedAnswer: answers[q.id] });
        });
      }
    });
  }

  const totalScore = vocabScore + grammarScore + readingScore;
  const totalQuestions = vocabTotal + grammarTotal + readingTotal;
  const percentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

  return (
    <div className="jlpt-page">
      <div className="result-header">
        <h1>Test Result</h1>
        <p>{testData.title}</p>
        <Link to={`/jlpt/${level.toLowerCase()}`} style={{ display: 'inline-block', marginTop: '10px', color: 'var(--text-secondary)' }}>
          ← Back to {level} Tests
        </Link>
      </div>

      <div className="score-circle">
        <span className="score-value">{percentage}%</span>
        <span className="score-total">{totalScore} / {totalQuestions}</span>
      </div>

      <div className="score-breakdown">
        <div className="breakdown-card">
          <h3>Vocabulary</h3>
          <div className="b-score">{vocabScore} / {vocabTotal}</div>
        </div>
        <div className="breakdown-card">
          <h3>Grammar</h3>
          <div className="b-score">{grammarScore} / {grammarTotal}</div>
        </div>
        <div className="breakdown-card">
          <h3>Reading</h3>
          <div className="b-score">{readingScore} / {readingTotal}</div>
        </div>
      </div>

      <div className="review-section">
        <h2 className="review-section-title">Detailed Review</h2>
        {allQuestions.map((q, idx) => (
          <div key={q.id} className={`review-item ${q.isCorrect ? 'correct' : 'incorrect'}`}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px', display: 'block' }}>
              Q{idx + 1} • {q.section}
            </span>
            {q.passageText && (
              <div className="reading-passage" style={{ fontSize: '0.95rem', padding: '10px', marginBottom: '16px' }}>
                {q.passageText.substring(0, 100)}...
              </div>
            )}
            <div className="review-question">{q.question}</div>
            
            <div className="review-options">
              {q.options.map((opt, optIdx) => {
                let className = 'review-option';
                if (optIdx === q.correctAnswer) {
                  className += ' is-correct';
                } else if (optIdx === q.selectedAnswer) {
                  className += ' is-selected-incorrect';
                }
                
                return (
                  <div key={optIdx} className={className}>
                    <span>{optIdx + 1}. {opt}</span>
                    {optIdx === q.correctAnswer && <span>✓ Correct</span>}
                    {optIdx === q.selectedAnswer && optIdx !== q.correctAnswer && <span>✗ Your Answer</span>}
                  </div>
                );
              })}
            </div>

            <div className="explanation-box">
              <h4>Explanation</h4>
              <p>{q.explanation || 'No explanation provided.'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JlptResult;
