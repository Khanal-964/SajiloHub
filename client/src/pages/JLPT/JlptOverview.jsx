import React from 'react';
import { Link } from 'react-router-dom';
import './Jlpt.css';

const JlptOverview = () => {
  const levels = [
    { id: 'n5', name: 'N5', title: 'JLPT N5', desc: 'Basic Japanese - Understanding of some basic Japanese' },
    { id: 'n4', name: 'N4', title: 'JLPT N4', desc: 'Elementary Japanese - Understanding of basic Japanese' },
    { id: 'n3', name: 'N3', title: 'JLPT N3', desc: 'Intermediate Japanese - Understanding of Japanese used in everyday situations' },
    { id: 'n2', name: 'N2', title: 'JLPT N2', desc: 'Pre-Advanced Japanese - Understanding of Japanese in everyday situations, and in a variety of circumstances' },
    { id: 'n1', name: 'N1', title: 'JLPT N1', desc: 'Advanced Japanese - Understanding of Japanese used in a broad range of circumstances' },
  ];

  return (
    <div className="jlpt-page">
      <div className="jlpt-header">
        <h1>JLPT Practice Exams</h1>
        <p>Prepare for your Japanese Language Proficiency Test with our full-length practice exams.</p>
      </div>
      
      <div className="jlpt-levels-grid">
        {levels.map((level) => (
          <Link to={`/jlpt/${level.id}`} key={level.id} className="jlpt-level-card">
            <div className="level-badge">{level.name}</div>
            <h2>{level.title}</h2>
            <p>{level.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JlptOverview;
