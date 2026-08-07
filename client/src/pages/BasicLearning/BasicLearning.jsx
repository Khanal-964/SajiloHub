import React, { useState, useEffect } from 'react';
import { hiraganaData, katakanaData, kanaGroups } from '../../data/kanaData';
import CharacterModal from '../../components/BasicLearning/CharacterModal';
import MiniQuiz from '../../components/BasicLearning/MiniQuiz';
import './BasicLearning.css';

const BasicLearning = () => {
  const [activeTab, setActiveTab] = useState('hiragana');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChar, setSelectedChar] = useState(null);
  const [activeQuizGroup, setActiveQuizGroup] = useState(null);

  // Persistence for user progress
  const [learned, setLearned] = useState(() => {
    const saved = localStorage.getItem('sajilohub_learned');
    return saved ? JSON.parse(saved) : {};
  });

  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('sajilohub_bookmarks');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('sajilohub_learned', JSON.stringify(learned));
  }, [learned]);

  useEffect(() => {
    localStorage.setItem('sajilohub_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const currentDataset = activeTab === 'hiragana' ? hiraganaData : katakanaData;

  // Toggle Bookmark
  const toggleBookmark = (id) => {
    setBookmarks((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Toggle Learned
  const toggleLearned = (id) => {
    setLearned((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter items based on search query
  const filteredDataset = currentDataset.filter(
    (item) =>
      item.char.includes(searchQuery) ||
      item.romaji.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group characters by row
  const groupedCharacters = kanaGroups.map((group) => {
    const chars = filteredDataset.filter((item) => item.group === group.id);
    return {
      ...group,
      characters: chars
    };
  }).filter((group) => group.characters.length > 0); // Only show groups with matches

  // Calculate Overall Progress
  const totalHiragana = hiraganaData.length;
  const totalKatakana = katakanaData.length;
  
  const learnedHiragana = hiraganaData.filter((item) => learned[item.id]).length;
  const learnedKatakana = katakanaData.filter((item) => learned[item.id]).length;

  const totalChars = totalHiragana + totalKatakana;
  const totalLearned = learnedHiragana + learnedKatakana;
  const progressPercent = Math.round((totalLearned / totalChars) * 100);

  // Modal navigation helpers
  const handleNextChar = () => {
    if (!selectedChar) return;
    const currentIndex = currentDataset.findIndex((c) => c.id === selectedChar.id);
    if (currentIndex < currentDataset.length - 1) {
      setSelectedChar(currentDataset[currentIndex + 1]);
    }
  };

  const handlePrevChar = () => {
    if (!selectedChar) return;
    const currentIndex = currentDataset.findIndex((c) => c.id === selectedChar.id);
    if (currentIndex > 0) {
      setSelectedChar(currentDataset[currentIndex - 1]);
    }
  };

  const handleQuizComplete = (score, total) => {
    alert(`Quiz completed! You scored ${score}/${total}`);
    // Auto-mark all characters in this quiz group as learned if they scored perfect
    if (score === total && activeQuizGroup) {
      const groupChars = currentDataset.filter((c) => c.group === activeQuizGroup.id);
      const newLearned = { ...learned };
      groupChars.forEach((c) => {
        newLearned[c.id] = true;
      });
      setLearned(newLearned);
    }
    setActiveQuizGroup(null);
  };

  return (
    <div className="basic-learning-page">
      {/* Background decoration */}
      <div className="sakura-bg-overlay" />

      <div className="basic-learning-container">
        
        {/* Header Summary & Progress Card */}
        <header className="learning-header card-glass">
          <div className="header-info">
            <h1 className="learning-title">Kana Learning Hub</h1>
            <p className="learning-subtitle">
              Master Hiragana and Katakana writing systems with stroke guides, handwriting practice, and mini quizzes.
            </p>
          </div>
          
          <div className="overall-progress-card">
            <div className="progress-labels">
              <span className="progress-title">Overall Mastery</span>
              <span className="progress-count">{totalLearned} / {totalChars} Learned</span>
            </div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="progress-sub-stats">
              <span>Hiragana: {learnedHiragana}/{totalHiragana}</span>
              <span>Katakana: {learnedKatakana}/{totalKatakana}</span>
            </div>
          </div>
        </header>

        {/* Tab Controls & Search */}
        <section className="learning-controls">
          <div className="tab-buttons">
            <button
              onClick={() => setActiveTab('hiragana')}
              className={`tab-btn hiragana-tab ${activeTab === 'hiragana' ? 'active' : ''}`}
            >
              あ Hiragana
            </button>
            <button
              onClick={() => setActiveTab('katakana')}
              className={`tab-btn katakana-tab ${activeTab === 'katakana' ? 'active' : ''}`}
            >
              ア Katakana
            </button>
          </div>

          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by Romaji or Japanese character..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="clear-search">
                &times;
              </button>
            )}
          </div>
        </section>

        {/* Grouped Rows Section */}
        <main className="learning-grid-section">
          {groupedCharacters.length > 0 ? (
            groupedCharacters.map((group) => {
              const groupLearnedCount = group.characters.filter((c) => learned[c.id]).length;
              const isGroupCompleted = groupLearnedCount === group.characters.length;

              return (
                <div key={group.id} className="character-row-group card-glass">
                  
                  {/* Row Header */}
                  <div className="row-group-header">
                    <div className="group-meta">
                      <h2 className="group-title">{group.name}</h2>
                      <span className="group-progress">
                        {groupLearnedCount}/{group.characters.length} learned
                      </span>
                    </div>
                    
                    <button
                      onClick={() => setActiveQuizGroup(group)}
                      className={`row-quiz-btn ${isGroupCompleted ? 'completed' : ''}`}
                    >
                      {isGroupCompleted ? '⭐ Review Quiz' : '📝 Start Quiz'}
                    </button>
                  </div>

                  {/* Character Grid */}
                  <div className="character-grid">
                    {group.characters.map((item) => {
                      const isBookmarked = !!bookmarks[item.id];
                      const isLearnedVal = !!learned[item.id];

                      return (
                        <div
                          key={item.id}
                          onClick={() => setSelectedChar(item)}
                          className={`character-card ${isLearnedVal ? 'learned' : ''}`}
                        >
                          <div className="card-top">
                            <span 
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleBookmark(item.id);
                              }}
                              className={`card-bookmark-icon ${isBookmarked ? 'active' : ''}`}
                            >
                              ★
                            </span>
                            {isLearnedVal && <span className="card-check-icon">✓</span>}
                          </div>
                          
                          <div className="card-char">{item.char}</div>
                          <div className="card-romaji">{item.romaji}</div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              );
            })
          ) : (
            <div className="no-results card-glass">
              <h3>No characters found matching your search.</h3>
              <p>Try searching for a different romaji sound or kana character.</p>
            </div>
          )}
        </main>

      </div>

      {/* Character detail Modal */}
      {selectedChar && (
        <CharacterModal
          character={selectedChar}
          onClose={() => setSelectedChar(null)}
          onNext={
            currentDataset.findIndex((c) => c.id === selectedChar.id) < currentDataset.length - 1
              ? handleNextChar
              : null
          }
          onPrev={
            currentDataset.findIndex((c) => c.id === selectedChar.id) > 0
              ? handlePrevChar
              : null
          }
          isBookmarked={!!bookmarks[selectedChar.id]}
          onToggleBookmark={() => toggleBookmark(selectedChar.id)}
          isLearned={!!learned[selectedChar.id]}
          onToggleLearned={() => toggleLearned(selectedChar.id)}
        />
      )}

      {/* Mini Quiz Modal */}
      {activeQuizGroup && (
        <MiniQuiz
          groupName={activeQuizGroup.name}
          type={activeTab}
          characters={currentDataset.filter((c) => c.group === activeQuizGroup.id)}
          onClose={() => setActiveQuizGroup(null)}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
};

export default BasicLearning;
