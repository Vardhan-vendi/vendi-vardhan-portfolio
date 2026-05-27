import { ExternalLink, Github, Bot, Youtube, Database, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Gemini AI Chatbot Clone',
      category: 'React.js | API Integration',
      description: 'A conversational artificial intelligence chatbot that interfaces directly with Gemini models in real time.',
      highlights: [
        'Integrated real-time streaming API replies using standard Fetch APIs with error boundary layers.',
        'Engineered professional markdown rendering support and code snippet copy tools.',
        'Created responsive fluid glass layouts with instant layout transitions, custom prompt templates, and active user session cache.'
      ],
      tags: ['React.js', 'JavaScript', 'Gemini API', 'Context API', 'CSS Grid'],
      icon: <Bot size={28} className="project-svg-icon chatbot-icon" />,
      github: '#',
      demo: '#',
      color: 'hsl(190, 95%, 50%)'
    },
    {
      title: 'YouTube Streaming Clone',
      category: 'React.js | Global Context',
      description: 'A highly functional video streaming clone showcasing video searches, playback grids, and custom channels.',
      highlights: [
        'Leveraged official YouTube REST v3 API endpoints for live data retrieval and video indexing.',
        'Managed application global context using React Context API to preserve user playlist state.',
        'Designed modular, highly reusable component structures (Sidebar, SearchBar, VideoGrid, CommentSection) with loading skeleton loaders.'
      ],
      tags: ['React.js', 'YouTube API', 'Context API', 'Vanilla CSS', 'Skeleton Loader'],
      icon: <Youtube size={28} className="project-svg-icon youtube-icon" />,
      github: '#',
      demo: '#',
      color: 'hsl(350, 85%, 55%)'
    },
    {
      title: 'RAG Document QA System',
      category: 'Django | Python | NLP',
      description: 'A semantics-driven retrieval-augmented generation document parsing search system.',
      highlights: [
        'Built vectorized document retrieval nodes utilizing SentenceTransformers models for semantic accuracy.',
        'Structured local indexing with FAISS (Facebook AI Similarity Search) to enable ultra-fast search matches across large documents.',
        'Engineered responsive Django web controllers serving Python workflows to parse PDFs and render text references.'
      ],
      tags: ['Django', 'Python', 'FAISS', 'SentenceTransformers', 'REST APIs'],
      icon: <Database size={28} className="project-svg-icon rag-icon" />,
      github: '#',
      demo: '#',
      color: 'hsl(280, 85%, 65%)'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Stellar Projects</h2>
        <p className="section-subtitle">
          Explore my functional applications showing my capabilities in API orchestrations, frontend state management, and backend semantic engines.
        </p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className={`glass-card project-card reveal delay-${idx + 1} slide-left`}>
              {/* Graphic Visual Panel representing the project */}
              <div 
                className="project-visual-header" 
                style={{ '--accent-proj': project.color }}
              >
                <div className="project-graphic-backdrop" />
                <div className="project-illustration">
                  {project.icon}
                  <Sparkles className="sparkle-decoration" size={14} />
                </div>
                <div className="project-cat-badge">{project.category}</div>
              </div>

              {/* Project Info */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Tech Pills */}
                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Key Achievements Bullet list */}
                <div className="project-highlights-wrapper">
                  <h4 className="highlights-title">Key Accomplishments</h4>
                  <ul className="project-bullets">
                    {project.highlights.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="bullet-item">{bullet}</li>
                    ))}
                  </ul>
                </div>

                {/* External links */}
                <div className="project-links">
                  <a href={project.github} className="btn btn-secondary btn-sm" aria-label="View Source on GitHub">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.demo} className="btn btn-primary btn-sm" aria-label="View Live Project Demo">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
