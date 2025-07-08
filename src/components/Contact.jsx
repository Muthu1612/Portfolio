import React from 'react';
import { Email, Phone, LocationOn, Schedule } from '@mui/icons-material';
import '../styles/contact.css'; // ✅ Import your custom CSS!

const Contact = () => {
  return (
    <section className="contact-section" style={{ minHeight: '100vh', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Hello there :)</h1>
          <p className="contact-subtitle">
            Got questions, big ideas, or dad jokes? Let's make something cool!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <ContactItem icon={<Email />} title="Email" content="ulaganathanmuthukumaran@gmail.com" />
            <ContactItem icon={<Phone />} title="Phone" content="+1 (352) 709 52 21" />
            <ContactItem icon={<LocationOn />} title="Address" content="Florida, USA" />
            <ContactItem icon={<Schedule />} title="Working hours" content="8 a.m. – 11 p.m." />
          </div>

          <div className="contact-divider"></div>

          <div className="contact-form">
            <h2 className="contact-form-title">Email *</h2>
            <div className="contact-form-fields">
              <InputField placeholder="your@email.com" />
              <InputField label="Name" placeholder="Batman" />
              <InputField label="Message *" placeholder="Let’s connect for ..." multiline rows={4} />
              <button className="contact-button">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="contact-item">
    <div className="contact-icon">{icon}</div>
    <div>
      <h3 className="contact-item-title">{title}</h3>
      <p className="contact-item-text">{content}</p>
    </div>
  </div>
);

const InputField = ({ label, placeholder, multiline = false, rows = 1 }) => (
  <div className="contact-input-field">
    {label && <label className="contact-label">{label}</label>}
    {multiline ? (
      <textarea className="contact-textarea" placeholder={placeholder} rows={rows} />
    ) : (
      <input className="contact-input" type="text" placeholder={placeholder} />
    )}
  </div>
);

export default Contact;
