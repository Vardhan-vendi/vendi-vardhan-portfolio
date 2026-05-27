import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CustomCursor from './components/CustomCursor';
import BackgroundSparks from './components/BackgroundSparks';
import Preloader from './components/Preloader';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      localStorage.setItem('theme', 'dark');
      return 'dark';
    }
    return savedTheme;
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Apply theme attributes to DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Track scroll progress percentage and scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // 1. Scroll Progress Percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        setScrollProgress(scrolled);
      }

      // 2. Scroll Direction Tracking
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
      } else if (currentScrollY < lastScrollY) {
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal animations (both down & up scrolls)
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            // Remove active to trigger entrance transition again on scroll-up/down
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container mesh-gradient-bg">
      {/* Starting visual preloader experience */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      {/* Lagging Trailing Custom Cursor */}
      <CustomCursor />

      {/* Floating Canvas Sparks Particle Engine */}
      <BackgroundSparks />

      {/* Warping background mesh gradient spots */}
      <div className="warp-mesh-spot-1" />
      <div className="warp-mesh-spot-2" />

      {/* Top scroll progress bar */}
      <div 
        className="scroll-progress-bar no-print" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Global Navigation header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Core sections */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Floating AI Chat Assistant */}
      <Chatbot />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
