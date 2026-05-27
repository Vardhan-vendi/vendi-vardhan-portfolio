import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  // Prevent background scrolling when modal is open
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
      {/* The Invitation Resume Card container */}
      <div 
        className="invitation-resume-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Golden Corner Caps */}
        <div className="corner-cap corner-tl" />
        <div className="corner-cap corner-tr" />
        <div className="corner-cap corner-bl" />
        <div className="corner-cap corner-br" />

        {/* Modal Controls */}
        <div className="resume-modal-controls">
          <button 
            className="control-btn print-btn" 
            onClick={handlePrint}
            title="Download PDF / Print"
          >
            <Printer size={18} /> Print / Save PDF
          </button>
          <button 
            className="control-btn close-btn" 
            onClick={onClose}
            title="Close Resume"
          >
            <X size={18} /> Close
          </button>
        </div>

        {/* Card Main Header Area */}
        <div className="resume-card-header">
          <h1 className="resume-card-name">Vendi Vardhan Babu</h1>
          <p className="resume-card-title-subtitle">Master of Computer Applications (MCA)</p>
          
          <div className="resume-card-contact-grid">
            <div className="contact-item">
              <Phone size={14} className="contact-icon-gold" />
              <span>+91 9100397713</span>
            </div>
            <div className="contact-item">
              <Mail size={14} className="contact-icon-gold" />
              <span>vardhanbabuvendi@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={14} className="contact-icon-gold" />
              <span>Nellore, Andhra Pradesh</span>
            </div>
          </div>
        </div>

        <div className="resume-card-divider" />

        {/* Card Body - Grid Layout */}
        <div className="resume-card-body-grid">
          
          {/* Left Column: Summary, Skills, Strengths */}
          <div className="resume-card-col">
            {/* Professional Summary */}
            <div className="resume-card-section">
              <h3 className="card-section-title">Summary</h3>
              <p className="card-section-text">
                MCA student with strong skills in React.js, JavaScript, and API integration. Passionate about building responsive web and AI-based applications, seeking an entry-level Software/Frontend Developer role.
              </p>
            </div>

            {/* Technical Skills Segment */}
            <div className="resume-card-section">
              <h3 className="card-section-title">Technical Skills</h3>
              <div className="skills-block-list">
                <div className="skills-row">
                  <span className="skills-row-lbl">Languages:</span>
                  <span className="skills-row-vals">JavaScript, Python, Java, C</span>
                </div>
                <div className="skills-row">
                  <span className="skills-row-lbl">Frontend:</span>
                  <span className="skills-row-vals">HTML, CSS, React.js</span>
                </div>
                <div className="skills-row">
                  <span className="skills-row-lbl">Backend & APIs:</span>
                  <span className="skills-row-vals">Node.js (Basics), Express.js, Django, REST APIs</span>
                </div>
                <div className="skills-row">
                  <span className="skills-row-lbl">Databases:</span>
                  <span className="skills-row-vals">MySQL, MongoDB</span>
                </div>
                <div className="skills-row">
                  <span className="skills-row-lbl">Tools:</span>
                  <span className="skills-row-vals">Git, GitHub, VS Code, Vite</span>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="resume-card-section">
              <h3 className="card-section-title">Strengths</h3>
              <ul className="card-bullet-list">
                <li>Building responsive, high-performance web interfaces</li>
                <li>Integrating and working with REST APIs effectively</li>
                <li>Strong debugging and problem-solving skills in React</li>
                <li>Quick learner and highly adaptable to new frameworks</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Education & Projects */}
          <div className="resume-card-col">
            {/* Education Timeline */}
            <div className="resume-card-section">
              <h3 className="card-section-title">Education</h3>
              <div className="resume-timeline">
                <div className="timeline-node">
                  <div className="node-dot" />
                  <span className="node-time">2024 – 2026 (Pursuing)</span>
                  <h4 className="node-degree">Master of Computer Applications (MCA)</h4>
                  <p className="node-inst">Sree Venkateswara College of Engineering</p>
                  <span className="node-grade">CGPA: 9.02</span>
                </div>
                
                <div className="timeline-node">
                  <div className="node-dot" />
                  <span className="node-time">2021 – 2024</span>
                  <h4 className="node-degree">Bachelor of Computer Science</h4>
                  <p className="node-inst">Krishna Chaitanya Degree and PG College</p>
                  <span className="node-grade">CGPA: 9.28</span>
                </div>

                <div className="timeline-node">
                  <div className="node-dot" />
                  <span className="node-time">2019 – 2021</span>
                  <h4 className="node-degree">Intermediate (MPC)</h4>
                  <p className="node-inst">Gurthikonda Sreeramulu Junior College</p>
                  <span className="node-grade">Percentage: 98.4%</span>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="resume-card-section">
              <h3 className="card-section-title">Projects</h3>
              <div className="card-projects-list">
                <div className="project-item">
                  <div className="project-heading-row">
                    <h4 className="project-name">Gemini AI Clone</h4>
                    <span className="project-tech-badge">React.js | API</span>
                  </div>
                  <p className="project-desc">Built AI chatbot with real-time API integrations and optimized user handlers.</p>
                </div>
                
                <div className="project-item">
                  <div className="project-heading-row">
                    <h4 className="project-name">YouTube Clone</h4>
                    <span className="project-tech-badge">React.js | YouTube API</span>
                  </div>
                  <p className="project-desc">Developed streaming application with full search and reusable state controllers.</p>
                </div>

                <div className="project-item">
                  <div className="project-heading-row">
                    <h4 className="project-name">RAG Document QA</h4>
                    <span className="project-tech-badge">Django | FAISS</span>
                  </div>
                  <p className="project-desc">Implemented semantic search using Python and SentenceTransformers vectors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer verification notes */}
        <div className="resume-card-footer">
          <p>Verify ExcelR & DevTown Credential IDs: devtown.in/verify/16uuFx & devtown.in/verify/1G8qVo</p>
        </div>
      </div>
    </div>
  );
}
