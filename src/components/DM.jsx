import React, { useState, useRef, useEffect } from "react";
import "../css/ConnectToCode.css";
import "../css/shared.css";
import "../css/messages.css";

export default function DM() {
  const [messages, setMessages] = useState([
    { from: "Helen", text: "Hey Alexis! Are you ready for the next sprint demo?" },
    { from: "You", text: "Almost! Just wrapping up the last UI adjustments." },
    { from: "Helen", text: "Nice! The new hero layout looked amazing btw 😄" }
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);
  // auto scroll 
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: "You", text: input.trim() }]);
    setInput(""); // clear it
  };
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
        <div className="chat-box" ref={chatRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.from === "You" ? "self" : ""}`}>
              <strong>{msg.from}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <form className="chat-input" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type a message..."
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn-primary">Send</button>
        </form>
      </section>
    </div>
  );
}

