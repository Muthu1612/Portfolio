import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/expertise.css';

const capabilities = [
  {
    title: 'Designed & debuged Virtual Private networks',
    details: [
      'Subnetting & route table configuration',
      'Security groups & NACL troubleshooting',
      'VPN & Direct Connect setup',
    ],
  },
  {
    title: 'Built scalable, multi‑AZ networking architectures',
    details: [
      'Cross‑AZ load balancing',
      'High-availability failover design',
      'Infrastructure-as-Code with Terraform',
    ],
  },
  {
    title: 'Centralized log ingestion & analysis (CloudWatch, ELK, etc.)',
    details: [
      'CloudWatch log group & metric filters',
      'ELK stack pipeline configuration',
      'Kibana dashboards & alerts',
    ],
  },
  {
    title: 'Automated network policy enforcement',
    details: [
      'Terraform & AWS Config rules',
      'Custom Lambda compliance checks',
      'GitOps policy deployments',
    ],
  },
];

const BringToTable = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bring-section two-column">
      <div className="bring-wrapper">
        {/* Left Column: Title + Headings */}
        <div className="bring-sidebar">
          <h2 className="bring-title">What I Bring to the Table</h2>
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              className={`bring-tab ${selectedIndex === idx ? 'active' : ''}`}
              initial={false}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setSelectedIndex(idx)}
            >
              {cap.title}
            </motion.div>
          ))}
        </div>

        {/* Right Column: Details */}
        <div className="bring-details">
          <AnimatePresence exitBeforeEnter>
            <motion.ul
              key={selectedIndex}
              className="bring-card-details"
              initial={{ opacity: 0, x: 100 }}     // start off-screen to the right
              animate={{ opacity: 1, x: 0 }}       // move to position
              exit={{ opacity: 0, x: 100 }}        // exit back to the right
              transition={{ duration: 0.6, ease: 'easeInOut' }} // smoother ease
            >
              {capabilities[selectedIndex].details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BringToTable;
