import React, { useState, useEffect, useRef } from "react";
import "./Terminal.css";

const Terminal = () => {

  const [history, setHistory] = useState([
    "Feel free to checkout my terminal!",
    'Type "help" to see available commands.',
    ""
  ]);
  const [input, setInput] = useState("");
  const [minimized, setMinimized] = useState(false);
  const terminalRef = useRef(null);

  const commands = {
    help: [
      "Available commands:",
      "about       → Show who I am",
      "projects    → Show my projects",
      "skills      → Show my skills",
      "contact     → Show contact info",
      "languages   → Show programming languages I know",
      "hobbies     → Show my hobbies/interests",
      "clear       → Clear the terminal",
      "exit        → Close terminal / Go back home",
    ],
    about: [
      "Hi! I'm Israe Yajib.",
      "Full Stack Web Developer 💻",
      "I build fun, creative, Interactive and cute UIs!"
    ],
    projects: [
      "• Portfolio Website",
      "• CRUD Gym Management",
      "• E-commerce Website",
      "• Games & Mini-Apps"
    ],
    skills: [
      "• HTML, CSS, JS, React",
      "• PHP, MySQL",
      "• Python, Java",
      "• Git, GitHub"
    ],
    contact: [
      "Email: israeyajib@gmail.com",
      "LinkedIn: linkedin.com/in/israeyajib",
      "GitHub: github.com/israe44"
    ],
    languages: [
      "• JavaScript (React, Node.js)",
      "• Python",
      "• PHP",
      "• Java"
    ],
    hobbies: [
      "• Gym & fitness 💪",
      "• Learning new tech 💻",
      "• Gaming 🎮",
      "• Web animation & design ✨"
    ]
  };

  const handleCommand = (cmd) => {
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (cmd === "exit") {
      window.location.href = "/";
      return;
    }
    if (commands[cmd]) {
      setHistory(prev => [...prev, `$ ${cmd}`, ...commands[cmd], ""]);
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`, "Command not found.", ""]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, minimized]);

  const handleMinimize = () => setMinimized(!minimized);
  const handleMaximize = () => setMinimized(false);
  const handleClose = () => window.location.href = "/";

  return (
    <div className="terminal-page">
      <div className={`terminal-window ${minimized ? "minimized" : ""}`}>
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="dot red" onClick={handleClose}></span>{" "}
           Israe's Terminal 
          </div>
          <span className="terminal-title">💜</span>
        </div>

        {!minimized && (
          <div className="terminal-body" ref={terminalRef}>
            {history.map((line, i) => (
              <div key={i} className="terminal-line">{line}</div>
            ))}

            <div className="terminal-input-line">
             
              <input
                className="terminal-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                placeholder=  "Type a command..."
              />
            </div>
          </div>
        )}
      </div>
      <div className="terminal-version">v0.4 💜</div>
    </div>
  );
};

export default Terminal;
