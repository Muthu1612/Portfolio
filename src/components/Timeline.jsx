import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/timeline.css';

const experiences = [
  {
    year: '2022 - 2024',
    title: 'Software Developer - Data Engineer',
    company: 'Roni Analytics | PANDA Terminal',
    details: [
      'Established new AWS architecture with EMR, Serverless, EC2, Databricks on GCP, SCIM provisioning.',
      'Optimized Airflow workflows on AWS, reducing processing time by 85%.',
      'Developed ETL workflows with AWS Glue and Spark, processing 10TB+ daily.',
      'Managed Postgres & MySQL with 40% improved query performance.',
      'Deployed multiple LLM Streamlit apps for interactive analytics.',
      'Designed AWS auto-alerts with Lambda, CloudTrail, CloudWatch.',
      'Built scalable Serverless REST APIs with Lambda, API Gateway, Node.js.'
    ],
    projects: [
      'Feedback-Driven Resource Controller for Kubernetes Clusters',
      'Voice-based Virtual Assistant using Deep Learning'
    ]
  },
  {
    year: '2022',
    title: 'Bachelor of Technology in Computer Science',
    company: 'B.S. Abdur Rahman Crescent Institute of Science and Technology',
    details: [
      'Graduated with 3.46 GPA.',
      'Built Voice-based Virtual Assistant with NLP and Deep Learning.',
      'Published: Enhanced Human Action Recognition using CNN LSTM.'
    ],
    projects: [
      'Voice-based Virtual Assistant',
      'Enhanced Human Action Recognition (Publication)'
    ]
  },
  {
    year: '2026',
    title: 'Master of Science in Computer Science',
    company: 'University of Florida',
    details: [
      'Pursuing M.Sc. in Computer Science with 4 GPA.',
      'Developed GatorCan: Scalable E-Learning Platform.',
      'Designed Feedback-Driven Controller for Kubernetes Clusters.'
    ],
    projects: [
      'GatorCan: E-Learning Platform',
      'Feedback-Driven Resource Controller'
    ]
  }
];

const ExperienceTimeline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="timeline-section">
      <motion.h2
        className="timeline-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Journey
      </motion.h2>

      <div className="timeline-container">
        {/* Left: Timeline years */}
        <div className="timeline-sidebar">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`timeline-tab ${selectedIndex === idx ? 'active' : ''}`}
              initial={false}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedIndex(idx)}
            >
              <h3 className="timeline-year">{exp.year}</h3>
              <p className="timeline-company">{exp.company}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: Details */}
        <div className="timeline-details">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              className="timeline-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="timeline-title">{experiences[selectedIndex].title}</h4>
              <ul className="timeline-description">
                {experiences[selectedIndex].details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              <div className="timeline-projects">
                <h5>Related Projects</h5>
                <div className="project-list">
                  {experiences[selectedIndex].projects.map((proj, i) => (
                    <motion.span
                      key={i}
                      className="project-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {proj}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
