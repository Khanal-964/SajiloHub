import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getCardsForSection, MNN_SECTIONS } from '../../data/mnnVocabulary';
import './Flashcards.css';

// ── Helpers ──────────────────────────────────────────────────
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ── Component ─────────────────────────────────────────────────
const FlashcardEngine = () => {
  const { level, sectionId } = useParams();
  const navigate = useNavigate();

  const sectionNum = parseInt(sectionId, 10);
  const sectionMeta = MNN_SECTIONS.find((s) => s.id === sectionNum);

  // ── Load cards — filtered to the current JLPT level ───────
  const originalCards = useMemo(
    () => getCardsForSection(sectionNum, level),
    [sectionNum, level]
  );

  // ── Shuffle state ──────────────────────────────────────────
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);

  const cards = isShuffled ? shuffledCards : originalCards;

  // ── Core state ─────────────────────────────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped]       = useState(false);

  // Guard: invalid section or no cards at this level
  if (!sectionMeta || originalCards.length === 0) {
    return (
      <div className="fc-engine-page">
        <Link to={`/flashcards/${level}`} className="fc-back-link">
          ← Back to Sections
        </Link>
        <div className="fc-empty-section">
          <div className="fc-empty-icon">📭</div>
          <h2>No {level?.toUpperCase()} cards in this section</h2>
          <p>
            None of the vocabulary in{' '}
            <strong>{sectionMeta?.lessonRange || 'this section'}</strong> is classified
            at <strong>{level?.toUpperCase()}</strong> level.
            <br />
            Try a different section, or switch to a different JLPT level.
          </p>
          <Link to={`/flashcards/${level}`} className="fc-restart-btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: 16 }}>
            ← Back to {level?.toUpperCase()} Sections
          </Link>
        </div>
      </div>
    );
  }

  const totalCards   = cards.length;
  const currentCard  = cards[currentIndex] || {};
  const progress     = totalCards > 0 ? Math.round(((currentIndex + 1) / totalCards) * 100) : 0;

  // ── Handlers ───────────────────────────────────────────────
  const handleFlip = () => setIsFlipped((f) => !f);

  const goNext = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((i) => Math.min(i + 1, totalCards - 1));
    }, 150);
  }, [totalCards]);

  const goPrev = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((i) => Math.max(i - 1, 0));
    }, 150);
  }, []);

  const handleShuffle = () => {
    if (!isShuffled) {
      setShuffledCards(shuffleArray(originalCards));
    }
    setIsShuffled((s) => !s);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    if (isShuffled) {
      setShuffledCards(shuffleArray(originalCards));
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === 'l') goNext();
      if (e.key === 'ArrowLeft'  || e.key === 'h') goPrev();
      if (e.key === ' ' || e.key === 'f') { e.preventDefault(); handleFlip(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  return (
    <div className="fc-engine-page">

      {/* ── Top Bar ─────────────────────────────────────────── */}
      <div className="fc-engine-topbar">
        <Link to={`/flashcards/${level}`} className="fc-back-link">
          ← Back to Sections
        </Link>

        <div className="fc-engine-meta">
          <span className="fc-engine-level-badge">{level?.toUpperCase()}</span>
          <span className="fc-engine-section-label">
            {sectionMeta.emoji} {sectionMeta.label} · {sectionMeta.lessonRange}
          </span>
        </div>

        <button
          className={`fc-shuffle-btn ${isShuffled ? 'active' : ''}`}
          onClick={handleShuffle}
          title="Shuffle cards"
        >
          🔀 {isShuffled ? 'Shuffled' : 'Shuffle'}
        </button>
      </div>

      {/* ── Progress Bar ────────────────────────────────────── */}
      <div className="fc-progress-section">
        <div className="fc-progress-bar-wrap">
          <div
            className="fc-progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="fc-progress-stats">
          <span className="fc-counter">
            Card <strong>{currentIndex + 1}</strong> / {totalCards}
          </span>
          <span>
            {progress}% completed
          </span>
        </div>
      </div>

      {/* ── Flashcard ───────────────────────────────────────── */}
      <div className="fc-card-container">
        <div
          className={`fc-card ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleFlip()}
          aria-label={isFlipped ? `Back: ${currentCard.meaning}` : `Front: ${currentCard.word}`}
        >
          {/* FRONT — Japanese */}
          <div className="fc-card-face fc-card-front">
            <div className="fc-card-lesson-tag">
              レッスン {currentCard.lessonNum}
            </div>
            <div className="fc-card-word">{currentCard.word}</div>
            {currentCard.reading && currentCard.reading !== currentCard.word && (
              <div className="fc-card-reading">{currentCard.reading}</div>
            )}
            <div className="fc-card-flip-hint">タップして 意味を みる ▾</div>
          </div>

          {/* BACK — English */}
          <div className="fc-card-face fc-card-back">
            <div className="fc-card-lesson-tag">
              レッスン {currentCard.lessonNum}
            </div>
            <div className="fc-card-word-back">{currentCard.word}</div>
            <div className="fc-card-meaning">{currentCard.meaning}</div>
            <div className="fc-card-lesson-title">{currentCard.lessonTitle}</div>
          </div>
        </div>
      </div>

      {/* ── Navigation ──────────────────────────────────────── */}
      <div className="fc-nav-row">
        <button
          className="fc-nav-btn fc-prev-btn"
          onClick={goPrev}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>

        <div className="fc-nav-center">
          <button className="fc-restart-btn" onClick={handleRestart} title="Restart deck">
            ↺ Restart
          </button>
        </div>

        <button
          className="fc-nav-btn fc-next-btn"
          onClick={goNext}
          disabled={currentIndex === totalCards - 1}
        >
          Next →
        </button>
      </div>

      {/* ── Keyboard Hint ───────────────────────────────────── */}
      <p className="fc-keyboard-hint">
        ← → arrow keys to navigate · Space / F to flip
      </p>

      {/* ── Section Completion Message ───────────────────────── */}
      {currentIndex === totalCards - 1 && (
        <div className="fc-completion-banner">
          <span className="fc-completion-icon">🎉</span>
          <div>
            <strong>You've reached the last card!</strong>
          </div>
          <button className="fc-restart-btn" onClick={handleRestart}>
            ↺ Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashcardEngine;
