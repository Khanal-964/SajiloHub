// ============================================================
// FlashcardsLevel — Section Picker for a given JLPT level
// Shows 5 MNN sections (Lessons 1–5, 6–10, 11–15, 16–20, 21–25)
// Card counts are filtered to the current JLPT level.
// ============================================================

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MNN_SECTIONS, getCardCountForSection } from '../../data/mnnVocabulary';
import './Flashcards.css';

/* ---- Level metadata ---- */
const levelData = {
  n5: {
    name: 'N5',
    title: 'JLPT N5 Flashcards',
    desc: 'Build your foundation — core survival vocabulary from Minna no Nihongo Lessons 1–25.',
  },
  n4: {
    name: 'N4',
    title: 'JLPT N4 Flashcards',
    desc: 'Expand your vocabulary with N4-level words sourced from Minna no Nihongo Lessons 1–25.',
  },
  n3: {
    name: 'N3',
    title: 'JLPT N3 Flashcards',
    desc: 'Review N3-level expressions found within Minna no Nihongo Lessons 1–25.',
  },
  n2: {
    name: 'N2',
    title: 'JLPT N2 Flashcards',
    desc: 'Study the small selection of N2-level vocabulary that appears in Minna no Nihongo Lessons 1–25.',
  },
  n1: {
    name: 'N1',
    title: 'JLPT N1 Flashcards',
    desc: 'Study the rare N1-level vocabulary found within Minna no Nihongo Lessons 1–25.',
  },
};

const FlashcardsLevel = () => {
  const { level } = useParams();
  const lvl  = level?.toLowerCase();
  const data = levelData[lvl] || levelData['n5'];

  return (
    <div className="fc-placeholder-page">

      {/* ── Back Link ───────────────────────────────────────── */}
      <Link to="/flashcards" className="fc-back-link">
        ← Back to Flashcard Levels
      </Link>

      {/* ── Level Hero ──────────────────────────────────────── */}
      <div className="fc-level-hero" data-level={data.name}>
        <div className="fc-level-icon">{data.name}</div>
        <div className="fc-level-hero-text">
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
          <p className="fc-mnn-subtitle">
            みんなの にほんご · Lessons 1–25 · {data.name} vocabulary only
          </p>
        </div>
      </div>

      {/* ── Section Heading ─────────────────────────────────── */}
      <div className="fc-sections-header">
        <h2>Choose a Section</h2>
        <p>
          Each section covers 5 Minna no Nihongo lessons. Only{' '}
          <strong>{data.name}-level</strong> vocabulary is shown in this deck.
        </p>
      </div>

      {/* ── Section Cards Grid ──────────────────────────────── */}
      <div className="fc-sections-grid">
        {MNN_SECTIONS.map((sec) => {
          const cardCount = getCardCountForSection(sec.id, lvl);
          const isEmpty   = cardCount === 0;
          return (
            <Link
              key={sec.id}
              to={isEmpty ? '#' : `/flashcards/${level}/section/${sec.id}/play`}
              className={`fc-section-card${isEmpty ? ' fc-section-empty' : ''}`}
              onClick={isEmpty ? (e) => e.preventDefault() : undefined}
              title={isEmpty ? `No ${data.name} vocabulary in this section` : undefined}
            >
              <div className="fc-section-emoji">{sec.emoji}</div>

              <div className="fc-section-number">Section {sec.id}</div>
              <div className="fc-section-range">{sec.lessonRange}</div>
              <div className="fc-section-theme">{sec.theme}</div>

              <div className="fc-section-count">
                {isEmpty ? (
                  <span className="fc-section-count-empty">No {data.name} cards</span>
                ) : (
                  <>
                    <span className="fc-section-count-num">{cardCount}</span>
                    <span className="fc-section-count-label"> cards</span>
                  </>
                )}
              </div>

              <div className="fc-section-cta">
                {isEmpty ? `—  No ${data.name} words here` : 'Start Flashcards →'}
              </div>
            </Link>
          );
        })}
      </div>

      {/* ── Info Note ───────────────────────────────────────── */}
      <div className="fc-info-banner" style={{ marginTop: 40 }}>
        <span className="fc-info-icon">💡</span>
        <p>
          <strong>Note:</strong> Cards are strictly filtered to{' '}
          <strong>{data.name}-level vocabulary</strong> from the official JLPT word list.
          Words from Minna no Nihongo that belong to a different JLPT level will NOT appear
          here — switch levels to study them. Use ← → arrow keys to navigate and Space / F to flip!
        </p>
      </div>
    </div>
  );
};

export default FlashcardsLevel;
