import React, { useState } from 'react';
import '../css/project.css';

const INITIAL_DATA = [
  {
    id: 1,
    title: "Proposed Application: DevConnect",
    category: "Social / Platform",
    description: "Our target audience for this platform includes developers and other creatives who struggle to showcase their hands-on experience. Through this platform, users can browse ongoing projects and request to join development teams.",
    features: [
      "Collaboration hub allows users to browse projects.",
      "Group matching process based on interests.",
      "Profile showcase presenting various work experiences."
    ],
    links: ["Repository (git)", "Design Doc", "Onboarding"],
    events: [
      { date: "2025-11-05", name: "Sprint planning" },
      { date: "2025-11-12", name: "Demo day" }
    ],
    members: [
      { name: "Alice Chen", role: "Frontend" },
      { name: "Bob Li", role: "Backend" },
      { name: "Carol Wang", role: "Data" },
      { name: "David Zhang", role: "DevOps" }
    ]
  },
  {
    id: 2,
    title: "AI Chatbot Assistant",
    category: "Artificial Intelligence",
    description: "A customized LLM wrapper that helps junior developers debug code in real-time. It integrates with VS Code and provides context-aware suggestions based on the project structure.",
    features: [
      "Real-time syntax analysis.",
      "Context-aware debugging suggestions.",
      "Integration with popular IDEs."
    ],
    links: ["Model Weights", "API Docs", "Testing Suite"],
    events: [
      { date: "2025-12-01", name: "Model Training" },
      { date: "2025-12-10", name: "Beta Launch" }
    ],
    members: [
      { name: "Sarah Smith", role: "ML Engineer" },
      { name: "Mike Johnson", role: "Backend" }
    ]
  },
  {
    id: 3,
    title: "Eco-Tracker App",
    category: "Mobile / IoT",
    description: "An IoT-based mobile application that tracks household energy consumption. It connects to smart meters and visualizes data to help users save on electricity bills.",
    features: [
      "Bluetooth connection to smart meters.",
      "Data visualization charts.",
      "Monthly savings report generation."
    ],
    links: ["Figma Designs", "Mobile Repo", "Hardware Spec"],
    events: [
      { date: "2025-11-20", name: "Hardware Testing" },
      { date: "2025-11-25", name: "UI Polish" }
    ],
    members: [
      { name: "Emily Davis", role: "Mobile Dev" },
      { name: "Tom Wilson", role: "Product Manager" },
      { name: "Jenny Lee", role: "UI Designer" }
    ]
  }
];

export default function Projects() {
  const [projects, setProjects] = useState(INITIAL_DATA);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('Frontend'); // 默认值

  const currentProject = projects[activeIndex];

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    if (!newMemberName.trim()) return;

    const newMember = { name: newMemberName, role: newMemberRole };

    const updatedProjects = [...projects];
    updatedProjects[activeIndex].members.push(newMember);

    setProjects(updatedProjects);
    setNewMemberName(''); 
    alert(`Welcome aboard! ${newMember.name} has joined the ${currentProject.category} team.`);
  };

  return (
    <div className="page-wrap" id="project-main">
      <div className="layout-card">
        
        <aside className="col-left" aria-labelledby="members-title">
          <h2 id="members-title">Member List</h2>
          <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '10px' }}>
            Team for: {currentProject.category}
          </p >
          
          <ul className="member-list">
            {currentProject.members.map((member, index) => (
              <li key={index}>
                <span className="member-name">{member.name}</span>
                <span className="member-role">{member.role}</span>
              </li>
            ))}
          </ul>

          <div className="member-stats">
            <div><strong>Total Members:</strong> {currentProject.members.length}</div>
            <div><strong>Status:</strong> Active</div>
          </div>
        </aside>

        <section className="col-right" aria-labelledby="proposal-title">
          <div className="top-area">
            <div className="top-inner">
              
              <div className="project-filter" style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                
                <div className="form-row">
                  <label htmlFor="project-select" className="label">Select Project to View</label>
                  <select 
                    id="project-select" 
                    value={activeIndex} 
                    onChange={(e) => setActiveIndex(Number(e.target.value))}
                  >
                    {projects.map((p, idx) => (
                      <option key={p.id} value={idx}>
                        {p.title} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>

                <form onSubmit={handleJoinSubmit} style={{ marginTop: '12px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '800', marginBottom: '8px' }}>Join this Team</h4>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <div className="form-row" style={{ flex: 1 }}>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-row" style={{ width: '140px' }}>
                      <select 
                        value={newMemberRole} 
                        onChange={(e) => setNewMemberRole(e.target.value)}
                      >
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Designer</option>
                        <option>DevOps</option>
                        <option>Product</option>
                      </select>
                    </div>
                    <button className="btn-primary" type="submit">Join</button>
                  </div>
                </form>
              </div>

              <article className="proposal-content" id="proposal-title">
                <h2>{currentProject.title}</h2>
                <p>{currentProject.description}</p >

                <section id="features">
                  <h3>Key Features</h3>
                  <ul>
                    {currentProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </section>
              </article>
            </div>
          </div>

          <div className="bottom-row">
            <div className="box links-box">
              <h4>Links & Resources</h4>
              <ul>
                {currentProject.links.map((link, i) => (
                  <li key={i}><a href=" ">{link}</a ></li>
                ))}
              </ul>
            </div>

            <div className="box events-box">
              <h4>Upcoming events</h4>
              <ul>
                {currentProject.events.map((evt, i) => (
                  <li key={i}>{evt.date} — {evt.name}</li>
                ))}
              </ul>
              <div className="cta">
                <button className="btn-primary" onClick={() => alert("Check calendar for details!")}>
                  Sync Calendar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}