import { X, Printer, Mail, Phone, MapPin, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('resume-modal-active');
    } else {
      document.body.classList.remove('resume-modal-active');
    }
    return () => document.body.classList.remove('resume-modal-active');
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay no-print" onClick={onClose}>
      <div 
        className="infographic-resume-dashboard" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Vertical Brand Sidebar */}
        <div className="resume-sidebar">
          <div className="sidebar-monogram">V</div>
          
          <div className="sidebar-title-block">
            <h1 className="sidebar-name">Vardhan Babu</h1>
            <p className="sidebar-role">MCA Student & Developer</p>
          </div>

          <div className="sidebar-contact-list">
            <div className="sidebar-contact-item">
              <Mail size={15} />
              <span>vardhanbabuvendi@gmail.com</span>
            </div>
            <div className="sidebar-contact-item">
              <Phone size={15} />
              <span>+91 9100397713</span>
            </div>
            <div className="sidebar-contact-item">
              <MapPin size={15} />
              <span>AP, India</span>
            </div>
          </div>

          <div className="sidebar-actions">
            <button className="download-pdf-btn" onClick={handlePrint}>
              <Printer size={16} /> Download Resume (PDF)
            </button>
            <button className="sidebar-close-btn" onClick={onClose}>
              <X size={16} /> Close Preview
            </button>
          </div>
        </div>

        {/* Right Infographic Core Content */}
        <div className="resume-infographic-body">
          {/* Header Dashboard Metrics */}
          <div className="dashboard-metrics-row">
            <div className="metric-box">
              <span className="metric-num">9.02</span>
              <span className="metric-lbl">MCA CGPA</span>
            </div>
            <div className="metric-box">
              <span className="metric-num">9.28</span>
              <span className="metric-lbl">B.Sc CGPA</span>
            </div>
            <div className="metric-box">
              <span className="metric-num">4+</span>
              <span className="metric-lbl">Key Projects</span>
            </div>
          </div>

          <div className="infographic-main-grid">
            {/* Column 1: Timelines & Education */}
            <div className="infographic-col">
              <div className="infographic-card">
                <h3 className="infographic-card-title">
                  <Award size={16} /> Education Path
                </h3>
                
                <div className="infographic-timeline">
                  <div className="timeline-node active">
                    <div className="node-connector-line" />
                    <div className="node-glow-point" />
                    <span className="node-date-tag">2024 – 2026</span>
                    <h4 className="node-title-text">Master of Computer Applications (MCA)</h4>
                    <p className="node-desc-text">Sree Venkateswara College of Engineering</p>
                    <div className="grade-badge">Grade: 9.02 CGPA (Pursuing)</div>
                  </div>

                  <div className="timeline-node">
                    <div className="node-connector-line" />
                    <div className="node-glow-point" />
                    <span className="node-date-tag">2021 – 2024</span>
                    <h4 className="node-title-text">Bachelor of Computer Science</h4>
                    <p className="node-desc-text">Krishna Chaitanya Degree and PG College</p>
                    <div className="grade-badge">Grade: 9.28 CGPA</div>
                  </div>

                  <div className="timeline-node">
                    <div className="node-glow-point" />
                    <span className="node-date-tag">2019 – 2021</span>
                    <h4 className="node-title-text">Intermediate - MPC</h4>
                    <p className="node-desc-text">Gurthikonda Sreeramulu Junior College</p>
                    <div className="grade-badge">Grade: 98.4% Percentage</div>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="infographic-card">
                <h3 className="infographic-card-title">Summary</h3>
                <p className="summary-para">
                  Master of Computer Applications student possessing high-level capabilities in React.js, JavaScript, and API integrations. Passionate about engineering highly responsive web applications and AI-driven interfaces, seeking entry-level Software Developer opportunities.
                </p>
              </div>
            </div>

            {/* Column 2: Skills, Projects, & Credentials */}
            <div className="infographic-col">
              {/* Technical Skills Infographic */}
              <div className="infographic-card">
                <h3 className="infographic-card-title">Expertise</h3>
                <div className="skills-progress-block">
                  <div className="progress-bar-group">
                    <div className="progress-bar-info">
                      <span>React.js & Frontend</span>
                      <span>95%</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: '95%' }} />
                    </div>
                  </div>
                  
                  <div className="progress-bar-group">
                    <div className="progress-bar-info">
                      <span>JavaScript / Python</span>
                      <span>90%</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: '90%' }} />
                    </div>
                  </div>

                  <div className="progress-bar-group">
                    <div className="progress-bar-info">
                      <span>Backend & REST APIs</span>
                      <span>85%</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: '85%' }} />
                    </div>
                  </div>

                  <div className="progress-bar-group">
                    <div className="progress-bar-info">
                      <span>Databases (MySQL/MongoDB)</span>
                      <span>80%</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="infographic-card">
                <h3 className="infographic-card-title">Key Projects</h3>
                <div className="projects-grid-compact">
                  <div className="project-compact-item">
                    <div className="proj-compact-header">
                      <h4 className="proj-compact-name">Gemini AI Clone</h4>
                      <span className="proj-compact-tech">React.js</span>
                    </div>
                    <p className="proj-compact-desc">Built chatbot interface with dynamic stream API endpoints.</p>
                  </div>

                  <div className="project-compact-item">
                    <div className="proj-compact-header">
                      <h4 className="proj-compact-name">YouTube Clone</h4>
                      <span className="proj-compact-tech">React.js</span>
                    </div>
                    <p className="proj-compact-desc">Integrated search queries and Context API media states.</p>
                  </div>

                  <div className="project-compact-item">
                    <div className="proj-compact-header">
                      <h4 className="proj-compact-name">RAG QA System</h4>
                      <span className="proj-compact-tech">FAISS</span>
                    </div>
                    <p className="proj-compact-desc">Engineered python sentence embedding semantic retrieval layers.</p>
                  </div>
                </div>
              </div>

              {/* Certifications and Strengths */}
              <div className="infographic-card">
                <h3 className="infographic-card-title">Credentials</h3>
                <div className="credentials-info-list">
                  <div className="cred-item">
                    <ChevronRight size={14} className="cred-arrow" />
                    <span>Full Stack Web Development & Python Bootcamps — ExcelR</span>
                  </div>
                  <div className="cred-item">
                    <ChevronRight size={14} className="cred-arrow" />
                    <span>JavaScript & Node.js Certifications — DevTown (`16uuFx`)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
