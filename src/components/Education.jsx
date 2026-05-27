import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Sree Venkateswara College of Engineering, North Rajupalem',
      duration: '2024 – 2026',
      grade: 'CGPA: 9.02 (Pursuing)',
      description: 'Focusing on advanced computing methodologies, software architecture, and modern web application development paradigms.',
      icon: <GraduationCap size={20} />
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Krishna Chaitanya Degree and PG College, Nellore (Vikrama Simhapuri University)',
      duration: '2021 – 2024',
      grade: 'CGPA: 9.28',
      description: 'Acquired core computing principles, database management, and object-oriented programming methodologies.',
      icon: <GraduationCap size={20} />
    },
    {
      degree: 'Intermediate – MPC',
      institution: 'Gurthikonda Sreeramulu Junior College, AP Board of Intermediate Education',
      duration: '2019 – 2021',
      grade: 'CGPA: 98.4%',
      description: 'Completed board curriculum with top marks in Mathematics, Physics, and Chemistry.',
      icon: <Award size={20} />
    },
    {
      degree: 'SSC',
      institution: 'Ratnam High School, Nellore (Board of Secondary Education, AP)',
      duration: '2018 – 2019',
      grade: 'GPA: 10.0',
      description: 'Graduated with a perfect GPA, demonstrating a strong foundation in academic subjects.',
      icon: <Award size={20} />
    }
  ];

  return (
    <section id="education" className="section education-section reveal">
      <div className="container">
        <h2 className="section-title">Educational Milestones</h2>
        <p className="section-subtitle">
          My academic foundation in computer science and advanced computing methodologies.
        </p>

        <div className="education-timeline-centered">
          <div className="timeline">
            <div className="timeline-line" />
            {education.map((item, index) => (
              <div key={index} className={`timeline-item reveal delay-${index + 1} slide-right`}>
                <div className="timeline-badge-outer">
                  <div className="timeline-badge-inner">
                    {item.icon}
                  </div>
                </div>
                
                <div className="glass-card timeline-content-card">
                  <div className="timeline-card-header">
                    <h4 className="timeline-degree">{item.degree}</h4>
                    <span className="timeline-grade-badge">{item.grade}</span>
                  </div>
                  
                  <div className="timeline-meta">
                    <span className="meta-item institution">
                      <MapPin size={14} /> {item.institution}
                    </span>
                    <span className="meta-item date">
                      <Calendar size={14} /> {item.duration}
                    </span>
                  </div>
                  
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
