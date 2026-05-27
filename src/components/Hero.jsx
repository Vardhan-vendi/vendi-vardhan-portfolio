import { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';
import ResumeModal from './ResumeModal';

const titles = ['Frontend Developer', 'MCA Student', 'AI Chatbot Builder', 'React.js Specialist'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Typing effect logic
  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 0);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToProjects = () => {
    const projSection = document.getElementById('projects');
    if (projSection) {
      projSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section hero-section">
      {/* Background Floating Decorative Glass Nodes */}
      <div className="floating-bubble bubble-1 float-slow-node" />
      <div className="floating-bubble bubble-2 float-medium-node" />
      <div className="floating-bubble bubble-3 float-slow-node" />

      <div className="container hero-container">
        {/* Left Column: Information Intro */}
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">
              <Sparkles size={14} className="badge-spark" /> Available for Opportunities
            </span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="highlight-text">Vardhan Babu</span>
          </h1>

          <div className="typing-text-container">
            I am a <span className="typed-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            MCA student passionate about building highly responsive, user-centric web applications and AI-driven systems. Specialized in React.js, JavaScript, and seamless API integration.
          </p>

          {/* Call to Actions */}
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              Explore Projects <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary" onClick={() => setIsResumeOpen(true)}>
              Get Resume <Download size={18} />
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a href="https://github.com/Vardhan-vendi" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vardhan-babu-vendi-55a074370?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vardhanbabuvendi@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="tel:9100397713" className="social-icon-btn" aria-label="Phone">
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Premium User Profile Photo Frame with Glassmorphic Overlays */}
        <div className="hero-visual">
          <div className="profile-frame-container">
            {/* Ambient Backlight Aura Glow */}
            <div className="glow-shadow-backdrop" />
            
            {/* Custom Tech Dashboard Background Matrix Dots */}
            <div className="tech-matrix-grid" />

            {/* The Cyber-Neon Profile Photo Frame (Rounded Rectangular Overhaul) */}
            <div className="profile-photo-frame">
              <img 
                src="/profile.jpg" 
                alt="Vardhan Babu" 
                className="profile-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&h=500";
                }}
              />
            </div>

            {/* Float Widget 1: React Specialist (Top Left) */}
            <div className="glass-card tech-widget widget-react float-slow-node">
              <div className="widget-icon-wrapper react-blue">
                <svg className="react-icon" viewBox="0 0 100 100" width="18" height="18">
                  <ellipse cx="50" cy="50" rx="8" ry="22" fill="none" stroke="#00f2fe" strokeWidth="2.5" transform="rotate(0 50 50)" />
                  <ellipse cx="50" cy="50" rx="8" ry="22" fill="none" stroke="#00f2fe" strokeWidth="2.5" transform="rotate(60 50 50)" />
                  <ellipse cx="50" cy="50" rx="8" ry="22" fill="none" stroke="#00f2fe" strokeWidth="2.5" transform="rotate(120 50 50)" />
                  <circle cx="50" cy="50" r="5" fill="#00f2fe" />
                </svg>
              </div>
              <div className="widget-info">
                <span className="widget-title">React Specialist</span>
                <div className="widget-status">
                  <span className="status-dot green animate-pulse" />
                  <span className="status-text">Active System</span>
                </div>
              </div>
            </div>

            {/* Float Widget 2: JavaScript ES6+ (Mid Right) */}
            <div className="glass-card tech-widget widget-js float-medium-node">
              <div className="widget-icon-wrapper js-yellow">
                <div className="js-logo-box">JS</div>
              </div>
              <div className="widget-info">
                <span className="widget-title">ES6+ JavaScript</span>
                <div className="widget-progress-track">
                  <div className="widget-progress-fill" style={{ width: '90%' }} />
                </div>
              </div>
            </div>

            {/* Float Widget 3: REST APIs & JSON (Bottom Center) */}
            <div className="glass-card tech-widget widget-rest float-slow-node">
              <div className="widget-icon-wrapper rest-pink">
                <svg className="rest-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ff007f" strokeWidth="2.5">
                  <rect x="2" y="2" width="20" height="5" rx="1.5" />
                  <rect x="2" y="9.5" width="20" height="5" rx="1.5" />
                  <rect x="2" y="17" width="20" height="5" rx="1.5" />
                  <circle cx="6" cy="4.5" r="0.75" fill="#ff007f" />
                  <circle cx="6" cy="12" r="0.75" fill="#ff007f" />
                  <circle cx="6" cy="19.5" r="0.75" fill="#ff007f" />
                </svg>
              </div>
              <div className="widget-info">
                <span className="widget-title">REST APIs & JSON</span>
                <span className="widget-badge pink">High Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frosted Glass Invitation Resume Card Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
