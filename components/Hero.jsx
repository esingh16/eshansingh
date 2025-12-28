export default function Hero() {
  return (
    <section style={{ padding: '96px 24px', maxWidth: '1024px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.05em' }}>
        Eshan Singh
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#2563eb', fontWeight: '600', marginBottom: '24px' }}>
        Data Science & AI Engineer
      </h2>
      <p style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '42rem', marginBottom: '40px', lineHeight: '1.625' }}>
        Master of Science student at UMD (GPA 3.9/4.0) specializing in end-to-end ML pipelines, NLP, RAG, and vector embeddings.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <button style={{ backgroundColor: '#0f172a', color: 'white', padding: '16px 32px', borderRadius: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          Download Resume
        </button>
      </div>
    </section>
  );
}
