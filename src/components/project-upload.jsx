import React from 'react';
import '../css/project.css';
import '../css/ConnectToCode.css';

export default function ProjectUpload() {
return(
    <div className="page-wrap">
        <div className="layout-card">

            <form action="#" method="post" className="top-area upload">
                <section className="col-left">
                    <h2>Add Project Members</h2>
                    <p>Enter the names and roles of your team members.</p>

                    <div className="form-row">
                        <label className="label">Member 1</label>
                        <input name="member1_name" type="text" placeholder="Full name" style="margin-bottom: 8px;"/>
                        <input name="member1_role" type="text" placeholder="Role (e.g., Frontend)"/>
                    </div>

                    <div className="form-row">
                        <label className="label">Member 2</label>
                        <input name="member2_name" type="text" placeholder="Full name" style="margin-bottom: 8px;"/>
                        <input name="member2_role" type="text" placeholder="Role (e.g., Backend)"/>
                    </div>


                    <div className="form-row">
                        <label className="label">Member 3</label>
                        <input name="member3_name" type="text" placeholder="Full name" style="margin-bottom: 8px;"/>
                        <input name="member3_role" type="text" placeholder="Role (e.g., UI/UX)"/>
                    </div>

                    <div className="form-row">
                        <label class="label">Member 4</label>
                        <input name="member4_name" type="text" placeholder="Full name" style="margin-bottom: 8px;"/>
                        <input name="member4_role" type="text" placeholder="Role (e.g., Data)"/>
                    </div>
                </section>

                <section class="col-right upload">
                    <h2>Create a New Project Post</h2>
                    <div class="form-row">
                        <label class="label" for="title">Project Title</label>
                        <input id="title" name="title" type="text" placeholder="Enter your project title" required/>
                    </div>
                    <div class="form-row">
                        <label class="label" for="proposal">Project Proposal</label>
                        <textarea id="proposal" name="description" rows="6" placeholder="Describe your project" required></textarea>
                    </div>

                    <div class="form-row">
                        <label class="label" for="work">Work</label>
                        <input id="work" name="work" type="text" placeholder="e.g., AI, Web Development, UX"/>
                    </div>

                    <div class="form-row">
                        <label class="label" for="level">Skill Level</label>
                            <select id="level" name="level">
                                <option value="">Select level</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                    </div>

                    <div class="form-row">
                        <label class="label" for="link">Repository Link</label>
                        <input id="link" name="link" type="url" placeholder="https://github.com/yourproject"/>
                    </div>
                        <div class="form-actions">
                        <a href="project-confirmation.html" class="btn-primary" type="submit">Submit Project</a>
                        <a class="btn-ghost" type="reset">Clear Form</a>
                    </div>
                </section>
            </form>
        </div>
  </div>
  );
}