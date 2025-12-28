const experiences = [
  {
    company: "YBI Foundation",
    role: "Data Science and AIML Engineer Intern",
    period: "Oct 2024 - Jan 2025",
    points: [
      "Built a handwritten digit classification system using CNN, achieving 87-92% accuracy.",
      "Developed bank customer churn prediction models using feature engineering and EDA."
    ]
  },
  {
    company: "Nexus Info",
    role: "AIML Engineer Intern",
    period: "Dec 2023 - Mar 2024",
    points: [
      "Designed a real-time chatbot for college admissions using NLP.",
      "Engineered a multi-class Disease Prediction System using Random Forest and XGBoost."
    ]
  }
];

export default function Experience() {
  return (
    <section style={{ padding: '80px 24px', maxWidth: '1024px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '64px' }}>Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{ position: 'relative', paddingLeft: '32px', borderLeft: '2px solid #e2e8f0' }}>
            <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#2563eb' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{exp.role}</h3>
              <span style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '0.875rem' }}>{exp.period}</span>
            </div>
            <p style={{ color: '#64748b', fontWeight: '500', marginBottom: '24px', textTransform: 'uppercase', fontSize: '0.75rem' }}>{exp.company}</p>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              {exp.points.map((p, i) => (
                <li key={i} style={{ color: '#475569', fontSize: '0.875rem', marginBottom: '16px', display: 'flex', gap: '12px' }}>
                  <span style={{ color: '#2563eb' }}>•</span> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
