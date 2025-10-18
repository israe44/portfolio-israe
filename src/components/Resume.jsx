import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume de moi.pdf';
    link.download = 'Resume de moi.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume page">
      <div className="container">
        <h1 className="page-title">My Resume</h1>
        <p className="page-subtitle">
          Full Stack Developer passionate about creating innovative web solutions
        </p>
        <div className="download-resume">
          <button className="download-btn" onClick={handleDownload}>
            <FaDownload />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;