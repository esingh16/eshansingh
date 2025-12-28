export default function Education() {
  return (
    <section style={{ backgroundColor: 'white', padding: '80px 24px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '48px' }}>Education</h2>
        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: '32px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1px solid #f1f5f9' }}>
            <span style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '0.75rem', letterSpacing: '0.1em' }}>2025 - 2027</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '8px' }}>University of Maryland</h3>
            <p style={{ color: '#475569', fontStyle: 'italic' }}>Master of Science in Data Science</p>
            <p style={{ marginTop: '16px', fontWeight: 'bold', fontSize: '1.125rem' }}>GPA: 3.9/4.0</p>
          </div>
          <div style={{ padding: '32px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1px solid #f1f5f9' }}>
            <span style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Bachelor of Engineering</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '8px' }}>SPPU University, Pune</h3>
            <p style={{ color: '#475569', fontStyle: 'italic' }}>AI and Data Science</p>
            <p style={{ marginTop: '16px', fontWeight: 'bold' }}>CGPA: 8.98/10</p>
          </div>
        </div>
      </div>
    </section>
  );
}
