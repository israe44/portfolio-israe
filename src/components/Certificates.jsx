import React from 'react';
import { FaAward, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'UI | UX with Figma and Adobe XD',
      issuer: 'Udemy',
      date: '2025',
      image: '/figma.jpg',
      skills: ['Interface Design'],
      verificationUrl: 'https://www.udemy.com/certificate/UC-94b85a13-5240-4a2b-a534-5481e57b1027/'
    },
    {
      id: 2,
      title: 'n8n Automation Workflows',
      issuer: 'Udemy',
      date: '2025',
      image: '/n8n.jpg',
      skills: ['Automation', 'Workflow Design'],
      verificationUrl: 'https://www.udemy.com/share/10dnvZ3@KdGmJi84emDg6FlgjUk9kqC1GVI2KzlxPKf-5zFMNyDrVXpDSxM05b6I3PT8ILrjew==/'
    }
  ];

  const handleVerify = (certificate) => {
    window.open(certificate.verificationUrl, '_blank');
  };

  const handleDownload = (certificate) => {
    const link = document.createElement('a');
    link.href = certificate.image;
    link.download = `${certificate.title}.jpg`;
    link.click();
  };

  return (
    <div className="certificates page">
      <div className="container">
        <h1 className="page-title">Certificates</h1>
        <p className="page-subtitle">Professional certifications and achievements</p>

        <div className="certificates-stats">
          <div className="certificate-stat">
            <FaAward className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">{certificates.length}</span>
              <span className="stat-label">Certificates</span>
            </div>
          </div>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-card card">
              <div className="certificate-image">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-img"
                />
              </div>

              <div className="certificate-content">
                <div className="certificate-header">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <span className="certificate-date">{certificate.date}</span>
                </div>

                <div className="certificate-issuer">
                  <FaAward className="issuer-icon" />
                  <span>{certificate.issuer}</span>
                </div>

                <div className="certificate-skills">
                  {certificate.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>

                <div className="certificate-actions">
                  <button
                    className="btn btn-primary verify-btn"
                    onClick={() => handleVerify(certificate)}
                  >
                    <FaExternalLinkAlt /> Verify
                  </button>
                  <button
                    className="btn btn-outline"
                    onClick={() => handleDownload(certificate)}
                  >
                    <FaDownload /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Certificates;
