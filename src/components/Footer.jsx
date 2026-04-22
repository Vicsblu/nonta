// src/components/Footer.jsx
import { SITE, FOOTER_LINKS } from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/logo/nonta.png"
                alt="Nonta Engineering"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <div className="footer-logo-text">
                <strong>NONTA ENGINEERING SERVICES</strong>
                <span>{SITE.tagline}</span>
              </div>
            </div>
            <p className="footer-desc">
              End-to-end power solutions for homes and businesses across Lagos and Nigeria.
              Solar, inverter, and electrical expertise you can trust.
            </p>
            <div className="footer-social">
              <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className="social-btn" title="Instagram">📸</a>
              <a href={SITE.social.facebook}  target="_blank" rel="noreferrer" className="social-btn" title="Facebook">👍</a>
              <a href={SITE.social.tiktok}    target="_blank" rel="noreferrer" className="social-btn" title="TikTok">🎵</a>
              <a href={SITE.social.twitter}   target="_blank" rel="noreferrer" className="social-btn" title="Twitter/X">🐦</a>
            </div>
            <p style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.25)', marginTop: '1rem' }}>
              {SITE.handle} across all platforms
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            {FOOTER_LINKS.services.map((s) => (
              <a href="#services" key={s}>{s}</a>
            ))}
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            {FOOTER_LINKS.company.map((l) => (
              <a href={l.href} key={l.label}>{l.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>Email Us</a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer">WhatsApp Us</a>
            <a href="#coverage">Service Coverage</a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '.75rem', fontSize: '.85rem', padding: '.65em 1.25em' }}
            >
              Consultation
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {SITE.name} · {SITE.rc} · All rights reserved
          </p>
          <p></p>
        </div>
      </div>
    </footer>
  )
}
