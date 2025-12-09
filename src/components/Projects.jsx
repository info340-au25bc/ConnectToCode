import React, { useState, useEffect } from 'react';
import '../css/project.css';
import { db } from '../services/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import MemberList from './MemberList';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('Frontend');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate= useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);
    const colRef = collection(db, 'projects');

    // subscribe to realtime updates
    const unsub = onSnapshot(colRef, (snapshot) => {
      try {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        console.log('Projects onSnapshot — got docs:', list.length);
        setProjects(list);

        // keep activeIndex in bounds
        setActiveIndex(prev => {
          if (list.length === 0) return 0;
          return Math.min(prev, list.length - 1);
        });

        setLoading(false);
      } catch (e) {
        console.error('onSnapshot processing error:', e);
        setError('Failed to process project data.');
        setLoading(false);
      }
    }, (err) => {
      console.error('onSnapshot error:', err);
      setError('Failed to load projects: ' + (err.message || err));
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // helper to find current project safely
  const currentProject = projects[activeIndex] || {
    id: null,
    title: 'No project selected',
    category: '',
    description: '',
    features: [],
    links: [],
    events: [],
    members: []
  };

  if (loading) return <div className="page-wrap">Loading projects...</div>;

  return (
    <div className="page-wrap" id="project-main">
      <div className="layout-card">
        <aside className="col-left" aria-labelledby="members-title">
          <h2 id="members-title">Member List</h2>
          <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '10px' }}>
            Team for: {currentProject.category || '(none)'}
          </p >

          {error ? (
            <div style={{ color: 'red', padding: 8 }}>{error}</div>
          ) : (
            <MemberList members={currentProject.members || []} />
          )}

          <div className="member-stats">
            <div><strong>Total Members:</strong> {(currentProject.members || []).length}</div>
            <div><strong>Status:</strong> Active</div>
          </div>
        </aside>

        <section className="col-right" aria-labelledby="proposal-title">
          <div className="top-area">
            <div className="top-inner">
              <button
                className="btn-primary"
                style={{marginBottom: '10px'}}
                onClick={() => navigate("/project-upload")}>
                Upload New Project
              </button>
              <div
                className="project-filter"
                style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}
              >
                <div className="form-row">
                  <label htmlFor="project-select" className="label">Select Project to View</label>
                  <select
                    id="project-select"
                    value={activeIndex}
                    onChange={(e) => setActiveIndex(Number(e.target.value))}
                  >
                    {projects.length === 0 ? (
                      <option value={0}>(no projects)</option>
                    ) : (
                      projects.map((p, idx) => (
                        <option key={p.id || idx} value={idx}>
                          {p.title} {p.category ? `(${p.category})` : ''}
                        </option>
                      ))
                    )}
                  </select>
                </div>


                <form onSubmit={(e) => { e.preventDefault(); /* join handled below in a separate UI if needed */ }} style={{ marginTop: '12px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '800', marginBottom: '8px' }}>Join this Team (use right column)</h4>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <div className="form-row" style={{ flex: 1 }}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                      />
                    </div>
                    <div className="form-row" style={{ width: '140px' }}>
                      <select value={newMemberRole} onChange={(e) => setNewMemberRole(e.target.value)}>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Designer</option>
                        <option>DevOps</option>
                        <option>Product</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={async () => {
                        // run join here so it's clearer for debugging
                        if (!newMemberName.trim()) { alert('Please enter your name'); return; }
                        const newMember = { name: newMemberName.trim(), role: newMemberRole };
                        // local optimistic update:
                        setProjects(prev => prev.map((p, idx) => idx === activeIndex ? { ...p, members: [...(p.members || []), newMember] } : p));
                        setNewMemberName('');
                        // persist to Firestore if doc id exists
                        try {
                          if (currentProject && currentProject.id) {
                            // import updateDoc & arrayUnion on top if not present
                            const { doc, updateDoc, arrayUnion } = await import('firebase/firestore');
                            const projectDoc = doc(db, 'projects', currentProject.id);
                            await updateDoc(projectDoc, { members: arrayUnion(newMember) });
                            console.log('member persisted to Firestore:', newMember);
                            alert('Joined and saved to Firestore');
                          } else {
                            console.warn('currentProject has no Firestore id; not persisted.');
                            alert('Joined locally (not saved to Firestore).');
                          }
                        } catch (err) {
                          console.error('Failed to persist member:', err);
                          alert('Joined locally but failed to save to Firestore (' + (err.message || err) + ')');
                        }
                      }}
                    >
                      Join
                    </button>
                  </div>
                </form>
              </div>

              <article className="proposal-content" id="proposal-title">
                <h2>{currentProject.title}</h2>
                {/* insert change */}
                <button
                  className="btn-primary"
                  style={{ marginBottom: "16px" }}
                  onClick={() => {
                    if (currentProject.id) {
                      navigate(`/projects/${currentProject.id}`);
                    } else {
                      alert("No project selected");
                    }
                  }}
                >
                  View Full Project →
                </button>
                {/*end of route */}
                <p>{currentProject.description}</p >
                <section id="features">
                  <h3>Key Features</h3>
                  <ul>
                    {(currentProject.features || []).map((feature, i) => (
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
                {(currentProject.links || []).map((link, i) => (
                  <li key={i}><a href=" ">{link}</a ></li>
                ))}
              </ul>
            </div>

            <div className="box events-box">
              <h4>Upcoming events</h4>
              <ul>
                {(currentProject.events || []).map((evt, i) => (
                  <li key={i}>{evt.date} — {evt.name}</li>
                ))}
              </ul>
              <div className="cta">
                <button className="btn-primary" onClick={() => alert('Check calendar for details!')}>Sync Calendar</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}