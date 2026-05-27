import { useState, useEffect } from 'react';

const logs = [
  { p: 10, text: 'Resolving React 19 core...' },
  { p: 30, text: 'Configuring theme CSS tokens...' },
  { p: 50, text: 'Mapping Vector similarity boards...' },
  { p: 70, text: 'Connecting Gemini cognitive layer...' },
  { p: 90, text: 'Calibrating canvas spark fields...' },
  { p: 100, text: 'System ready.' },
];

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [logText, setLogText] = useState('Booting system files...');
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsRevealed(true);
            setTimeout(() => {
              onComplete();
            }, 800); // Shutter slide curtains duration
          }, 400);
          return 100;
        }

        const nextVal = prev + Math.floor(Math.random() * 5 + 3);
        const finalVal = Math.min(nextVal, 100);

        // Update log text based on loader milestones
        const activeLog = logs.findLast(l => finalVal >= l.p);
        if (activeLog) {
          setLogText(activeLog.text);
        }

        return finalVal;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="preloader-shutter-container no-print">
      
      {/* Left Shutter Panel */}
      <div className={`preloader-shutter-left ${isRevealed ? 'exit' : ''}`}>
        <div className="shutter-grid-overlay" />
        
        <div className="shutter-content">
          {/* Pulsing Single 'V' Monogram with Rotating Ring */}
          <div className="shutter-monogram">
            {/* Rotating Outer Dashed Ring */}
            <div className="shutter-monogram-ring" />
            <span className="shutter-monogram-text">V</span>
          </div>
        </div>
      </div>

      {/* Right Shutter Panel */}
      <div className={`preloader-shutter-right ${isRevealed ? 'exit' : ''}`}>
        <div className="shutter-grid-overlay" />
        
        <div className="shutter-content">
          {/* Dynamic Name and Percentage reveal */}
          <div className="shutter-steps-info">
            <span className="shutter-step-lbl">
              {logText}
            </span>
            
            {/* Animated Name Reveal */}
            <h2 className="shutter-brand-name">
              {percent > 30 ? (
                <span className="shutter-brand-name gradient">
                  Vardhan Babu
                </span>
              ) : (
                <span className="shutter-brand-name loading">Initializing...</span>
              )}
            </h2>

            {/* Percentage */}
            <div className="shutter-percentage-text">
              {percent.toString().padStart(3, '0')}
              <span className="shutter-percentage-symbol">%</span>
            </div>
          </div>

          {/* High-Tech indicator dots */}
          <div className="shutter-dots-wrapper">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`shutter-dot ${percent >= (i + 1) * 16 ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
