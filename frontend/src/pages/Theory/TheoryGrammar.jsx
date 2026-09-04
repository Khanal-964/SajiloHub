import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SakuraPetals from '../../components/SakuraPetals';
import { grammarData } from '../../data/grammarData';
import { FaBook, FaSearch, FaChevronDown, FaChevronUp, FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import './TheoryGrammar.css';

const LEVEL_TITLES = {
  n5: 'JLPT N5 Grammar',
  n4: 'JLPT N4 Grammar',
  n3: 'JLPT N3 Grammar',
  n2: 'JLPT N2 Grammar',
  n1: 'JLPT N1 Grammar',
};

const TheoryGrammar = ({ level: propLevel }) => {
  const { level: routeLevel } = useParams();
  const navigate = useNavigate();
  
  // Use the level passed as prop, fallback to the route parameter
  const rawLevel = propLevel || routeLevel;
  const currentLevel = rawLevel?.toLowerCase();
  
  const levelTitle = LEVEL_TITLES[currentLevel];
  const grammarPoints = grammarData[currentLevel];

  // Safety check: Redirect if level is invalid or data is not found
  useEffect(() => {
    if (!levelTitle || !grammarPoints) {
      navigate('/theory', { replace: true });
    }
  }, [levelTitle, grammarPoints, navigate]);

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  if (!levelTitle || !grammarPoints) return null;

  // Toggle card expansion
  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter grammar points based on search query
  const filteredGrammar = grammarPoints.filter((point) => {
    const query = searchQuery.toLowerCase();
    return (
      point.pattern.toLowerCase().includes(query) ||
      (point.romaji && point.romaji.toLowerCase().includes(query)) ||
      point.meaning.toLowerCase().includes(query) ||
      point.explanation.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main className="theory-grammar-page">
        {/* Breadcrumbs */}
        <nav className="grammar-breadcrumbs">
          <Link to="/theory">Theory Overview</Link>
          <span className="separator">/</span>
          <Link to={`/theory/${currentLevel}`}>{currentLevel.toUpperCase()}</Link>
          <span className="separator">/</span>
          <span className="current">Grammar</span>
        </nav>

        <div className="grammar-container">
          {/* Header Section */}
          <header className="grammar-page-header">
            <div className="grammar-header-icon-wrapper">
              <FaBook />
            </div>
            <span className="grammar-subtitle">JLPT Syllabus Guide</span>
            <h1 className="grammar-title">{levelTitle}</h1>
            <p className="grammar-description">
              Study the official grammar patterns required for the {currentLevel.toUpperCase()} exam. Click any card to expand construction formulas, example sentences, and translations.
            </p>
          </header>

          {/* Search Controls */}
          <div className="grammar-controls">
            <div className="search-bar-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by grammar, romaji, or meaning..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="grammar-search-input"
              />
            </div>
            <div className="results-indicator">
              Showing <strong>{filteredGrammar.length}</strong> of {grammarPoints.length} grammar points
            </div>
          </div>

          {/* Grammar List */}
          {filteredGrammar.length > 0 ? (
            <div className="grammar-list">
              {filteredGrammar.map((point) => {
                const isExpanded = !!expandedCards[point.id];
                return (
                  <div 
                    key={point.id} 
                    className={`grammar-card-item ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => toggleExpand(point.id)}
                  >
                    {/* Collapsed View (Header) */}
                    <div className="grammar-card-header">
                      <div className="grammar-pattern-block">
                        <span className="grammar-badge">{currentLevel.toUpperCase()}</span>
                        <h2 className="grammar-pattern-text">{point.pattern}</h2>
                      </div>
                      
                      {point.romaji && (
                        <span className="grammar-romaji-text">[{point.romaji}]</span>
                      )}
                      
                      <div className="grammar-summary-meaning">
                        {point.meaning}
                      </div>

                      <button 
                        type="button"
                        className="grammar-expand-btn"
                        aria-label={isExpanded ? 'Collapse card' : 'Expand card'}
                      >
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>

                    {/* Expandable Content Panel */}
                    <div className="grammar-card-panel-wrapper">
                      <div className="grammar-card-panel" onClick={(e) => e.stopPropagation()}>
                        <div className="panel-section explanation-section">
                          <h4>Explanation</h4>
                          <p>{point.explanation}</p>
                        </div>

                        {point.formula && (
                          <div className="panel-section formula-section">
                            <h4>How to Form</h4>
                            <div className="formula-box">
                              <code>{point.formula}</code>
                            </div>
                          </div>
                        )}

                        <div className="panel-section examples-section">
                          <h4>Example Sentences</h4>
                          <div className="examples-list">
                            {point.examples.map((example, index) => (
                              <div key={index} className="example-item">
                                <div className="jp-sentence">{example.japanese}</div>
                                <div className="en-sentence">{example.english}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="panel-section future-lessons-section">
                          <div className="future-notice-box">
                            <FaInfoCircle className="notice-icon" />
                            <span>Detailed video lessons and audio quizzes for <strong>{point.pattern}</strong> are in production. Stay tuned!</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-results-card">
              <p>No grammar points match your search query. Try searching for something else!</p>
            </div>
          )}

          {/* Navigation Helper */}
          <div className="grammar-footer-nav">
            <Link to={`/theory/${currentLevel}`} className="grammar-back-link">
              <FaArrowLeft /> Back to {currentLevel.toUpperCase()} Overview
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TheoryGrammar;
