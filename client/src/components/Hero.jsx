import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background-decoration"></div>
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge fade-in-up-1">
            <span className="badge-icon">🌸</span>
            <span>#1 Japanese Learning Platform</span>
          </div>
          
          <h1 className="hero-headline fade-in-up-2">
            Master <span className="text-gradient">Japanese</span> with Confidence
          </h1>
          
          <p className="hero-description fade-in-up-3">
            SajiloHub empowers students to learn Japanese from Hiragana to JLPT N5–N1 with interactive lessons, grammar guides, quizzes, and real-world practice.
          </p>
          
          <div className="hero-buttons fade-in-up-4">
            <Link to="/basic-learning" className="btn btn-primary">
              Start Learning <span className="arrow">→</span>
            </Link>
            <Link to="/jlpt" className="btn btn-outline">
              Take JLPT Test
            </Link>
          </div>
          
          <div className="hero-trust fade-in-up-5">
            <span>✦ Free to start</span>
            <span className="dot">·</span>
            <span>✦ 1000+ lessons</span>
            <span className="dot">·</span>
            <span>✦ JLPT N5–N1</span>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img 
              src="/images/hero-student.jpg" 
              alt="Student learning Japanese" 
              className="hero-image"
            />
            <div className="floating-card glass-card">
              <span className="card-icon">🎌</span>
              <div className="card-content">
                <span className="card-label">Active Learners</span>
                <span className="card-number">12,400+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
