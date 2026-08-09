import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SakuraPetals from '../../components/SakuraPetals';
import TheoryCard from '../../components/TheoryCard';
import { FaBook, FaLanguage, FaListUl, FaPenNib } from 'react-icons/fa';
import './TheoryLevel.css';

const LEVEL_METADATA = {
  n5: {
    title: 'Theory N5',
    japaneseTitle: '初級 N5 (Beginner Level)',
    color: 'rgba(74, 144, 226, 0.45)',
    description: 'Learn the absolute foundations of Japanese. Particles, basic verb conjugations, and essential daily words.',
  },
  n4: {
    title: 'Theory N4',
    japaneseTitle: '初中級 N4 (Elementary Level)',
    color: 'rgba(46, 204, 113, 0.45)',
    description: 'Begin understanding natural speech patterns, compound structures, and expand your communication threshold.',
  },
  n3: {
    title: 'Theory N3',
    japaneseTitle: '中級 N3 (Intermediate Level)',
    color: 'rgba(241, 196, 15, 0.45)',
    description: 'The critical transition level. Move towards understanding authentic Japanese materials and complex sentences.',
  },
  n2: {
    title: 'Theory N2',
    japaneseTitle: '上級 N2 (Pre-Advanced Level)',
    color: 'rgba(230, 126, 34, 0.45)',
    description: 'Fluency in sight. Master idioms, formal speech structures, and sophisticated text and video materials.',
  },
  n1: {
    title: 'Theory N1',
    japaneseTitle: '最上級 N1 (Mastery Level)',
    color: 'rgba(231, 76, 60, 0.45)',
    description: 'The ultimate stage. Deep dive into academic writing, literary texts, and abstract topics for complete mastery.',
  },
};

const SECTIONS = [
  {
    key: 'grammar',
    title: 'Grammar',
    japaneseTitle: '文法 (Bunpou)',
    icon: FaBook,
    description: 'Detailed guides on sentence structures, particles, auxiliary verbs, and speech patterns. Content Coming Soon.',
  },
  {
    key: 'vocabulary',
    title: 'Vocabulary',
    japaneseTitle: '単語 (Tango)',
    icon: FaListUl,
    description: 'Master strictly curated JLPT vocabulary. Comprehensive word banks with English meanings to expand your vocabulary.',
  },
  {
    key: 'kanji',
    title: 'Kanji',
    japaneseTitle: '漢字 (Kanji)',
    icon: FaPenNib,
    description: 'Learn Kanji radicals, stroke orders, Onyomi/Kunyomi readings, and vocabulary compounds with detailed flashcards.',
  },
];

const TheoryLevel = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  
  const currentLevel = level?.toLowerCase();
  const metadata = LEVEL_METADATA[currentLevel];

  // Safety check: redirect to theory page if level does not exist
  useEffect(() => {
    if (!metadata) {
      navigate('/theory', { replace: true });
    }
  }, [metadata, navigate]);

  if (!metadata) return null;

  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main className="theory-level-page">
        {/* Breadcrumbs */}
        <nav className="theory-breadcrumbs">
          <Link to="/theory">Theory Overview</Link>
          <span className="separator">/</span>
          <span className="current">{metadata.title}</span>
        </nav>

        {/* Level Header */}
        <section className="level-header">
          <span className="level-jp-title">{metadata.japaneseTitle}</span>
          <h1 className="level-main-title">{metadata.title} Study Material</h1>
          <p className="level-desc">{metadata.description}</p>
        </section>

        {/* Sections Grid */}
        <section className="level-sections">
          <div className="sections-grid">
            {SECTIONS.map((sec) => (
              <TheoryCard
                key={sec.key}
                to={`/theory/${currentLevel}/${sec.key}`}
                title={sec.title}
                japaneseTitle={sec.japaneseTitle}
                description={sec.description}
                icon={sec.icon}
                badge={`${currentLevel.toUpperCase()} ${sec.title}`}
                highlightColor={metadata.color}
              />
            ))}
          </div>
        </section>

        {/* Back Link */}
        <div className="back-link-wrapper">
          <Link to="/theory" className="back-to-overview-btn">
            ← Back to All Levels
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TheoryLevel;
