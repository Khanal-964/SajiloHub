import React from 'react';
import { Link } from 'react-router-dom';
import './TheoryCard.css';

const TheoryCard = ({ to, onClick, title, description, icon: Icon, badge, highlightColor, japaneseTitle }) => {
  const CardContent = () => (
    <>
      {badge && <span className="theory-card-badge">{badge}</span>}
      <div className="theory-card-glow" style={{ background: highlightColor || 'var(--primary-light)' }} />
      <div className="theory-card-icon-wrapper">
        {typeof Icon === 'string' ? (
          <span className="theory-card-emoji-icon">{Icon}</span>
        ) : (
          <Icon className="theory-card-react-icon" />
        )}
      </div>
      <div className="theory-card-body">
        {japaneseTitle && <span className="theory-card-japanese-title">{japaneseTitle}</span>}
        <h3 className="theory-card-title">{title}</h3>
        <p className="theory-card-description">{description}</p>
      </div>
      <div className="theory-card-arrow">
        <span className="arrow-line"></span>
        <span className="arrow-head">→</span>
      </div>
    </>
  );

  const cardClasses = `theory-card${badge ? ' has-badge' : ''}`;

  if (to) {
    return (
      <Link to={to} className={cardClasses}>
        <CardContent />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cardClasses} type="button">
      <CardContent />
    </button>
  );
};

export default TheoryCard;
