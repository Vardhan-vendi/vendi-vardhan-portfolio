import { CheckCircle } from 'lucide-react';

export default function About() {
  const strengths = [
    'Strong proficiency in building responsive, interactive, and user-friendly web interfaces.',
    'Excellent understanding of modern frontend technologies (React.js, JavaScript ES6+, HTML5, CSS3).',
    'Ability to integrate and work with REST APIs effectively to create real-time experiences.',
    'Strong debugging and analytical problem-solving skills in web applications.',
    'Focus on writing clean, reusable, modular, and maintainable code architecture.',
    'Quick learner with adaptability to new technical stacks and dev environments.'
  ];

  return (
    <section id="about" className="section about-section reveal">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know my professional focus, capabilities, and core developer strengths.
        </p>

        <div className="about-grid-separated">
          {/* Left Side: Professional Profile Summary */}
          <div className="glass-card about-summary-card reveal slide-left">
            <h3 className="subheading-accent">Professional Summary</h3>
            <p className="profile-text">
              I am a dedicated and ambitious MCA student with a strong frontend expertise, specializing in React.js and JavaScript. I possess a genuine passion for creating responsive, highly aesthetic, and intelligent user interfaces. 
            </p>
            <p className="profile-text" style={{ marginTop: '1rem' }}>
              My technical curiosity drives me to integrate AI elements, REST APIs, and modern styling architectures to design immersive applications. I am actively seeking an entry-level Software / Frontend Developer role where I can build clean, scalable code and contribute to dynamic product engineering teams.
            </p>
          </div>

          {/* Right Side: Core Strengths Bento */}
          <div className="glass-card about-strengths-card reveal slide-right">
            <h3 className="subheading-accent">Core Strengths</h3>
            <ul className="strengths-list">
              {strengths.map((strength, index) => (
                <li key={index} className={`strength-item reveal delay-${index + 1} slide-right`}>
                  <CheckCircle className="strength-icon" size={18} />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
