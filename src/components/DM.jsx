import React from "react";
import "../css/ConnectToCode.css";
import "../css/shared.css";
import "../css/messages.css";

export default function DM() {
  return (
    <div className="page-wrap dm-layout">
      <aside className="dm-sidebar">
        <h2>Direct Messages</h2>
        <ul className="dm-list">
          <li className="active">
            <div className="avatar-circle" style={{ background: "#71a8e0" }}>H</div>
            <span>Helen Nguyen</span>
          </li>
          <li>
            <div className="avatar-circle" style={{ background: "#88d4b9" }}>K</div>
            <span>Kenzie Atallah</span>
          </li>
          <li>
            <div className="avatar-circle" style={{ background: "#f3a683" }}>K</div>
            <span>Kassidy Liao</span>
          </li>
        </ul>
      </aside>
      <section className="dm-chat">
        <header className="chat-header">
          <h3>
            Helen Nguyen <span className="role">Frontend Developer</span>
          </h3>
        </header>
        <div className="chat-box">
          <div className="msg"><strong>Helen:</strong> Hey Alexis! Are you ready for the next sprint demo?</div>
          <div className="msg self"><strong>You:</strong> Almost! Just wrapping up the last UI adjustments.</div>
          <div className="msg"><strong>Helen:</strong> Nice! The new hero layout looked amazing btw 😄</div>
        </div>
        <form className="chat-input">
          <input type="text" placeholder="Type a message..." required />
          <button type="submit" className="btn-primary">Send</button>
        </form>
      </section>
    </div>
  );
}
