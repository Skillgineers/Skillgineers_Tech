import React from 'react';
import '../styles/AboutSection.css';
import muruganPhoto from '../assets/contact-left.png';
import kalishPhoto from '../assets/contact-right.png'; 

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <h2>🌟 Who We Are</h2>

      <div className="profile">
        <img src={muruganPhoto} alt="Murugan" className="profile-photo" />
        <div className="profile-text">
          <h3>Murugan</h3>
          <p>
            Hi, I’m Murugan, co-founder and core developer at Skillgineers.
            I specialize in creating smart, scalable, and user-friendly solutions for both web and mobile platforms.
            With a deep interest in technology and a strong problem-solving mindset, I help bring client ideas to life with clean code and modern tools.
          </p>
          <p>
            At Skillgineers, I focus on delivering high-quality results — from concept to deployment — ensuring every product we build meets the highest standards in design and functionality.
          </p>
        </div>
      </div>

      <div className="profile reverse">
        <img src={kalishPhoto} alt="Kalish Kalai" className="profile-photo" />
        <div className="profile-text">
          <h3>Kalishwaran</h3>
          <p>
            Hi, I’m Kalishwaran, the creator and lead developer at Skillgineers.
            With a passion for building powerful web and mobile experiences, I started this freelancing journey to help startups, businesses, and creators bring their digital ideas to life.
          </p>
          <p>
            At Skillgineers, I blend creativity with code to deliver elegant, efficient, and user-focused solutions.
            Whether it's a modern website, a scalable app, or a custom-built software module, I personally ensure every project reflects quality, innovation, and reliability.
          </p>
          <p><strong>Let’s build something amazing — together.</strong></p>
        </div>
      </div>

      <div className="features-section">
        <h3>What Makes Us Different</h3>
        <ul className="features-list">
          <li>🎯 Client-First Approach</li>
          <li>⚙️ Full-Stack Development Expertise</li>
          <li>📱 Mobile-Responsive & Modern Design</li>
          <li>🔄 Agile Process with On-Time Delivery</li>
          <li>🌐 Scalable & Future-Ready Technologies</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;