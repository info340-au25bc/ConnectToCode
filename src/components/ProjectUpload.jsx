import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/project.css';

/* to store member info */
function MemberInfo ({ index, member, onChange }) {
    return (
        <div className="form-row">
            <label className="label">Member {index + 1} </label>
            <input type="text" placeholder="Full Name" name="name" value={member.name} onChange={(e) => onChange(index, "name", e.target.value)} style={{marginBottom: '8px'}}/>
            <input type="text" placeholder="Role (e.g. Frontend)" name="role" value={member.role} onChange={(e) => onChange(index, "role", e.target.value)}/>
        </div>
    );
}

/*primary*/
export default function ProjectUpload() {
    const [members, setMembers] = useState([{name: "", role: ""}]);
    const handleMemberChange = (index, field, value) => {
        const updated = [...members];
        updated[index][field] = value;
        setMembers(updated);
    };
    const addMember = () => {
        setMembers([...members, { name:"", role: "" }]);
    };
    const resetForm = () => {
        setMembers([{ name: "", role: "" }]);
    };


return(
    <div className="page-wrap">
        <div className="layout-card">
            <form action="#" method="post" className="top-area upload">
                <section className="col-left">
                    <h2>Add Project Members</h2>
                    <p>Enter the names and roles of your team members.</p>
                    {members.map((member, i) => (
                    <MemberInfo key={i} index={i} member={member} onChange={handleMemberChange}/>
                    ))}
                    <button type="button" onClick={addMember} className="btn-ghost" style={{ marginTop: "10px" }}>
                        + Add Member </button>
                </section>

                <section className="col-right upload">
                    <h2>Create a New Project Post</h2>
                    <div className="form-row">
                        <label className="label" for="title">Project Title</label>
                        <input id="title" name="title" type="text" placeholder="Enter your project title" required/>
                    </div>
                    <div className="form-row">
                        <label className="label" for="proposal">Project Proposal</label>
                        <textarea id="proposal" name="description" rows="6" placeholder="Describe your project" required></textarea>
                    </div>

                    <div className="form-row">
                        <label className="label" for="work">Work</label>
                        <input id="work" name="work" type="text" placeholder="e.g., AI, Web Development, UX"/>
                    </div>

                    <div className="form-row">
                        <label className="label" for="level">Skill Level</label>
                            <select id="level" name="level">
                                <option value="">Select level</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                    </div>

                    <div className="form-row">
                        <label className="label" for="link">Repository Link</label>
                        <input id="link" name="link" type="url" placeholder="https://github.com/yourproject"/>
                    </div>
                        <div className="form-actions">
                        <Link to="/project-confirmation" className="btn-primary">Submit Project</Link>
                        <button  type="reset" className="btn-ghost">Clear Form</button>
                    </div>
                </section>
            </form>
        </div>
  </div>
  );
}