import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column footer-brand">
            <h2>SajiloHub</h2>
            <p className="footer-tagline">Learn Japanese the Easy Way</p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">📘</a>
              <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
              <a href="#" className="social-icon" aria-label="Instagram">📸</a>
              <a href="#" className="social-icon" aria-label="YouTube">▶</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Learning</h3>
            <ul className="footer-links">
              <li><Link to="/hiragana">Hiragana</Link></li>
              <li><Link to="/katakana">Katakana</Link></li>
              <li><Link to="/kanji">Kanji</Link></li>
              <li><Link to="/grammar">Grammar</Link></li>
              <li><Link to="/vocabulary">Vocabulary</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>JLPT Preparation</h3>
            <ul className="footer-links">
              <li><Link to="/jlpt/n5">N5 Practice</Link></li>
              <li><Link to="/jlpt/n4">N4 Practice</Link></li>
              <li><Link to="/jlpt/n3">N3 Practice</Link></li>
              <li><Link to="/jlpt/n2">N2 Practice</Link></li>
              <li><Link to="/jlpt/n1">N1 Practice</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="https://translate.google.com" target="_blank" rel="noopener noreferrer">Google Translator</a></li>
              <li><Link to="/study-guide">Study Guide</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 2026 SajiloHub. All rights reserved.
          </div>
          <div className="footer-made-with">
            Made with ❤ in Nepal 🇳🇵
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
