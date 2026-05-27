import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper no-print">
      <div className="container">
        <div className="footer-main-grid">
          {/* Slogan */}
          <div className="footer-brand-column">
            <div className="footer-brand">
              <span className="brand-firstname">Vardhan</span>
              <span className="brand-lastname">Babu</span>
            </div>
            <p className="footer-description">
              Master of Computer Applications student passionate about building highly interactive, responsive, and aesthetic web applications with clean, maintainable, and scalable frontend architectures.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-links-column">
            <h4 className="footer-header">Quick Nav</h4>
            <div className="footer-links-grid">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#certifications" className="footer-link">Credentials</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Socials */}
          <div className="footer-social-column">
            <h4 className="footer-header">Connect Channels</h4>
            <div className="footer-social-icons">
              <a href="https://github.com/Vardhan-vendi" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/vardhan-babu-vendi-55a074370?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vardhanbabuvendi@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="tel:9100397713" className="footer-social-btn" aria-label="Phone">
                <Phone size={18} />
              </a>
            </div>
            
            <button className="btn btn-secondary back-to-top-btn" onClick={scrollToTop}>
              Scroll To Top <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {currentYear} Vardhan Babu. All rights reserved. 
          </p>
          <p className="footer-credits">
            Crafted with React, Vite, and Premium Vanilla CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
