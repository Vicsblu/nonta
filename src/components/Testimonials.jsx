// src/components/Testimonials.jsx
import { TESTIMONIALS } from '../data/siteData'

function WaSmallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 13, height: 13 }}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.112 1.527 5.84L.057 23.5l5.797-1.49A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-tag">Reviews</div>
          <h2 className="section-heading">
            What Clients <span>Say</span>
          </h2>
          <p className="section-sub" style={{ marginInline: 'auto' }}>
            Real feedback from homeowners and businesses who trusted us with their power needs.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className="tcard reveal" key={t.name}>
              <div className="tcard-stars">⭐⭐⭐⭐⭐</div>
              <p className="tcard-text">"{t.text}"</p>
              <div className="tcard-author">
                <div className="tcard-avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
              <div className="tcard-wa">
                <WaSmallIcon />
                Verified via WhatsApp
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
