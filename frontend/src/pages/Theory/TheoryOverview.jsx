import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SakuraPetals from '../../components/SakuraPetals';
import TheoryCard from '../../components/TheoryCard';
import { FaGraduationCap, FaBookOpen, FaBook, FaBrain, FaAward } from 'react-icons/fa';
import './TheoryOverview.css';

const LEVELS_DATA = [
  {
    to: '/theory/n5',
    title: 'Theory N5',
    japaneseTitle: '初級 (Beginner)',
    description: 'Start your Japanese learning journey. Master basic grammar, vocabulary, particles, and initial Kanji characters.',
    icon: FaGraduationCap,
    badge: 'JLPT N5',
    highlightColor: 'rgba(74, 144, 226, 0.45)', // Soft blue
  },
  {
    to: '/theory/n4',
    title: 'Theory N4',
    japaneseTitle: '初中級 (Elementary)',
    description: 'Build on the basics. Understand daily conversation structures, intermediate sentence patterns, and expanded vocabulary.',
    icon: FaBookOpen,
    badge: 'JLPT N4',
    highlightColor: 'rgba(46, 204, 113, 0.45)', // Soft green
  },
  {
    to: '/theory/n3',
    title: 'Theory N3',
    japaneseTitle: '中級 (Intermediate)',
    description: 'Bridge the gap between basic and advanced Japanese. Learn to comprehend everyday articles and conversational nuances.',
    icon: FaBook,
    badge: 'JLPT N3',
    highlightColor: 'rgba(241, 196, 15, 0.45)', // Soft yellow/orange
  },
  {
    to: '/theory/n2',
    title: 'Theory N2',
    japaneseTitle: '上級 (Pre-Advanced)',
    description: 'Achieve functional fluency for work and social life. Comprehend natural speed audio and complex written texts.',
    icon: FaBrain,
    badge: 'JLPT N2',
    highlightColor: 'rgba(230, 126, 34, 0.45)', // Soft orange
  },
  {
    to: '/theory/n1',
    title: 'Theory N1',
    japaneseTitle: '最上級 (Mastery)',
    description: 'The pinnacle of Japanese learning. Access advanced academic literature, professional contexts, and high-level abstract concepts.',
    icon: FaAward,
    badge: 'JLPT N1',
    highlightColor: 'rgba(231, 76, 60, 0.45)', // Soft red
  },
];

const TheoryOverview = () => {
  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main className="theory-overview-page">
        {/* Header Section */}
        <section className="theory-overview-header">
          <div className="header-container">
            <span className="overview-jp-subtitle">日本語の理論</span>
            <h1 className="overview-title">
              SajiloHub <span className="text-gradient">Theory</span>
            </h1>
            <p className="overview-description">
              Dive deep into Japanese linguistics. Select your target JLPT level to study curated grammar rules, expand your vocabulary banks, and master core Kanji.
            </p>
          </div>
        </section>

        {/* Levels Grid Section */}
        <section className="theory-levels-section">
          <div className="levels-container">
            <div className="levels-grid">
              {LEVELS_DATA.map((level) => (
                <TheoryCard
                  key={level.title}
                  to={level.to}
                  title={level.title}
                  japaneseTitle={level.japaneseTitle}
                  description={level.description}
                  icon={level.icon}
                  badge={level.badge}
                  highlightColor={level.highlightColor}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TheoryOverview;
