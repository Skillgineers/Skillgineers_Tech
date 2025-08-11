import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-content">
          <h2>Let’s Discuss Your Next Big Project!</h2>
          <p className="contact-info">
            📩 <strong>Email:</strong> <a href="mailto:skillgineers@gmail.com">skillgineers@gmail.com</a><br />
            📞 <strong>Phone / WhatsApp:</strong> <a href="tel:+918754553545">Kalishwaran</a>, <a href="tel:+919150470528">Murugan</a><br />
            🌍 <strong>Location:</strong> Remote | India-based Team
          </p>

          <a href="mailto:skillgineers@gmail.com" className="contact-button">Let’s Connect</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;