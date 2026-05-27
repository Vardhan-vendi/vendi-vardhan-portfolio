import { Layers, Terminal, Database, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      icon: <Layers size={20} />,
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / Modern CSS', level: 90 }
      ],
      gridArea: 'frontend'
    },
    {
      title: 'Backend & Integration',
      icon: <Terminal size={20} />,
      skills: [
        { name: 'REST APIs Integration', level: 90 },
        { name: 'Django / Python', level: 82 },
        { name: 'Node.js (Basics)', level: 68 },
        { name: 'Express.js', level: 65 }
      ],
      gridArea: 'backend'
    },
    {
      title: 'Databases & Storage',
      icon: <Database size={20} />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 78 }
      ],
      gridArea: 'database'
    },
    {
      title: 'Systems & Tooling',
      icon: <Cpu size={20} />,
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'Vite & VS Code', level: 92 },
        { name: 'Java & C', level: 75 },
        { name: 'Python Programming', level: 85 }
      ],
      gridArea: 'tooling'
    }
  ];

  return (
    <section id="skills" className="section skills-section reveal">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          My multi-layered technical skills, specialized in modern web development frameworks, database handling, and software tooling.
        </p>

        <div className="bento-skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`glass-card bento-skill-card card-${category.gridArea} reveal delay-${idx + 1} slide-left`}>
              <div className="bento-card-header">
                <div className="bento-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="bento-card-title">{category.title}</h3>
              </div>
              
              <div className="bento-skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="bento-skill-item">
                    <div className="skill-meta-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    
                    {/* Glassmorphic progress bar */}
                    <div className="progress-bar-track">
                      <div 
                        className="progress-bar-fill" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
