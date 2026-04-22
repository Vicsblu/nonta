// src/components/Projects.jsx
import { PROJECTS } from '../data/siteData'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="section-tag">Our Work</div>
          <h2 className="section-heading">
            Recent <span>Projects</span>
          </h2>
          <p className="section-sub" style={{ marginInline: 'auto' }}>
            A snapshot of completed solar, inverter, and electrical installations across Lagos
            and beyond.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div
              className={`project-card reveal${p.featured ? ' featured' : ''}`}
              key={p.title}
              style={p.cardstyle}
            >
              <img src={p.img} alt={p.alt} loading="lazy" style={p.imgStyle} />
              <div className="project-overlay">
                <h4>{p.title}</h4>
                <span>{p.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
