import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Jlpt.css';

const JlptLevel = () => {
  const { level } = useParams();
  const formattedLevel = level ? level.toUpperCase() : 'N5';

  const tests = [
    { id: 1, title: `${formattedLevel} Practice Test 1`, desc: 'Full length test including Vocabulary, Grammar, and Reading.' },
    { id: 2, title: `${formattedLevel} Practice Test 2`, desc: 'Full length test including Vocabulary, Grammar, and Reading.' },
    { id: 3, title: `${formattedLevel} Practice Test 3`, desc: 'Full length test including Vocabulary, Grammar, and Reading.' },
    { id: 4, title: `${formattedLevel} Practice Test 4`, desc: 'Full length test including Vocabulary, Grammar, and Reading.' },
    { id: 5, title: `${formattedLevel} Practice Test 5`, desc: 'Full length test including Vocabulary, Grammar, and Reading.' },
  ];

  return (
    <div className="jlpt-page">
      <div className="jlpt-header">
        <h1>JLPT {formattedLevel} Tests</h1>
        <p>Select a practice test below. Each test mimics the real JLPT format.</p>
        <Link to="/jlpt" style={{ display: 'inline-block', marginTop: '16px', color: 'var(--text-secondary)' }}>
          ← Back to Levels
        </Link>
      </div>
      
      <div className="jlpt-test-list">
        {tests.map((test) => (
          <div key={test.id} className="test-item">
            <div className="test-info">
              <h3>{test.title}</h3>
              <p>{test.desc}</p>
            </div>
            <Link to={`/jlpt/${level}/test/${test.id}`} className="start-btn">
              Start Test
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JlptLevel;
