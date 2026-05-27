import { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Calendar, ExternalLink, ZoomIn, X, Tag } from 'lucide-react';

export default function Certifications() {
  const allCertifications = [
    {
      title: 'Python Full Stack Bootcamp',
      provider: 'EduSkills Academy',
      date: 'Aug 2025',
      category: 'backend',
      verification: '#',
      credentialId: '152ce59df4e24fc73b0f5fa74e86382b',
      image: '/cert-eduskills.jpg',
      color: 'hsl(210, 85%, 45%)'
    },
    {
      title: 'Backend Web Dev (Node & Express)',
      provider: 'Developer Student Clubs (GDSC KIIT)',
      date: 'Dec 2022',
      category: 'backend',
      verification: 'https://cert.devtown.in/verify/pKnmt',
      credentialId: 'pKnmt',
      image: '/cert-gdsc.jpg',
      color: 'hsl(145, 80%, 40%)'
    },
    {
      title: 'Backend Web Dev (JavaScript & Node)',
      provider: 'Microsoft Learn Student Ambassador',
      date: 'Dec 2022',
      category: 'backend',
      verification: 'https://cert.devtown.in/verify/Z1jlDCL4',
      credentialId: 'Z1jlDCL4',
      image: '/cert-mlsa-backend.jpg',
      color: 'hsl(195, 85%, 48%)'
    },
    {
      title: 'Backend Web Dev (7-Days Bootcamp)',
      provider: 'DevTown',
      date: 'March 2023',
      category: 'backend',
      verification: 'https://cert.devtown.in/verify/16uuFx',
      credentialId: '16uuFx',
      image: '/cert-devtown-backend-js.jpg',
      color: 'hsl(275, 80%, 60%)'
    },
    {
      title: 'Fundamentals of Full Stack Development',
      provider: 'ExcelR Everyday Learning',
      date: 'Dec 2022',
      category: 'backend',
      verification: '#',
      credentialId: '102769E/EXCELR',
      image: '/cert-excelr-fsd-fundamentals.jpg',
      color: 'hsl(35, 95%, 45%)'
    },
    {
      title: 'JavaScript & React.js Bootcamp',
      provider: 'GDSC KIIT & DevTown',
      date: 'Dec 2022',
      category: 'frontend',
      verification: 'https://cert.devtown.in/verify/ZNiKk1',
      credentialId: 'ZNiKk1',
      image: '/cert-gdsc-js-react.jpg',
      color: 'hsl(20, 90%, 50%)'
    },
    {
      title: 'JavaScript & React.JS (7-Days Bootcamp)',
      provider: 'DevTown & MLSA KIIT',
      date: 'March 2023',
      category: 'frontend',
      verification: 'https://cert.devtown.in/tech/verify/23EuN',
      credentialId: '23EuN',
      image: '/cert-js-react-bootcamp.jpg',
      color: 'hsl(255, 85%, 65%)'
    },
    {
      title: 'Google Drive Clone using HTML & CSS',
      provider: 'GDSC KIIT & DevTown',
      date: 'Dec 2022',
      category: 'frontend',
      verification: 'https://cert.devtown.in/tech/verify/Z1GalHK',
      credentialId: 'Z1GalHK',
      image: '/cert-gdsc-gdrive.jpg',
      color: 'hsl(175, 80%, 40%)'
    },
    {
      title: 'Google Drive Clone (HTML & CSS Bootcamp)',
      provider: 'Microsoft Learn Student Ambassador',
      date: 'Nov 2022',
      category: 'frontend',
      verification: 'https://cert.devtown.in/verify/1G8qVo',
      credentialId: '1G8qVo',
      image: '/cert-microsoft.jpg',
      color: 'hsl(215, 85%, 50%)'
    },
    {
      title: 'Python Programming and SQL',
      provider: 'ExcelR Everyday Learning',
      date: 'Oct 2022',
      category: 'tools',
      verification: '#',
      credentialId: '80643E/EXCELR',
      image: '/cert-excelr-python-sql.jpg',
      color: 'hsl(290, 80%, 60%)'
    },
    {
      title: 'Cloud Fundamentals',
      provider: 'ExcelR Everyday Learning',
      date: 'March 2023',
      category: 'tools',
      verification: '#',
      credentialId: '40935E/EXCELR/30032023',
      image: '/cert-excelr-cloud.jpg',
      color: 'hsl(180, 75%, 45%)'
    },
    {
      title: 'Application Program on Adv Excel & Office',
      provider: 'ExcelR Everyday Learning',
      date: 'Nov 2022',
      category: 'tools',
      verification: '#',
      credentialId: '90844E/EXCELR',
      image: '/cert-excelr-adv-excel.jpg',
      color: 'hsl(50, 95%, 45%)'
    },
    {
      title: 'Community Appreciation Award',
      provider: 'DevTown Community',
      date: 'Dec 2022',
      category: 'tools',
      verification: 'https://cert.devtown.in/verify/Z1kt2na',
      credentialId: 'Z1kt2na',
      image: '/cert-devtown.jpg',
      color: 'hsl(330, 85%, 55%)'
    }
  ];

  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Derived state computed dynamically during render
  const filteredCerts = filter === 'all'
    ? allCertifications
    : allCertifications.filter(c => c.category === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentIndex(0); // Reset index on filter change
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredCerts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === filteredCerts.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certifications" className="section certifications-section reveal">
      <div className="container">
        <h2 className="section-title">Credentials</h2>
        <p className="section-subtitle">
          Professional development bootcamps and hands-on specialization credentials validating my technical knowledge.
        </p>

        {/* Categories Selector Tabs */}
        <div className="certs-filter-tabs no-print">
          <button 
            className={`filter-tab-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All Credentials ({allCertifications.length})
          </button>
          <button 
            className={`filter-tab-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => handleFilterChange('backend')}
          >
            Full Stack & Backend ({allCertifications.filter(c => c.category === 'backend').length})
          </button>
          <button 
            className={`filter-tab-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => handleFilterChange('frontend')}
          >
            React & Frontend ({allCertifications.filter(c => c.category === 'frontend').length})
          </button>
          <button 
            className={`filter-tab-btn ${filter === 'tools' ? 'active' : ''}`}
            onClick={() => handleFilterChange('tools')}
          >
            Tools & Fundamentals ({allCertifications.filter(c => c.category === 'tools').length})
          </button>
        </div>

        {/* Carousel Slider Layout */}
        <div className="carousel-wrapper">
          {/* Active Card Frame */}
          <div className="glass-card active-certification-card">
            <div className="active-card-grid">
              
              {/* Left Side: Visual Interactive Certificate Cover with Lightbox Trigger */}
              <div 
                className="credential-image-column"
                style={{ '--cred-color': filteredCerts[currentIndex]?.color || 'var(--accent-primary)' }}
              >
                <div 
                  className="certificate-image-wrapper"
                  onClick={() => setLightboxOpen(true)}
                >
                  <img 
                    src={filteredCerts[currentIndex]?.image} 
                    alt={filteredCerts[currentIndex]?.title}
                    className="certificate-preview-img"
                  />
                  <div className="image-hover-overlay">
                    <ZoomIn size={24} className="zoom-icon" />
                    <span>Expand Certificate</span>
                  </div>
                </div>
                
                <div className="verified-seal">
                  <ShieldCheck size={16} /> Verified Credential
                </div>
              </div>

              {/* Right Side: Credential Metadata Info */}
              <div className="credential-meta-column">
                <div className="provider-badge-row">
                  <span className="credential-provider">{filteredCerts[currentIndex]?.provider}</span>
                  <span className="cert-cat-pill">
                    <Tag size={12} /> {filteredCerts[currentIndex]?.category === 'backend' ? 'Full Stack & Backend' : filteredCerts[currentIndex]?.category === 'frontend' ? 'React & Frontend' : 'Tools & Office'}
                  </span>
                </div>
                <h3 className="credential-title-text">{filteredCerts[currentIndex]?.title}</h3>
                
                <div className="credential-details">
                  <div className="cred-detail-item">
                    <Calendar size={16} className="detail-icon" />
                    <span>Issued: {filteredCerts[currentIndex]?.date}</span>
                  </div>
                  <div className="cred-detail-item">
                    <ShieldCheck size={16} className="detail-icon" />
                    <span className="cred-id-txt">ID: {filteredCerts[currentIndex]?.credentialId}</span>
                  </div>
                </div>

                {filteredCerts[currentIndex]?.verification !== '#' ? (
                  <a 
                    href={filteredCerts[currentIndex]?.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary cred-verify-btn"
                  >
                    Verify Credential <ExternalLink size={16} />
                  </a>
                ) : (
                  <button className="btn btn-secondary cred-verify-btn" disabled>
                    Certificate Awarded
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls">
            <button className="control-btn prev" onClick={prevSlide} aria-label="Previous Slide">
              <ArrowLeft size={20} />
            </button>
            
            {/* Sliding Dots Indicators */}
            <div className="carousel-dots">
              {filteredCerts.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-indicator ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button className="control-btn next" onClick={nextSlide} aria-label="Next Slide">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* EXPANSION MODAL LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox-overlay no-print" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn" 
              onClick={() => setLightboxOpen(false)}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>
            
            <div className="lightbox-content">
              <img 
                src={filteredCerts[currentIndex]?.image} 
                alt={filteredCerts[currentIndex]?.title}
                className="lightbox-expanded-img"
              />
              <div className="lightbox-caption">
                <h4>{filteredCerts[currentIndex]?.title}</h4>
                <p>Issued by {filteredCerts[currentIndex]?.provider} • {filteredCerts[currentIndex]?.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
