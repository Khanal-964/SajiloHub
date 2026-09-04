import React from 'react';
import { Link } from 'react-router-dom';
import './Flashcards.css';

const levels = [
  {
    id: 'n5',
    name: 'N5',
    title: 'JLPT N5 Flashcards',
    desc: 'Master the fundamentals — hiragana, katakana, basic kanji, and ~800 essential vocabulary words.',
  },
  {
    id: 'n4',
    name: 'N4',
    title: 'JLPT N4 Flashcards',
    desc: 'Expand your vocabulary to ~1,500 words and reinforce elementary grammar patterns.',
  },
  {
    id: 'n3',
    name: 'N3',
    title: 'JLPT N3 Flashcards',
    desc: 'Tackle ~3,750 words covering everyday conversation and intermediate expressions.',
  },
  {
    id: 'n2',
    name: 'N2',
    title: 'JLPT N2 Flashcards',
    desc: 'Command ~6,000 words and complex grammar used in newspapers and formal speech.',
  },
  {
    id: 'n1',
    name: 'N1',
    title: 'JLPT N1 Flashcards',
    desc: 'Achieve advanced fluency with ~10,000+ words spanning literature, business, and academia.',
  },
];

const FlashcardsOverview = () => {
  return (
    <div className="flashcards-page">
      {/* ---- Header ---- */}
      <div className="flashcards-header">
        <div className="fc-hero-badge">
          <span>🃏</span> JLPT Flashcards
        </div>
        <h1>Study Smarter with Flashcards</h1>
        <p>
          Boost your JLPT vocabulary and kanji retention using our spaced-repetition flashcard
          system. Pick a level below to get started.
        </p>
      </div>

      {/* ---- Info Banner ---- */}
      <div className="fc-info-banner">
        <span className="fc-info-icon">💡</span>
        <p>
          <strong>How it works:</strong> Each deck is based on{' '}
          <strong>Minna no Nihongo Lessons 1–25</strong> — all words written in
          Hiragana &amp; Katakana only (no Kanji). Pick a level, choose a
          section, and start flipping!
        </p>
      </div>

      {/* ---- Level Grid ---- */}
      <div className="fc-levels-grid">
        {levels.map((level) => (
          <Link to={`/flashcards/${level.id}`} key={level.id} className="fc-level-card">
            <div className="fc-level-badge">{level.name}</div>
            <h2>{level.title}</h2>
            <p>{level.desc}</p>
            <div className="fc-card-footer">
              Explore deck →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FlashcardsOverview;
