import React from 'react';
import '../styles/MainSection.css';

const projects = [
  {
    title: '📝 To-Do List App',
    description: 'A beautifully designed task management app built using Flutter and Dart. It features smooth animations, offline access, and intuitive UI to help users organize their daily routines efficiently.',
    link: 'https://github.com/Skillgineers/Todo_List_App.git'
  },
  {
    title: '🏢 Leave Management System',
    description: 'A full-stack solution developed using the MERN stack. Employees can apply for leave and view balances. Admins manage approvals with role-based access.',
    link: 'https://github.com/Skillgineers/Leave_Management_System.git'
  },
  {
    title: '🔐 User Authentication System',
    description: 'A secure and scalable module using the MERN stack. Features include registration, login, JWT-based token management, and password hashing.',
    link: 'https://github.com/Skillgineers/User-Authentication-System.git'
  },
  {
    title: '📂 File Upload & Download System',
    description: 'Built using Java Spring Boot for the backend. Allows users to upload, store, and securely download files with validations and download tracking.',
    link: 'https://github.com/Skillgineers/file-upload-download-system.git'
  },
  {
    title: '🧠 Stress Detection System',
    description: 'A smart wearable-based system using real-time sensor data and machine learning to detect and visualize stress levels.',
    link: 'https://github.com/Skillgineers/Stress_Detection_System.git'
  }
];

const PortfolioSection = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Our Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a 
            className="project-card" 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
