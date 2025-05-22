import Layout from '../layouts/Layout';

const skills = {
  "Data Engineering / Technologies": [
    "Airflow", "Kubernetes", "Kafka", "Docker", "PySpark", "Linux", "DevOps lifecycle/practices", "Blockchain", "Web3"
  ],
  "Programming Languages": [
    "Python", "GoLang", "Java", "React.js", "JavaScript", "SQL", "R"
  ],
  "Frameworks": [
    "Spring Boot", "Django", "FastAPI", "PyTorch", "GraphQL"
  ],
  "Databases": [
    "BigQuery", "Redshift", "Snowflake", "PostgreSQL", "MySQL", "MongoDB", "Redis"
  ],
  "Cloud Platforms": [
    "AWS", "Google Cloud Platform", "Databricks"
  ],
  "Machine Learning": [
    "NLP", "Computer Vision", "SpaCy", "CNN", "RNN", "LLM", "Transformers"
  ]
};

const Skills = () => {
  return (
    <Layout>
      <div className="skills-section">
        <h1 className="skills-title">My Technical Skills</h1>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills-card">
              <h2 className="skills-card-title">{category}</h2>
              <ul className="skills-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
