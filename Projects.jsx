// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-12 bg-white">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <ul className="space-y-4">
        <li><strong>Camouflage Army Robot:</strong> Real-time camouflage robot with target acquisition and tactical analytics.</li>
        <li><strong>Genomic EDA:</strong> AI/ML pipeline for genome data exploration.</li>
        <li><strong>Crop Recommendation:</strong> ML-based model for farming suggestions.</li>
        <li><strong>Diabetes Prediction:</strong> Deep learning model for proactive health insights.</li>
        <li><strong>Supermarket Billing System:</strong> Mobile-based smart checkout system.</li>
      </ul>
    </section>
  );
};

export default Projects;
