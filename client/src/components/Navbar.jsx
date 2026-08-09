import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      closeMenu();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (e, name) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Basic Learning', path: '/basic-learning' },
    { 
      name: 'Theory', 
      path: '/theory',
      dropdown: [
        { name: 'Theory N5', path: '/theory/n5', icon: '📝' },
        { name: 'Theory N4', path: '/theory/n4', icon: '📘' },
        { name: 'Theory N3', path: '/theory/n3', icon: '📗' },
        { name: 'Theory N2', path: '/theory/n2', icon: '📙' },
        { name: 'Theory N1', path: '/theory/n1', icon: '📕' },
      ]
    },
    { 
      name: 'JLPT Test', 
      path: '/jlpt',
      dropdown: [
        { name: 'JLPT N5 Tests', path: '/jlpt/n5', icon: '🎯' },
        { name: 'JLPT N4 Tests', path: '/jlpt/n4', icon: '🎯' },
        { name: 'JLPT N3 Tests', path: '/jlpt/n3', icon: '🎯' },
        { name: 'JLPT N2 Tests', path: '/jlpt/n2', icon: '🎯' },
        { name: 'JLPT N1 Tests', path: '/jlpt/n1', icon: '🎯' },
        { name: 'JLPT Boost', path: '/jlpt/boost', icon: '🚀' },
        { name: 'JLPT Review', path: '/jlpt/review', icon: '⭐' },
      ]
    },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
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
            <div 
              key={link.name} 
              className={`nav-item ${link.dropdown ? 'has-dropdown' : ''}`}
            >
              <Link
                to={link.path}
                className={`nav-link ${location.pathname.startsWith(link.path) && link.path !== '/' || (location.pathname === '/' && link.path === '/') ? 'active' : ''}`}
                onClick={(e) => link.dropdown && window.innerWidth <= 968 ? toggleDropdown(e, link.name) : null}
              >
                {link.name}
                {link.dropdown && <span className="dropdown-arrow">▼</span>}
              </Link>
              
              {link.dropdown && (
                <div className="dropdown-menu">
                  {link.dropdown.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      <span className="dropdown-icon">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/translator"
            className={`nav-link ${location.pathname === '/translator' ? 'active' : ''}`}
          >
            Translator
          </Link>
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
          {user ? (
            <button onClick={handleLogout} className="login-btn" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}
          
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
            <div key={link.name} className="mobile-nav-item">
              <div className="mobile-nav-header">
                <Link
                  to={link.path}
                  className={`mobile-link ${location.pathname.startsWith(link.path) && link.path !== '/' || (location.pathname === '/' && link.path === '/') ? 'active' : ''}`}
                  onClick={(e) => {
                    if (link.dropdown) toggleDropdown(e, link.name);
                    else closeMenu();
                  }}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <span 
                    className={`mobile-dropdown-arrow ${activeDropdown === link.name ? 'open' : ''}`}
                    onClick={(e) => toggleDropdown(e, link.name)}
                  >
                    ▼
                  </span>
                )}
              </div>
              
              {link.dropdown && (
                <div className={`mobile-dropdown ${activeDropdown === link.name ? 'open' : ''}`}>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`mobile-dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      <span className="dropdown-icon">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/translator"
            className={`mobile-link ${location.pathname === '/translator' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Translator
          </Link>
          {user ? (
            <button onClick={handleLogout} className="mobile-login-btn" style={{ border: 'none', width: '100%', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'center' }}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="mobile-login-btn" onClick={closeMenu}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

