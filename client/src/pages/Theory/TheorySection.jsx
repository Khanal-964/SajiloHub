import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SakuraPetals from '../../components/SakuraPetals';
import { FaBook, FaLanguage, FaListUl, FaArrowLeft, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import './TheorySection.css';

const SECTION_DETAILS = {
  grammar: {
    title: 'Grammar Theory',
    japaneseTitle: '文法 (Bunpou)',
    icon: FaBook,
    curationProgress: 85,
    topics: [
      'Core Particle Usage (は, が, を, に, で)',
      'Basic Verb Conjugations (Polite, Plain, Past, Negative)',
      'Adjective Structures (I-adjectives vs Na-adjectives)',
      'Desire & Intent Expressions (~たい, ~つもり)',
      'Asking and Giving Permission (~てもいい, ~てはいけない)',
      'Giving/Receiving Verbs (あげる, もらう, くれる)'
    ]
  },
  vocabulary: {
    title: 'Vocabulary Bank',
    japaneseTitle: '単語 (Tango)',
    icon: FaListUl,
    curationProgress: 90,
    topics: [
      'Greetings & Everyday Phrases',
      'Numbers, Time, and Counters (つ, 人, 本, 枚)',
      'Family & Relatives (Honorifics vs Humble)',
      'Directions, Places, and Travel Terminology',
      'Common Verbs and Action Adjectives',
      'School, University, and Work Expressions'
    ]
  },
  kanji: {
    title: 'Kanji Master',
    japaneseTitle: '漢字 (Kanji)',
    icon: FaLanguage,
    curationProgress: 75,
    topics: [
      'Pictographic Foundations (日, 月, 木, 山)',
      'Understanding Radicals and Semantic Keys',
      'Stroke Order Rules & Writing Guides',
      'Onyomi (Chinese) vs Kunyomi (Japanese) readings',
      'Kanji Compounds (熟語 - Jukugo)',
      'Context-based Kanji Selection in Sentences'
    ]
  }
};

const LEVEL_NAMES = {
  n5: 'JLPT N5 (Beginner)',
  n4: 'JLPT N4 (Elementary)',
  n3: 'JLPT N3 (Intermediate)',
  n2: 'JLPT N2 (Pre-Advanced)',
  n1: 'JLPT N1 (Mastery)',
};

const TheorySection = () => {
  const { level, section } = useParams();
  const navigate = useNavigate();

  const currentLevel = level?.toLowerCase();
  const currentSection = section?.toLowerCase();

  const levelName = LEVEL_NAMES[currentLevel];
  const sectionInfo = SECTION_DETAILS[currentSection];

  // Validate route params and redirect if invalid
  useEffect(() => {
    if (!levelName || !sectionInfo) {
      if (currentLevel && LEVEL_NAMES[currentLevel]) {
        navigate(`/theory/${currentLevel}`, { replace: true });
      } else {
        navigate('/theory', { replace: true });
      }
    }
  }, [levelName, sectionInfo, currentLevel, navigate]);

  if (!levelName || !sectionInfo) return null;

  const Icon = sectionInfo.icon;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will notify you as soon as this study guide is published.');
    e.target.reset();
  };

  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main className="theory-section-page">
        {/* Breadcrumbs */}
        <nav className="section-breadcrumbs">
          <Link to="/theory">Theory Overview</Link>
          <span className="separator">/</span>
          <Link to={`/theory/${currentLevel}`}>{currentLevel.toUpperCase()}</Link>
          <span className="separator">/</span>
          <span className="current">{sectionInfo.title}</span>
        </nav>

        <div className="section-content-container">
          {/* Main Layout Card */}
          <div className="coming-soon-card">
            {/* Header portion */}
            <div className="coming-soon-header">
              <div className="icon-badge-row">
                <div className="section-icon-wrapper">
                  <Icon />
                </div>
                <span className="level-badge">{currentLevel.toUpperCase()}</span>
              </div>
              <span className="jp-section-title">{sectionInfo.japaneseTitle}</span>
              <h1 className="section-main-title">{levelName} - {sectionInfo.title}</h1>
              <p className="curation-text">
                Our curriculum team is meticulously crafting this section to match the latest JLPT guidelines, adding audio readings, practice questions, and expert explanations.
              </p>
            </div>

            {/* Progress indicator */}
            <div className="curation-progress-container">
              <div className="progress-bar-info">
                <span className="progress-label">Curation & Translation Progress</span>
                <span className="progress-percentage">{sectionInfo.curationProgress}%</span>
              </div>
              <div className="progress-bar-track">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${sectionInfo.curationProgress}%` }}
                />
              </div>
              <div className="progress-meta">
                <span className="meta-item">
                  <FaCalendarAlt className="meta-icon" /> Estimated Launch: Q3 2026
                </span>
              </div>
            </div>

            <hr className="divider" />

            {/* Expected curriculum */}
            <div className="curriculum-preview">
              <h3>What will be covered:</h3>
              <ul className="curriculum-list">
                {sectionInfo.topics.map((topic, i) => (
                  <li key={i} className="curriculum-item">
                    <span className="bullet">❀</span> {topic}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="divider" />

            {/* Notify Me / Feedback Form */}
            <div className="notify-container">
              <h3>Get Notified When It Launches</h3>
              <p>Be the first to access these premium study sheets and downloadable checklists.</p>
              <form onSubmit={handleSubmit} className="notify-form">
                <div className="form-group">
                  <FaEnvelope className="input-icon" />
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    required 
                    className="email-input"
                  />
                </div>
                <button type="submit" className="notify-submit-btn">
                  Keep Me Updated
                </button>
              </form>
            </div>
          </div>

          {/* Navigation helpers */}
          <div className="section-nav-footer">
            <Link to={`/theory/${currentLevel}`} className="section-back-btn">
              <FaArrowLeft className="back-arrow-icon" /> Back to {currentLevel.toUpperCase()} Overview
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TheorySection;
