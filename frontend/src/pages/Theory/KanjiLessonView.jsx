import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaArrowRight, FaList } from 'react-icons/fa';
import { kanjiData } from '../../data/kanjiData';
import './KanjiLessonView.css';

const KanjiLessonView = () => {
  const { level: paramLevel, lessonNum } = useParams();
  const level = (paramLevel || 'n5').toLowerCase();
  const navigate = useNavigate();
  
  const [lesson, setLesson] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const levelData = kanjiData[level] || [];
  const currentLessonNum = parseInt(lessonNum, 10);
  
  // Find adjacent lessons
  const prevLesson = currentLessonNum > 1 ? currentLessonNum - 1 : null;
  const nextLesson = currentLessonNum < levelData.length ? currentLessonNum + 1 : null;

  useEffect(() => {
    // Find current lesson
    const foundLesson = levelData.find(l => l.lessonNum === currentLessonNum);
    
    if (foundLesson) {
      setLesson(foundLesson);
      
      // Load progress
      const progress = localStorage.getItem(`sajilohub_completed_kanji_${level}_lesson_${currentLessonNum}`);
      setIsCompleted(progress === 'true');
    } else {
      // If lesson not found, go back to list
      navigate(`/theory/${level}/kanji`);
    }
  }, [level, currentLessonNum, levelData, navigate]);

  const toggleComplete = () => {
    const newState = !isCompleted;
    setIsCompleted(newState);
    localStorage.setItem(`sajilohub_completed_kanji_${level}_lesson_${currentLessonNum}`, newState.toString());
  };

  if (!lesson) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div className="kanji-lesson-view fade-in">
      <div className="lesson-header">
        <Link to={`/theory/${level}/kanji`} className="back-link">
          <FaList style={{ marginRight: '8px' }} /> Back to {level.toUpperCase()} Kanji Lessons
        </Link>
        <h1>{lesson.title}</h1>
        
        <div className="lesson-progress">
          <span className="progress-text">{lesson.kanjiList.length} Kanji in this lesson</span>
          <button 
            className={`complete-btn ${isCompleted ? 'completed' : ''}`}
            onClick={toggleComplete}
          >
            <FaCheckCircle />
            {isCompleted ? 'Completed' : 'Mark as Complete'}
          </button>
        </div>
      </div>

      <div className="kanji-grid">
        {lesson.kanjiList.map((kanji, idx) => (
          <div key={idx} className="kanji-card">
            
            {/* Left Side: Character Display */}
            <div className="kanji-display">
              <span className="main-character">{kanji.character}</span>
              <span className="kanji-meaning-badge">{kanji.meaning}</span>
            </div>

            {/* Right Side: Details */}
            <div className="kanji-details">
              
              <div className="reading-section">
                <div className="reading-group">
                  <h3>Onyomi (音)</h3>
                  <p>{kanji.onyomi || '-'}</p>
                </div>
                <div className="reading-group">
                  <h3>Kunyomi (訓)</h3>
                  <p>{kanji.kunyomi || '-'}</p>
                </div>
              </div>

              <div className="metadata-section">
                <div className="meta-item">
                  <span className="meta-label">Strokes:</span>
                  <span className="meta-value">{kanji.strokeCount}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Radical:</span>
                  <span className="meta-value">{kanji.radical}</span>
                </div>
              </div>

              <div className="stroke-guide-section">
                <h3>Stroke Order Guide</h3>
                <p>{kanji.strokeGuide}</p>
              </div>

              {kanji.compounds && kanji.compounds.length > 0 && (
                <div className="compounds-section">
                  <h3>Common Compounds (熟語)</h3>
                  <div className="compounds-grid">
                    {kanji.compounds.map((compound, cIdx) => (
                      <div key={cIdx} className="compound-item">
                        <div className="compound-word">{compound.word}</div>
                        <div className="compound-reading">{compound.reading}</div>
                        <div className="compound-meaning">{compound.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="lesson-navigation">
        <Link 
          to={prevLesson ? `/theory/${level}/kanji/lesson/${prevLesson}` : '#'} 
          className={`nav-btn ${!prevLesson ? 'disabled' : ''}`}
        >
          <FaArrowLeft /> Previous Lesson
        </Link>
        <Link 
          to={nextLesson ? `/theory/${level}/kanji/lesson/${nextLesson}` : '#'} 
          className={`nav-btn ${!nextLesson ? 'disabled' : ''}`}
        >
          Next Lesson <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default KanjiLessonView;
