import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={`about-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-wrapper">
            <img 
              src="/images/about-illustration.jpg" 
              alt="About SajiloHub - Japanese Learning Platform" 
              className="about-image"
            />
          </div>
        </div>
        <div className="about-right">
          <div className="about-label-wrapper">
            <span className="about-label-line"></span>
            <span className="about-label">About SajiloHub</span>
          </div>
          <h2 className="about-heading">Your All-in-One Japanese Learning Companion</h2>
          <p className="about-description">
            SajiloHub is a comprehensive platform designed to take you from complete beginner to JLPT-ready. With structured lessons covering Hiragana, Katakana, Kanji, grammar, and vocabulary — plus interactive quizzes and built-in translation tools — everything you need is in one place.
          </p>
          <div className="about-features">
            <span className="feature-pill">📚 Structured Lessons</span>
            <span className="feature-pill">📝 Grammar Guides</span>
            <span className="feature-pill">🎯 JLPT Prep</span>
            <span className="feature-pill">🌐 Translation Tools</span>
          </div>
          <a href="#learn-more" className="about-link">
            Learn More <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
