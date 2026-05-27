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

        {/* Right Column: Futuristic Cyber Aperture Pod & Floating Tech Galaxy */}
        <div className="hero-visual">
          <div className="profile-frame-container">
            {/* Ambient Backlight Aura Glow */}
            <div className="glow-shadow-backdrop" />
            
            {/* Custom Tech Dashboard Background Matrix Dots */}
            <div className="tech-matrix-grid" />

            {/* Futuristic Tech HUD Circular Rings */}
            <div className="hud-ring hud-ring-outer" />
            <div className="hud-ring hud-ring-inner" />
            <div className="dotted-orbit dotted-orbit-1" />
            <div className="dotted-orbit dotted-orbit-2" />

            {/* The Cybernetic Aperture Pod with Scanner Laser Line */}
            <div className="cyber-aperture-pod">
              {/* Vertical scanning laser line */}
              <div className="scan-laser-line" />
              
              {/* Dynamic HUD tech lines inside */}
              <div className="pod-hud-element top-left-corner" />
              <div className="pod-hud-element bottom-right-corner" />

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

            {/* Floating Skill Capsule 1: React.js (Top Left) */}
            <div className="floating-skill-capsule react-glow skill-node-react">
              <div className="capsule-icon-wrapper react-blue">
                <svg className="react-icon animate-spin-slow" viewBox="0 0 100 100" width="16" height="16">
                  <ellipse cx="50" cy="50" rx="8" ry="22" fill="none" stroke="#00f2fe" strokeWidth="2.5" transform="rotate(0 50 50)" />
                  <ellipse cx="50" cy="50" rx="8" ry="22" fill="none" stroke="#00f2fe" strokeWidth="2.5" transform="rotate(60 50 50)" />
                  <ellipse cx="50" cy="50" rx="8" ry="22" fill="none" stroke="#00f2fe" strokeWidth="2.5" transform="rotate(120 50 50)" />
                  <circle cx="50" cy="50" r="5" fill="#00f2fe" />
                </svg>
              </div>
              <div className="capsule-info">
                <span className="capsule-title">REACT</span>
                <span className="capsule-sub">SYSTEM STABLE</span>
              </div>
            </div>

            {/* Floating Skill Capsule 2: JavaScript (Mid Right) */}
            <div className="floating-skill-capsule js-glow skill-node-js">
              <div className="capsule-icon-wrapper js-yellow">
                <div className="js-emblem">JS</div>
              </div>
              <div className="capsule-info">
                <span className="capsule-title">JAVASCRIPT</span>
                <span className="capsule-sub">90% PROFICIENCY</span>
              </div>
            </div>

            {/* Floating Skill Capsule 3: Python (Mid Left) */}
            <div className="floating-skill-capsule python-glow skill-node-python">
              <div className="capsule-icon-wrapper python-blue-gold">
                <svg className="python-icon" viewBox="0 0 110 110" width="16" height="16">
                  <path d="M52.3 2.1c-14.8 0-23.7 1-25.2 2.9-2.3 2.8-2.2 8.7-2.2 13.5v9h28v4H15.1C6.7 31.5 2.1 37.1 2.1 48.7c0 10.7 3.8 16.7 11.2 17.6 3.1.4 12.3.4 12.3.4v-9.3c0-7.3 6.3-13.7 13.7-13.7h28c7.3 0 13.7 6.4 13.7 13.7v8.9c0 1.9 0 12.3-.4 15.3-1 7.4-7 11.2-17.7 11.2h-9v-28h-4v37.8c0 8.4 5.6 13 17.2 13 10.7 0 16.7-3.8 17.6-11.2.4-3.1.4-12.3.4-12.3s0 9.3 9.3 9.3c7.3 0 13.7-6.3 13.7-13.7V48.7c0-7.3-6.4-13.7-13.7-13.7h-8.9c-1.9 0-12.3 0-15.3.4-7.4 1-11.2 7-11.2 17.7v9h-28v-4h37.8c8.4 0 13-5.6 13-17.2 0-10.7-3.8-16.7-11.2-17.6-3.1-.4-12.3-.4-12.3-.4V20c0-7.3-6.3-13.7-13.7-13.7H52.3z" fill="#387eb8"/>
                </svg>
              </div>
              <div className="capsule-info">
                <span className="capsule-title">PYTHON</span>
                <span className="capsule-sub">CORE / DATA</span>
              </div>
            </div>

            {/* Floating Skill Capsule 4: REST APIs (Bottom Left) */}
            <div className="floating-skill-capsule rest-glow skill-node-rest">
              <div className="capsule-icon-wrapper rest-pink">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ff007f" strokeWidth="2.5">
                  <rect x="2" y="2" width="20" height="5" rx="1.5" />
                  <rect x="2" y="9.5" width="20" height="5" rx="1.5" />
                  <rect x="2" y="17" width="20" height="5" rx="1.5" />
                </svg>
              </div>
              <div className="capsule-info">
                <span className="capsule-title">REST APIS</span>
                <span className="capsule-sub">HIGH PERFORMANCE</span>
              </div>
            </div>

            {/* Floating Skill Capsule 5: Node.js (Top Right) */}
            <div className="floating-skill-capsule node-glow skill-node-node">
              <div className="capsule-icon-wrapper node-green">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22c55e" strokeWidth="2.5">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                  <polyline points="2 7 12 12 22 7" />
                  <polyline points="12 22 12 12" />
                </svg>
              </div>
              <div className="capsule-info">
                <span className="capsule-title">NODE.JS</span>
                <span className="capsule-sub">SERVER-SIDE</span>
              </div>
            </div>

            {/* Floating Skill Capsule 6: MongoDB (Bottom Right) */}
            <div className="floating-skill-capsule mongodb-glow skill-node-mongodb">
              <div className="capsule-icon-wrapper mongodb-teal">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#0ea5e9" strokeWidth="2.5">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                </svg>
              </div>
              <div className="capsule-info">
                <span className="capsule-title">MONGODB</span>
                <span className="capsule-sub">CLOUD DB</span>
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
