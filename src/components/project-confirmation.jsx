import React from 'react';
import '../css/project.css';
import '../css/ConnectToCode';

export default function ProjectConfirmation() {
    return(
        <div>
            <main class="page-wrap">
                <div class="confirmation">
                    <h2>Project Submitted Successfully!</h2>
                    <p>Your project post has been uploaded and added to the ConnectToCode platform.</p>
                    <div>
                    <a href="project.html" class="btn-primary">View Other Projects</a>
                    <a href="project-upload.html" class="btn-primary">Add Another Project</a>
                </div>
                </div>
            </main>
        </div>
    );
}