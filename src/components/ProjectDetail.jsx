import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function load() {
      const ref = doc(db, "projects", projectId);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setProject(snap.data());
      }
    }
    load();
  }, [projectId]);

  if (!project) return <p>Loading project details...</p>;

  return (
    <div className="page-wrap">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <h3>Team Members</h3>
      <ul>
        {(project.members || []).map((m, i) => (
          <li key={i}>{m.name} — {m.role}</li>
        ))}
      </ul>
    </div>
  );
}
