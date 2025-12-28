const skillGroups = [
  { category: "Advanced AI", items: ["RAG", "Generative AI", "LangChains", "Vector DBs"] },
  { category: "Programming", items: ["Python", "SQL", "Pandas", "NumPy", "JavaScript"] },
  { category: "Tools", items: ["Git", "GitHub", "Jupyter", "Tableau", "Power BI"] }
];

export default function Skills() {
  return (
    <section style={{ backgroundColor: '#0f172a', padding: '96px 24px', color: 'white' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '64px' }}>Technical Skills</h2>
        <div style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 style={{ color: '#60a5fa', fontWeight: 'bold', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {group.items.map(item => (
                  <span key={item} style={{ border: '1px solid #1e293b', padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', color: '#cbd5e1' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
