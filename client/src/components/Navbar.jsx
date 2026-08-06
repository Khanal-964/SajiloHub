import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Basic Learning', path: '/basic-learning' },
    { name: 'Theory', path: '/theory' },
    { name: 'JLPT Test', path: '/jlpt' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <svg className="logo-icon" width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Sakura Blossom Base */}
            <path d="M50 30 C 65 10, 85 20, 75 40 C 95 45, 90 70, 70 65 C 75 85, 55 95, 50 75 C 45 95, 25 85, 30 65 C 10 70, 5 45, 25 40 C 15 20, 35 10, 50 30 Z" fill="#FFB7C5" opacity="0.4" />
            {/* Open Book */}
            <path d="M25 70 L 50 85 L 75 70 L 75 40 L 50 55 L 25 40 Z M 50 55 L 50 85" stroke="#1a1a2e" strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round" />
            {/* Torii Gate */}
            <path d="M20 25 L80 25 M30 35 L70 35 M35 25 L35 60 M65 25 L65 60" stroke="#C41E3A" strokeWidth="6" fill="none" strokeLinecap="round" />
          </svg>
          <span className="logo-text">SajiloHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://translate.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Google Translator
          </a>
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          
          {/* Hamburger Menu Icon */}
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className={`line line1 ${mobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`line line2 ${mobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`line line3 ${mobileMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://translate.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-link"
            onClick={closeMenu}
          >
            Google Translator
          </a>
          <Link to="/login" className="mobile-login-btn" onClick={closeMenu}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
