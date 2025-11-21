import React from 'react';
import { Link } from "react-router-dom";
import '../css/project.css';

export default function ProjectConfirmation() {
    return(
        <div>
            <main className="page-wrap">
                <div className="confirmation">
                    <h2>Project Submitted Successfully!</h2>
                    <p>Your project post has been uploaded and added to the ConnectToCode platform.</p>
                    <div>
                    <Link to="/projects" className="btn-primary">View Other Projects</Link>
                    <Link to="/project-upload" className="btn-primary">Add Another Project</Link>
                </div>
                </div>
            </main>
        </div>
    );
}