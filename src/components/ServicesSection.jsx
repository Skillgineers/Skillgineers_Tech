import React from 'react';
import '../styles/ServiceSection.css';

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>🌐 Web Development</h3>
          <ul>
            <li>Custom Website Development</li>
            <li>Responsive Design & UI/UX</li>
            <li>E-commerce Development</li>
            <li>CMS (WordPress, Webflow, etc.)</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>📱 Mobile App Development</h3>
          <ul>
            <li>Android & iOS App Development</li>
            <li>Flutter & React Native Development</li>
            <li>Firebase/Supabase Integration</li>
            <li>App Store & Play Store Deployment</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>🧠 Full Stack Solutions</h3>
          <ul>
            <li>MERN / MEAN Stack Development</li>
            <li>API Integration & Backend Services</li>
            <li>Database Design (MySQL, MongoDB, etc.)</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>🔧 Additional Services</h3>
          <ul>
            <li>Website Maintenance & Support</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;