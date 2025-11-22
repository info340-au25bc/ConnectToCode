import React from "react";
import "../css/ConnectToCode.css";

export default function Profile() {
  return (
    <main className="page-wrap">
      <section className="hero">
        <div className="hero-inner">
          <h1>Alexis Lucatero</h1>
          <p className="lead">Frontend Developer · UX Enthusiast · Data & Design</p>
          <div className="hero-actions">
            <a href="/settings" className="btn-ghost">Edit Profile</a>
            <a href="/dm" className="btn-primary">Message</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="/img/profilepic.jpg" alt="Alexis Profile" />
        </div>
      </section>
      <section className="cards">
        <article className="card">
          <img src="/img/groupworking.jpg" alt="Project mockup" />
          <div className="card-body">
            <h3>Frontend Collaboration Portal</h3>
            <p className="muted">React · Node.js · UX Design</p>
          </div>
        </article>

        <article className="card">
          <img src="/img/databoard.jpg" alt="Dashboard" />
          <div className="card-body">
            <h3>Data Dashboard Prototype</h3>
            <p className="muted">Python · Flask · Figma</p>
          </div>
        </article>
      </section>

    </main>
  );
}
