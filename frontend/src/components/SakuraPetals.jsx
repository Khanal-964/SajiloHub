import React, { useMemo } from 'react';
import './SakuraPetals.css';

const SakuraPetals = () => {
  const petals = useMemo(() => {
    // Generate 25 sakura petals
    return Array.from({ length: 25 }).map((_, index) => {
      const leftPosition = Math.random() * 100;
      const size = 8 + Math.random() * 10; // Random size between 8px and 18px
      const animationDuration = 10 + Math.random() * 15; // Random duration between 10s and 25s
      const animationDelay = Math.random() * 15; // Random delay between 0s and 15s
      const opacity = 0.3 + Math.random() * 0.5; // Random opacity between 0.3 and 0.8

      return {
        id: index,
        style: {
          left: `${leftPosition}%`,
          width: `${size}px`,
          height: `${size * 1.5}px`, // Slight ratio to make it look more like a leaf/petal
          animationDuration: `${animationDuration}s`,
          animationDelay: `-${animationDelay}s`, // Negative delay so some start mid-animation
          opacity: opacity,
        },
      };
    });
  }, []);

  return (
    <div className="sakura-container" aria-hidden="true">
      {petals.map((petal) => (
        <div key={petal.id} className="sakura-petal" style={petal.style} />
      ))}
    </div>
  );
};

export default SakuraPetals;
