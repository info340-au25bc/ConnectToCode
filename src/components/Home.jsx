import React from 'react';
import { Link } from 'react-router';
import '../css/ConnectToCode.css';

export default function Home() {
  return (
    <div className="page-wrap" id="home-main">
      <section className="hero">
        <div className="hero-inner">
          <h1>Discover real projects. Join real teams.</h1>
          <p className="lead">Browse ongoing developer projects, request to join teams, showcase your experience, and get matched to opportunities.</p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-ghost">Browse Projects</Link>
            <Link to="/profile" className="btn-primary">Your Profile</Link>
          </div>
        </div>
        <div className="hero-media">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=60" alt="Developers collaborating" />
        </div>
      </section>

      <section className="cards">
        <article className="card">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=60" alt="Code on screen" />
          <div className="card-body">
            <h3><Link to="/projects">ConnectToCode (demo project)</Link></h3>
            <p className="muted">Category: Collaboration · Tech: HTML, CSS, JS · Roles open: 2</p>
          </div>
        </article>

        <article className="card">
          <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?w=600&q=60" alt="Design mockups" />
          <div className="card-body">
            <h3><Link to="/profile">UX Showcase</Link></h3>
            <p className="muted">Category: Design · Tech: Figma, CSS · Roles open: 1</p>
          </div>
        </article>
      </section>
    </div>
  );
}