// src/components/About.jsx
import { SITE } from '../data/siteData'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-inner">
          {/* Image */}
          <div className="about-img reveal">
            <img
              src="/notas/nota.jpg"
              alt="Nonta Engineering team at work"
              loading="lazy"
            />
            <div className="about-img-overlay" />
            <div className="about-logo-badge">
              <img
                src="/logo/nonta.png"
                alt="Nonta Logo"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <div>
                <strong>{SITE.shortName}</strong>
                <span>{SITE.rc} · Est. Lagos</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content reveal">
            <div className="section-tag">About Us</div>
            <h2 className="section-heading">
              Who We <span>Are</span>
            </h2>
            <p className="section-sub">
              {SITE.name} delivers reliable and efficient power solutions through expert
              electrical, solar, and inverter services for homes and businesses.
            </p>
            <p style={{ fontSize: '.95rem', color: 'var(--gray-text)', lineHeight: 1.8, marginTop: '1rem' }}>
              Based in Ikorodu, Lagos, we have built a strong reputation for professionalism,
              quality workmanship, and honest service. Our team of skilled engineers brings
              decades of combined experience to every project — whether it's a small home
              inverter system or a large commercial solar installation.
            </p>
            <p style={{ fontSize: '.95rem', color: 'var(--gray-text)', lineHeight: 1.8, marginTop: '1rem' }}>
              We believe everyone deserves access to stable, affordable power. That's why we
              offer scalable solutions designed to grow with your needs, backed by full
              post-installation support and maintenance services.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href={SITE.whatsapp} className="btn btn-primary" target="_blank" rel="noreferrer">
                Contact Us Today
              </a>
              <a href="#services" className="btn btn-blue">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
