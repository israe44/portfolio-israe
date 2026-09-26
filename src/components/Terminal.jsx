import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './Terminal.css';

const Terminal = ({ onClose }) => {
  const [history, setHistory] = useState([
    "Welcome to Israe's terminal.",
    'Type "help" to see available commands.',
    ''
  ]);
  const [input, setInput] = useState('');
  const terminalRef = useRef(null);

  const commands = {
    help: [
      'Available commands:',
      'about      - About me and what I enjoy',
      'projects   - Selected work, tools and links',
      'skills     - Technologies and tools',
      'contact    - Email and social profiles',
      'languages  - Programming languages',
      'certificates - Training and certificates',
      'hobbies    - Interests outside coding',
      'clear      - Clear the terminal',
      'exit       - Close the terminal'
    ],
    about: [
      "Hi! I'm Israe Yajib, a Software Engineering Student and UI/UX Designer in Casablanca, Morocco.",
      'I enjoy building things from the ground up: shaping a clear, friendly interface and making the features behind it work.',
      'I like the mix of creative design and logical problem-solving in software development.',
      'Outside of coding, I enjoy UI/UX design as a creative hobby, especially exploring interfaces and user flows.'
    ],
    projects: [
      'Flappy Bird (Java) - A Java version of the classic game.',
      'Code: https://github.com/israe44/FlappyBird-game-java.git',
      'Quote Generator - A React app for inspirational quotes.',
      'Demo: https://israe44.github.io/quote-generator/',
      'Moroccan Online App UI/UX - Figma interface and user-flow prototypes.',
      'GIF Python - A Python project for creating and manipulating GIFs.',
      'More projects: https://github.com/israe44'
    ],
    skills: [
      'Web: HTML, CSS, JavaScript and React',
      'Backend: PHP, Laravel and Python',
      'Data: MySQL and MongoDB',
      'Tools: Git, GitHub, Docker, Figma and n8n',
      'I enjoy combining interface design with practical implementation.'
    ],
    contact: [
      'Email: israe.yab@gmail.com',
      'LinkedIn: https://linkedin.com/in/israeyajib',
      'GitHub: https://github.com/israe44',
      'Fiverr: https://fiverr.com/sarou2y'
    ],
    languages: [
      'Programming languages: JavaScript, Python, PHP and Java.',
      'For the web: HTML and CSS.',
      'Frameworks and libraries: React and Laravel.'
    ],
    certificates: [
      'UX/UI & Generative AI - Orange Digital Center Rabat, 2026.',
      'n8n Automation Workflows - Udemy, 2025.'
    ],
    hobbies: [
      'Gym and fitness.',
      'Reading - books featured here include Atomic Habits, A Thousand Splendid Suns and Candide.',
      'Cooking.',
      'UI/UX design, exploring user flows and learning new technology.'
    ]
  };
  const handleCommand = (value) => {
    const command = value.trim().toLowerCase();
    if (!command) return;

    if (command === 'clear') {
      setHistory([]);
      return;
    }
    if (command === 'exit') {
      onClose?.();
      return;
    }
    if (commands[command]) {
      setHistory((previous) => [...previous, '$ ' + command, ...commands[command], '']);
    } else {
      setHistory((previous) => [...previous, '$ ' + command, 'Command not found. Type "help" for available commands.', '']);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  return createPortal(
    <div className="terminal-page">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <button className="dot red" type="button" onClick={onClose} aria-label="Close terminal" />
            <span>Israe's Terminal</span>
          </div>
          <span className="terminal-title">Terminal</span>
        </div>

        <div className="terminal-body" ref={terminalRef}>
          {history.map((line, index) => (
            <div key={index} className="terminal-line">{line || '\u00a0'}</div>
          ))}
          <div className="terminal-input-line">
            <span aria-hidden="true">$</span>
            <input
              className="terminal-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              aria-label="Terminal command"
              placeholder="Type a command..."
            />
          </div>
        </div>
      </div>
      <div className="terminal-version">Portfolio terminal</div>
    </div>,
    document.body
  );
};

export default Terminal;

