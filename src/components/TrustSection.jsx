// src/components/TrustSection.jsx
import { TRUST_CARDS, SITE } from '../data/siteData'

export default function TrustSection() {
  return (
    <section id="trust">
      <div className="container">
        <div style={{ textAlign: 'center' }} className="reveal">
          <div className="section-tag">Credentials</div>
          <h2 className="section-heading" style={{ color: 'var(--white)' }}>
            Built on <span>Trust</span>
          </h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,.65)', marginInline: 'auto' }}>
            We operate with full transparency, proper registration, and a commitment to
            delivering exactly what we promise.
          </p>
        </div>

        <div className="trust-cards">
          {TRUST_CARDS.map((c) => (
            <div className="trust-card reveal" key={c.title}>
              <div className="trust-card-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>
                {c.highlight ? (
                  <>
                    Officially registered business in Nigeria. RC Number:{' '}
                    <strong style={{ color: 'var(--yellow)' }}>{SITE.rc}</strong>
                  </>
                ) : (
                  c.desc
                )}
              </p>
            </div>
          ))}
        </div>

        <p className="trust-rc reveal">
          Registered with the Corporate Affairs Commission ·{' '}
          <strong>{SITE.rc}</strong> · Ikorodu, Lagos State
        </p>
      </div>
    </section>
  )
}
