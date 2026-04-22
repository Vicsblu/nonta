// src/components/Contact.jsx
import { SITE } from '../data/siteData'
import WaIcon from './WaIcon'

const CONTACT_ITEMS = [
  {
    icon: '📍',
    label: 'Address',
    content: (
      <p>
        {SITE.address}
        <br />
        {SITE.city}
      </p>
    ),
  },
  {
    icon: '📞',
    label: 'Phone / WhatsApp',
    content: (
      <p>
        <a href={`tel:${SITE.phoneRaw}`} style={{ color: 'var(--blue)', fontWeight: 600 }}>
          {SITE.phone}
        </a>
      </p>
    ),
  },
  {
    icon: '✉️',
    label: 'Email',
    content: (
      <p>
        <a
          href={`mailto:${SITE.email}`}
          style={{ color: 'var(--blue)', fontWeight: 600, wordBreak: 'break-all' }}
        >
          {SITE.email}
        </a>
      </p>
    ),
  },
  {
    icon: '🏛️',
    label: 'RC Number',
    content: <p>{SITE.rc}</p>,
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-heading">
            Contact <span>Us</span>
          </h2>
          <p className="section-sub" style={{ marginInline: 'auto' }}>
            Ready to power up? Reach out via any of the channels below and we'll respond within
            minutes.
          </p>
        </div>

        <div className="contact-inner">
          {/* Info */}
          <div className="contact-info reveal">
            {CONTACT_ITEMS.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <h4>{item.label}</h4>
                  {item.content}
                </div>
              </div>
            ))}

            <a
              href={SITE.whatsapp}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              style={{ alignSelf: 'flex-start', marginTop: '.5rem' }}
            >
              <WaIcon />
              Chat on WhatsApp
            </a>
          </div>

          {/* Map placeholder */}
          <div className="contact-map reveal">
            <div className="contact-map-placeholder">
              <div>🗺️</div>
              <strong>136, Ishagamu Road, Ikorodu</strong>
              <p>Lagos State, Nigeria</p>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-blue"
                style={{ marginTop: '1rem', fontSize: '.9rem' }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
