// src/pages/Skills.jsx
import Layout from '../layouts/Layout';
import { motion } from 'framer-motion';

const skills = {
  "Data Engineering / Technologies": [
    "Airflow", "Kubernetes", "Kafka", "Docker",
    "PySpark", "Linux", "DevOps lifecycle/practices",
    "Blockchain", "Web3"
  ],
  "Programming Languages": [
    "Python", "GoLang", "Java", "React.js",
    "JavaScript", "SQL", "R"
  ],
  "Frameworks": [
    "Spring Boot", "Django", "FastAPI",
    "PyTorch", "GraphQL"
  ],
  "Databases": [
    "BigQuery", "Redshift", "Snowflake",
    "PostgreSQL", "MySQL", "MongoDB", "Redis"
  ],
  "Cloud Platforms": [
    "AWS", "Google Cloud Platform", "Databricks"
  ],
  "Machine Learning": [
    "NLP", "Computer Vision", "SpaCy",
    "CNN", "RNN", "LLM", "Transformers"
  ]
};

const cardVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: { opacity: 1, y: 0 }
};

const Skills = () => (
  <Layout>
    <div className="skills-section">
      <motion.h1
        className="skills-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Technical Skills
      </motion.h1>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            className="skills-card"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="skills-card-title">{category}</h2>
            <ul className="skills-list">
              {items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Skills;
