import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scrolling to add backdrop blur & highlight active sections
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''} no-print`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="brand" onClick={() => scrollToSection('hero')}>
          <span className="brand-firstname">Vardhan</span>
          <span className="brand-lastname">Babu</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Control Center (Theme switch + Hire Me + Mobile Menu) */}
        <div className="controls">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="theme-icon sun" />
            ) : (
              <Moon size={18} className="theme-icon moon" />
            )}
          </button>

          <button 
            className="btn btn-hire-me" 
            onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=vardhanbabuvendi@gmail.com&su=Job%20Opportunity%20/%20Collaboration", "_blank")}
          >
            Hire Me
          </button>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`mobile-link-btn ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
