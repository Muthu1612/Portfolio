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
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Technical Skills</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-teal-400">{category}</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
