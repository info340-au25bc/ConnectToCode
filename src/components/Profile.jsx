import React from "react";
import { Link } from 'react-router-dom';
import "../css/ConnectToCode.css";

export default function Profile() {
  const userData = {
    personalInfo: {
      name: "Alexis Lucatero",
      title: "Frontend Developer · UX Enthusiast · Data & Design",
      location: "Seattle, WA",
      joinDate: "November 2025"
    },
    skills: [
      { name: "React", level: " - Intermediate" },
      { name: "JavaScript", level: " - Intermediate" },
      { name: "HTML/CSS", level: " - Intermediate" },
      { name: "Node.js", level: " - Intermediate" },
      { name: "Python", level: " - Intermediate" },
      { name: "Figma", level: " - Intermediate" },
      { name: "UI/UX Design", level: " - Intermediate" }
    ],
    interests: ["Frontend Development, ", "Data Visualization, ", "UX Research"],
    projects: [
      {
        id: 1,
        title: "Frontend Collaboration Portal",
        technologies: ["React, ", "Node.js, ", "UX Design"],
        description: "A platform for developers...",
        image: "/project-draft/img/groupworking.jpg",
        status: "Active"
      }, 
      {
        id: 2,
        title: "Data Dashboard Prototype",
        technologies: ["Python, ", "Flask, ", "Figma"],
        description: "Interactive dashboard for data...",
        image: "/project-draft/img/databoard.jpg",
        status: "Completed"
      }
    ]
  }

  return (
    <main className="page-wrap profile-page">
      <section className="hero">
        <div className="hero-inner profile-hero-content">
          <div className="profile-text-content">
            <h1>{userData.personalInfo.name}</h1>
            <p className="lead">{userData.personalInfo.title}</p>
            <div className="profile-meta">
              <span>{userData.personalInfo.location}</span>
              <span>Member since {userData.personalInfo.joinDate}</span>
            </div>
            <div className="hero-actions">
              <Link to="/settings" className="btn-ghost">Edit Profile</Link>
              <Link to="/dm" className="btn-primary">Message</Link>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <img src="/project-draft/img/profilepic.jpg" alt={userData.personalInfo.name} />
        </div>
      </section>

      <section className="profile-section">
        <h2>Skills & Interests</h2>
        <div className="skills-interests-grid">
          <div className="skills-container">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {userData.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className={`skill-level ${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="interests-container">
            <h3>Areas of Interest</h3>
            <div className="interests-list">
              {userData.interests.map((interest, index) => (
                <span key={index} className="interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <Link to="/project-upload" className="btn-primary">Add Project</Link>
        </div>
        <div className="projects-grid">
          {userData.projects.map(project => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );

  // return (
  //   <main className="page-wrap">
  //     <section className="hero">
  //       <div className="hero-inner">
  //         <h1>{userInfo.personalInfo.name}</h1>
  //         <p className="lead">{userInfo.personalInfo.name}</p>
  //         <div className="hero-actions">
  //           <a href="/settings" className="btn-ghost">Edit Profile</a>
  //           <a href="/dm" className="btn-primary">Message</a>
  //         </div>
  //       </div>
  //       <div className="hero-media">
  //         <img src="/img/profilepic.jpg" alt="Alexis Profile" />
  //       </div>
  //     </section>
  //     <section className="cards">
  //       <article className="card">
  //         <img src="/img/groupworking.jpg" alt="Project mockup" />
  //         <div className="card-body">
  //           <h3>Frontend Collaboration Portal</h3>
  //           <p className="muted">React · Node.js · UX Design</p>
  //         </div>
  //       </article>

  //       <article className="card">
  //         <img src="/img/databoard.jpg" alt="Dashboard" />
  //         <div className="card-body">
  //           <h3>Data Dashboard Prototype</h3>
  //           <p className="muted">Python · Flask · Figma</p>
  //         </div>
  //       </article>
  //     </section>

  //   </main>
  // );
}
