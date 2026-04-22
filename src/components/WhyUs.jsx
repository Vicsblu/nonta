// src/components/WhyUs.jsx
import { WHY_FEATURES } from '../data/siteData'

export default function WhyUs() {
  return (
    <section id="why">
      <div className="container">
        <div className="why-inner">
          {/* Image */}
          <div className="why-img reveal">
            <img
              src="/notas/notat.jpg"
              alt="Engineer working on solar panels"
              loading="lazy"
            />
            <div className="why-img-overlay" />
            <div className="why-img-badge">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Trusted Experts
            </div>
          </div>

          {/* Content */}
          <div className="why-content reveal">
            <div className="section-tag">Why Nonta</div>
            <h2 className="section-heading">
              Why Choose <span>Us?</span>
            </h2>
            <p className="section-sub">
              We don't just sell equipment — we deliver complete, working power solutions backed
              by expertise and accountability.
            </p>
            <div className="why-features">
              {WHY_FEATURES.map((f) => (
                <div className="why-feat" key={f.title}>
                  <div className="why-feat-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
