"use client";
import Hero from '../components/Hero';
import Education from '../components/education';
import ProjectCard from '../components/projectcard';
import Experience from '../components/experience';
import Skills from '../components/skills';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Hero />
      <Education />
      
      <section id="projects" style={{ padding: '80px 24px', maxWidth: '1024px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '40px', color: '#0f172a' }}>
          Featured Projects
        </h2>
        <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <ProjectCard 
            title="Care Compass" 
            achievement="2nd Place @ Gemini Hackathon"
            description="Full-stack health platform using FHIR standards for real-time risk assessment."
            tech={["React", "Node.js", "MongoDB"]}
          />
          <ProjectCard 
            title="Career Counselling AI" 
            achievement="Published Paper (WRFER)"
            description="Android app with voice features using NLP and GPT models for career advice."
            tech={["RAG", "GPT Models", "NLP"]}
          />
          <ProjectCard 
            title="Loan Risk Prediction" 
            description="Binary classification model using Gradient Boosting and LIME for transparent risk insights."
            tech={["XGBoost", "LIME", "Python"]}
          />
        </div>
      </section>

      <Experience />
      <Skills />

      <footer style={{ padding: '80px 0', textAlign: 'center', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
        <p>Eshan Singh | {new Date().getFullYear()}</p>
        <p style={{ fontSize: '0.875rem', marginTop: '8px' }}>College Park, Maryland | esingh16@umd.edu</p>
      </footer>
    </main>
  );
}
