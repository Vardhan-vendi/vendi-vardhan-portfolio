import { useState, useEffect } from 'react';

const logs = [
  { p: 15, text: 'Resolving core assets...' },
  { p: 40, text: 'Mapping styling tokens...' },
  { p: 65, text: 'Calibrating neural visual nodes...' },
  { p: 85, text: 'Integrating cognitive layers...' },
  { p: 100, text: 'System calibrated.' }
];

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [logText, setLogText] = useState('Initializing files...');
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
            }, 600); // Matches CSS exit transition duration
          }, 300);
          return 100;
        }

        const nextVal = prev + Math.floor(Math.random() * 6 + 4);
        const finalVal = Math.min(nextVal, 100);

        // Update log text based on loader milestones
        const activeLog = logs.findLast(l => finalVal >= l.p);
        if (activeLog) {
          setLogText(activeLog.text);
        }

        return finalVal;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`preloader-soft-overlay no-print ${isRevealed ? 'exit' : ''}`}>
      {/* Background Matrix Mesh Grid Overlay */}
      <div className="preloader-soft-grid" />
      
      {/* Central Soft Diagnostic Orb */}
      <div className="preloader-soft-core">
        {/* Soft Glowing Circular Spinner */}
        <div className="preloader-soft-spinner">
          <div className="spinner-halo" />
          <div className="spinner-ring" />
          <div className="preloader-monogram">V</div>
        </div>

        {/* Streaming Status Logs */}
        <div className="preloader-soft-status">
          <span className="preloader-log-tag">{logText}</span>
          
          <div className="preloader-percentage">
            <span className="percent-num">{percent}</span>
            <span className="percent-symbol">%</span>
          </div>
          
          {/* Animated loading bar indicator */}
          <div className="preloader-track-bar">
            <div className="preloader-fill-bar" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
