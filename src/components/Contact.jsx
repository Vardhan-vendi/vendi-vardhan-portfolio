import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const contactInfo = [
    {
      title: 'Email Address',
      value: 'vardhanbabuvendi@gmail.com',
      icon: <Mail size={22} />,
      link: 'mailto:vardhanbabuvendi@gmail.com',
      copyValue: 'vardhanbabuvendi@gmail.com',
      type: 'email'
    },
    {
      title: 'Phone Number',
      value: '+91 9100397713',
      icon: <Phone size={22} />,
      link: 'tel:+919100397713',
      copyValue: '+919100397713',
      type: 'phone'
    },
    {
      title: 'Office Location',
      value: 'Buchireddypalem, SPSR Nellore, AP, India',
      icon: <MapPin size={22} />,
      link: 'https://maps.google.com/?q=Buchireddypalem, Nellore',
      copyValue: 'Buchireddypalem, SPSR Nellore, Andhra Pradesh',
      type: 'location'
    }
  ];

  const handleCopy = (value, type) => {
    navigator.clipboard.writeText(value);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section reveal">
      <div className="container">
        <h2 className="section-title">Connect With Me</h2>
        <p className="section-subtitle">
          Have an opportunity, a project concept, or simply want to chat? Reach out through the form below or via direct channels.
        </p>

        <div className="contact-grid">
          {/* Left Side: Contact Cards */}
          <div className="contact-details-column">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="glass-card contact-detail-card">
                <div className="contact-card-icon-wrapper">
                  {info.icon}
                </div>
                
                <div className="contact-card-body">
                  <span className="contact-card-title">{info.title}</span>
                  <a href={info.link} target={info.type === 'location' ? '_blank' : '_self'} rel="noopener noreferrer" className="contact-card-value">
                    {info.value}
                  </a>
                </div>

                {/* Copy to Clipboard Hover Button */}
                <button 
                  className="contact-copy-btn" 
                  onClick={() => handleCopy(info.copyValue, info.type)}
                  aria-label={`Copy ${info.title}`}
                >
                  {copiedType === info.type ? (
                    <Check size={16} className="copied-success-icon" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Right Side: Form */}
          <div className="glass-card contact-form-card">
            {submitSuccess ? (
              <div className="form-success-container">
                <CheckCircle2 size={54} className="success-check-icon animate-bounce" />
                <h3 className="success-title">Message Transmitted!</h3>
                <p className="success-description">
                  Thank you for reaching out. Vardhan will receive your message and respond to your email address shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hello Vardhan, I would like to discuss..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit-btn"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Message'} 
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
