import React from 'react';

export default function MemberList({ members = [] }) {
  return (
    <ul className="member-list">
      {members.map((m, i) => (
        <li key={i}>
          <span className="member-name">{m.name}</span>
          <span className="member-role">{m.role}</span>
        </li>
      ))}
    </ul>
  );
}