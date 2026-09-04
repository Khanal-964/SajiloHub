import React, { useRef, useState, useEffect } from 'react';

const HandwritingCanvas = ({ character }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  // Initialize Canvas & handle sizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set internal size matching display size for crisp rendering
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;

    const ctx = canvas.getContext('2d');
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#C41E3A'; // Torii red for tracing

    // Clear canvas when character changes
    clearCanvas();
  }, [character]);

  // Drawing event handlers
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    
    // Check if touch event or mouse event
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={styles.practiceContainer}>
      <div style={styles.canvasWrapper}>
        {/* Background character guide */}
        {showGuide && (
          <div style={styles.guideText}>
            {character}
          </div>
        )}
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          style={styles.canvas}
        />
      </div>

      <div style={styles.controls}>
        <button 
          onClick={() => setShowGuide(!showGuide)} 
          style={{
            ...styles.btn,
            backgroundColor: showGuide ? 'rgba(196, 30, 58, 0.1)' : 'rgba(0,0,0,0.05)',
            color: showGuide ? 'var(--primary)' : 'var(--text-secondary)',
            border: showGuide ? '1px solid var(--primary)' : '1px solid var(--border)'
          }}
        >
          {showGuide ? 'Hide Guide' : 'Show Guide'}
        </button>
        <button onClick={clearCanvas} style={styles.clearBtn}>
          Clear Drawing
        </button>
      </div>
    </div>
  );
};

const styles = {
  practiceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    width: '100%'
  },
  canvasWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '280px',
    aspectRatio: '1',
    backgroundColor: '#fff',
    borderRadius: '16px',
    border: '2px dashed var(--border)',
    overflow: 'hidden',
    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.05)'
  },
  guideText: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12rem',
    color: '#e2e2e2',
    userSelect: 'none',
    pointerEvents: 'none',
    fontFamily: '"Noto Sans JP", sans-serif',
    fontWeight: '300'
  },
  canvas: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    cursor: 'crosshair',
    zIndex: '2'
  },
  controls: {
    display: 'flex',
    gap: '12px',
    width: '100%',
    maxWidth: '280px'
  },
  btn: {
    flex: '1',
    padding: '10px 14px',
    fontSize: '0.9rem',
    fontWeight: '600',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  clearBtn: {
    flex: '1',
    padding: '10px 14px',
    fontSize: '0.9rem',
    fontWeight: '600',
    borderRadius: '12px',
    backgroundColor: 'var(--text-primary)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }
};

export default HandwritingCanvas;
