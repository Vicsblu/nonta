// src/components/Services.jsx
import { SERVICES } from '../data/siteData'

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <div className="section-tag">What We Offer</div>
          <h2 className="section-heading">
            Complete Power <span>Solutions</span>
          </h2>
          <p className="section-sub">
            From site inspection to installation and ongoing maintenance — we handle every step
            with precision and professionalism.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card reveal" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
