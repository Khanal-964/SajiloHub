import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaSearch, FaCheckCircle, FaBookOpen } from 'react-icons/fa';
import { kanjiData } from '../../data/kanjiData';
import './KanjiLessonsList.css';

const KanjiLessonsList = ({ level: propLevel }) => {
  const params = useParams();
  const level = (propLevel || params.level || 'n5').toLowerCase();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [lessons, setLessons] = useState([]);
  const [concepts, setConcepts] = useState([]);
  const [completedLessons, setCompletedLessons] = useState({});

  useEffect(() => {
    // Load level data
    const levelData = kanjiData[level] || [];
    setLessons(levelData);
    setConcepts(kanjiData.concepts || []);

    // Load completed status from localStorage
    const savedProgress = {};
    levelData.forEach(lesson => {
      const isCompleted = localStorage.getItem(`sajilohub_completed_kanji_${level}_lesson_${lesson.lessonNum}`) === 'true';
      savedProgress[lesson.lessonNum] = isCompleted;
    });
    setCompletedLessons(savedProgress);
  }, [level]);

  // Filter lessons based on search query
  const filteredLessons = lessons.filter(lesson => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    
    // Check if lesson title matches
    if (lesson.title.toLowerCase().includes(query)) return true;
    
    // Check if any kanji character, meaning, reading, or compounds match
    return lesson.kanjiList.some(item => {
      if (item.character?.includes(query)) return true;
      if (item.meaning?.toLowerCase().includes(query)) return true;
      if (item.onyomi?.toLowerCase().includes(query)) return true;
      if (item.kunyomi?.toLowerCase().includes(query)) return true;
      if (item.compounds && item.compounds.some(c => 
        c.word?.includes(query) || 
        c.meaning?.toLowerCase().includes(query) || 
        c.reading?.toLowerCase().includes(query)
      )) return true;
      return false;
    });
  });

  return (
    <div className="kanji-list-container fade-in">
      {/* Breadcrumb / Header */}
      <div className="kanji-header">
        <h1>JLPT {level.toUpperCase()} Kanji</h1>
        <p>Master Kanji through pictographics, radicals, and structured stroke order.</p>
      </div>



      {/* Search Bar */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search by Kanji, English meaning, or reading..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Lessons Grid */}
      <div className="lessons-grid">
        {filteredLessons.length > 0 ? (
          filteredLessons.map((lesson) => (
            <Link 
              to={`/theory/${level}/kanji/lesson/${lesson.lessonNum}`} 
              className="lesson-card"
              key={lesson.lessonNum}
            >
              <div className={`lesson-status ${completedLessons[lesson.lessonNum] ? 'completed' : ''}`} 
                   title={completedLessons[lesson.lessonNum] ? 'Completed' : 'Not started'}>
              </div>
              
              <div className="lesson-info">
                <h2>{lesson.title}</h2>
                <div className="lesson-stats">
                  <span className="stat-badge">{lesson.kanjiList.length} Kanji</span>
                  {completedLessons[lesson.lessonNum] && (
                    <span className="stat-badge" style={{ color: 'var(--success)', borderColor: 'var(--success)' }}>
                      <FaCheckCircle style={{ marginRight: '5px' }} />
                      Completed
                    </span>
                  )}
                </div>
                
                <div className="lesson-preview">
                  <strong>Includes:</strong>{' '}
                  {lesson.kanjiList.slice(0, 5).map(k => k.character).join('、')}
                  {lesson.kanjiList.length > 5 ? '...' : ''}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-results">
            <p>No Kanji lessons found matching "{searchQuery}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KanjiLessonsList;
