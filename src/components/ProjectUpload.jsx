import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../css/project.css';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

function MemberInfo({ index, member, onChange }) {
  return (
    <div className="form-row">
      <label className="label">Member {index + 1}</label>
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        value={member.name}
        onChange={(e) => onChange(index, 'name', e.target.value)}
        style={{ marginBottom: '8px' }}
      />
      <input
        type="text"
        placeholder="Role (e.g. Frontend)"
        name="role"
        value={member.role}
        onChange={(e) => onChange(index, 'role', e.target.value)}
      />
    </div>
  );
}

export default function ProjectUpload() {
  const [members, setMembers] = useState([{ name: '', role: '' }]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [work, setWork] = useState('');
  const [level, setLevel] = useState('');
  const [link, setLink] = useState('');
  const navigate = useNavigate();

  const handleMemberChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };
  const addMember = () => setMembers([...members, { name: '', role: '' }]);
  const resetForm = () => {
    setMembers([{ name: '', role: '' }]);
    setTitle(''); setDescription(''); setWork(''); setLevel(''); setLink('');
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('handleSubmit called', { title, description, work, level, link, members });

  if (!title.trim() || !description.trim()) {
    alert('Please provide a title and description.');
    console.log('Validation failed: missing title or description');
    return;
  }

  const project = {
    title: title.trim(),
    category: work,
    description: description.trim(),
    features: [],
    links: link ? [link] : [],
    events: [],
    members: members.filter(m => m.name.trim())
  };

  try {
    console.log('Attempting to addDoc to Firestore with:', project);
    const res = await addDoc(collection(db, 'projects'), project);
    console.log('addDoc result:', res);
    alert('Project submitted successfully! (saved to Firestore) id: ' + (res.id || '<no id>'));
    resetForm();
    // debug: show navigate call
    console.log('Navigating to /project-confirmation');
    navigate('/project-confirmation');
  } catch (err) {
    console.error('Failed to submit project:', err);
    alert('Submission failed. Error: ' + (err.message || err));
  }
};

  return (
    <div className="page-wrap">
      <div className="layout-card" style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit} className="top-area upload">
          <section className="col-left">
            <h2>Add Project Members</h2>
            <p>Enter the names and roles of your team members.</p >
            {members.map((member, i) => (
              <MemberInfo key={i} index={i} member={member} onChange={handleMemberChange} />
            ))}
            <button type="button" onClick={addMember} className="btn-ghost" style={{ marginTop: '10px' }}>
              + Add Member
            </button>
          </section>

          <section className="col-right upload">
            <h2>Create a New Project Post</h2>
            <div className="form-row">
              <label className="label" htmlFor="title">Project Title</label>
              <input id="title" name="title" type="text" placeholder="Enter your project title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className="form-row">
              <label className="label" htmlFor="proposal">Project Proposal</label>
              <textarea id="proposal" name="description" rows="6" placeholder="Describe your project" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>

            <div className="form-row">
              <label className="label" htmlFor="work">Work</label>
              <input id="work" name="work" type="text" placeholder="e.g., AI, Web Development, UX" value={work} onChange={(e) => setWork(e.target.value)} />
            </div>

            <div className="form-row">
              <label className="label" htmlFor="level">Skill Level</label>
              <select id="level" name="level" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="">Select level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="form-row">
              <label className="label" htmlFor="link">Repository Link</label>
              <input id="link" name="link" type="url" placeholder="https://github.com/yourproject" value={link} onChange={(e) => setLink(e.target.value)} />
            </div>

            <div className="form-actions">
                          <button type="submit" className="btn-primary">Submit Project</button>
                         

              <button type="button" onClick={resetForm} className="btn-ghost">Clear Form</button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}