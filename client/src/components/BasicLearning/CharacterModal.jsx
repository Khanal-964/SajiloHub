import React, { useEffect } from 'react';
import HandwritingCanvas from './HandwritingCanvas';

const CharacterModal = ({
  character,
  onClose,
  onNext,
  onPrev,
  isBookmarked,
  onToggleBookmark,
  isLearned,
  onToggleLearned
}) => {
  if (!character) return null;

  // Handle key presses for navigation & escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Audio pronunciation using Web Speech API (ja-JP)
  const speakChar = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(character.char);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.7; // Slightly slower for clear learning
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
  };

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Header Controls */}
        <div style={styles.modalHeader}>
          <div style={styles.leftControls}>
            <button 
              onClick={onToggleBookmark} 
              style={{
                ...styles.headerBtn,
                color: isBookmarked ? '#e8a838' : 'var(--text-muted)'
              }}
              aria-label="Bookmark character"
            >
              {isBookmarked ? '★' : '☆'}
            </button>
            <button
              onClick={onToggleLearned}
              style={{
                ...styles.learnedBtn,
                backgroundColor: isLearned ? 'rgba(46, 125, 50, 0.1)' : 'transparent',
                borderColor: isLearned ? '#2e7d32' : 'var(--border)',
                color: isLearned ? '#2e7d32' : 'var(--text-secondary)'
              }}
            >
              {isLearned ? '✓ Learned' : 'Mark Learned'}
            </button>
          </div>
          <button onClick={onClose} style={styles.closeBtn}>&times;</button>
        </div>

        {/* Modal Main Content Split */}
        <div style={styles.modalBody}>
          
          {/* Left Panel: Info, audio, examples */}
          <div style={styles.infoPanel}>
            <div style={styles.charHero}>
              <h1 style={styles.bigChar}>{character.char}</h1>
              <div style={styles.pronounceContainer}>
                <span style={styles.romajiText}>/{character.romaji}/</span>
                <button onClick={speakChar} style={styles.audioBtn} title="Listen Pronunciation">
                  🔊 Listen
                </button>
              </div>
            </div>

            <div style={styles.metaInfo}>
              <div style={styles.metaRow}>
                <span>Stroke Count:</span>
                <strong>{character.strokeCount}</strong>
              </div>
              <div style={styles.metaRow}>
                <span>Writing Style:</span>
                <strong style={{textTransform: 'capitalize'}}>{character.type || 'Kana'}</strong>
              </div>
            </div>

            {/* Examples */}
            <div style={styles.sectionHeader}>Vocabulary Example</div>
            <div style={styles.wordCard}>
              <div style={styles.wordJp}>{character.exampleWord.jp}</div>
              <div style={styles.wordRomaji}>Romaji: {character.exampleWord.romaji}</div>
              <div style={styles.wordEn}>Meaning: {character.exampleWord.en}</div>
            </div>

            <div style={styles.sectionHeader}>Example Sentence</div>
            <p style={styles.sentenceJp}>{character.exampleSentence.jp}</p>
            <p style={styles.sentenceEn}>{character.exampleSentence.en}</p>
          </div>

          {/* Right Panel: Handwriting Canvas */}
          <div style={styles.practicePanel}>
            <div style={styles.sectionHeader}>Handwriting Practice</div>
            <p style={styles.practiceTip}>Use your mouse or touch screen to trace the character in the box below.</p>
            <HandwritingCanvas character={character.char} />
          </div>

        </div>

        {/* Footer Navigation */}
        <div style={styles.modalFooter}>
          <button onClick={onPrev} style={styles.navBtn}>
            ← Previous ({onPrev ? 'Left Arrow' : 'None'})
          </button>
          <button onClick={onNext} style={styles.navBtn}>
            Next ({onNext ? 'Right Arrow' : 'None'}) →
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(26, 26, 46, 0.55)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1050,
    padding: '20px'
  },
  modalCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: '1px solid rgba(255, 255, 255, 0.45)',
    borderRadius: '24px',
    boxShadow: 'var(--shadow-lg)',
    width: '100%',
    maxWidth: '750px',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '90vh',
    overflowY: 'auto',
    animation: 'fadeInScale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    borderBottom: '1px solid var(--border)'
  },
  leftControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  headerBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    padding: '0',
    lineHeight: '1',
    transition: 'transform 0.2s ease'
  },
  learnedBtn: {
    border: '1px solid var(--border)',
    borderRadius: '20px',
    padding: '6px 14px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  closeBtn: {
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    lineHeight: '1'
  },
  modalBody: {
    padding: '24px',
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '30px',
    overflowY: 'auto'
  },
  infoPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  charHero: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '20px',
    marginBottom: '8px'
  },
  bigChar: {
    fontSize: '4.5rem',
    fontFamily: '"Noto Sans JP", sans-serif',
    fontWeight: '700',
    color: 'var(--text-primary)',
    lineHeight: '1'
  },
  pronounceContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  romajiText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary)',
    letterSpacing: '0.5px'
  },
  audioBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(196, 30, 58, 0.08)',
    border: '1px solid rgba(196, 30, 58, 0.2)',
    borderRadius: '10px',
    padding: '4px 10px',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--primary)',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  metaInfo: {
    display: 'flex',
    gap: '16px',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)'
  },
  metaRow: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    padding: '6px 12px',
    borderRadius: '8px',
    display: 'flex',
    gap: '6px'
  },
  sectionHeader: {
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'var(--text-muted)',
    borderBottom: '1px solid var(--border)',
    paddingBottom: '6px',
    marginTop: '10px'
  },
  wordCard: {
    backgroundColor: '#fff',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '12px 16px',
    boxShadow: 'var(--shadow-sm)'
  },
  wordJp: {
    fontSize: '1.4rem',
    fontFamily: '"Noto Sans JP", sans-serif',
    fontWeight: '700',
    color: 'var(--text-primary)'
  },
  wordRomaji: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    marginTop: '2px'
  },
  wordEn: {
    fontSize: '0.95rem',
    color: 'var(--primary)',
    fontWeight: '600',
    marginTop: '2px'
  },
  sentenceJp: {
    fontFamily: '"Noto Sans JP", sans-serif',
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    fontWeight: '500',
    lineHeight: '1.4'
  },
  sentenceEn: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4'
  },
  practicePanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  },
  practiceTip: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    textAlign: 'center',
    lineHeight: '1.4'
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px 24px',
    borderTop: '1px solid var(--border)',
    backgroundColor: 'rgba(0,0,0,0.01)',
    borderBottomLeftRadius: '24px',
    borderBottomRightRadius: '24px'
  },
  navBtn: {
    padding: '10px 18px',
    backgroundColor: '#fff',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }
};

// CSS injection for responsive adjustments
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  @media (max-width: 768px) {
    div[style*="modalBody"] {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }
  }
`;
document.head.appendChild(styleTag);

export default CharacterModal;
