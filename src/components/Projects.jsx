import React from 'react';
import '../css/project.css';

export default function Projects() {
  return (
    <div className="page-wrap" id="project-main">
      <div className="layout-card">
        <aside className="col-left" aria-labelledby="members-title">
          <h2 id="members-title">Member List</h2>
          <ul className="member-list">
            <li><span className="member-name">Alice Chen</span><span className="member-role">Frontend</span></li>
            <li><span className="member-name">Bob Li</span><span className="member-role">Backend</span></li>
            <li><span className="member-name">Carol Wang</span><span className="member-role">Data</span></li>
            <li><span className="member-name">David Zhang</span><span className="member-role">DevOps</span></li>
          </ul>

          <div className="member-stats">
            <div><strong>Projects:</strong> 4</div>
            <div><strong>Open roles:</strong> 2</div>
          </div>
        </aside>

        <section className="col-right" aria-labelledby="proposal-title">
          <div className="top-area">
            <div className="top-inner">
              <form className="project-filter" action="#" method="get" aria-label="Filter projects">
                <div className="form-row">
                  <label htmlFor="search" className="label">Project keyword</label>
                  <input id="search" name="search" type="text" placeholder="e.g., recommender" />
                </div>
                <div className="form-row">
                  <label htmlFor="level" className="label">Skill level</label>
                  <select id="level" name="level" defaultValue="">
                    <option value="">Any</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button className="btn-ghost" type="reset">Reset</button>
                  <button className="btn-primary" type="submit">Apply</button>
                </div>
              </form>

              <article className="proposal-content" id="proposal-title">
                <h2>Proposed Application</h2>
                <p>Our target audience for this platform includes developers and other creatives who struggle to showcase their hands-on experience in an increasingly competitive space. Through this platform, users can browse ongoing projects, request to join development teams, highlight their skills and interests, receive feedback from other professionals, and be invited to collaborate based on their previous experience.</p>

                <p>More than just a networking tool, this platform empowers users to break free from the barriers of a hypercompetitive industry. It will allow users to:</p>
                <ul>
                  <li>Browse ongoing projects by category, tech stack, or skill level.</li>
                  <li>Request to join project teams or start new projects with open roles.</li>
                  <li>Showcase their skills, past work, and interests on personalized profiles.</li>
                  <li>Receive feedback and endorsements from team members or mentors.</li>
                  <li>Get matched to projects through a recommendation system that considers previous experience and stated interests.</li>
                </ul>

                <section id="features">
                  <h3>Planned Interactive Features</h3>
                  <ul>
                    <li><strong>Feature 1:</strong> Collaboration hub allows users to browse and request to join projects.</li>
                    <li><strong>Feature 2:</strong> Group matching process that connects users based on experience and interests.</li>
                    <li><strong>Feature 3 (small):</strong> Profile showcase presenting various work experiences, diverse skillsets, and interests of the users.</li>
                  </ul>
                  <p><em>Data / API:</em> Primarily user-generated data (profiles, projects, tags). No external API required initially.</p>
                </section>
              </article>
            </div>
          </div>

          <div className="bottom-row">
            <div className="box links-box">
              <h4>Links & Details</h4>
              <ul>
                <li><a href="#">Repository (git)</a></li>
                <li><a href="#">Design Document</a></li>
                <li><a href="#">Onboarding Checklist</a></li>
              </ul>
            </div>

            <div className="box events-box">
              <h4>Upcoming events</h4>
              <ul>
                <li>2025-11-05 — Sprint planning</li>
                <li>2025-11-12 — Demo day</li>
                <li>2025-11-20 — Community meetup</li>
              </ul>
              <div className="cta">
                <button className="btn-primary">Request to Join</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}