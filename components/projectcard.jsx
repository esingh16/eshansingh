export default function ProjectCard({ title, description, tech, achievement }) {
  return (
    <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', padding: '32px', borderRadius: '16px' }}>
      {achievement && (
        <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 12px', borderRadius: '9999px', display: 'inline-block', marginBottom: '16px' }}>
          {achievement}
        </span>
      )}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px' }}>{title}</h3>
      <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '24px', lineHeight: '1.5' }}>{description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tech.map((t) => (
          <span key={t} style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
