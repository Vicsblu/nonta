// src/components/Hero.jsx
import { SITE, HERO_STATS } from '../data/siteData'
import WaIcon from './WaIcon'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          {/* Text */}
          <div className="hero-text reveal">
            <div className="hero-badge">⚡ Energy Experts</div>
            <h1 className="hero-title">
              Reliable Power
              <span className="accent">Solutions You</span>
              Can Trust
            </h1>
            <p className="hero-sub">
              Solar installations, inverter systems, and complete electrical services for homes
              and businesses. End-to-end power solutions — supply, install, and maintain.
            </p>
            <div className="hero-actions">
              <a href={SITE.whatsapp} className="btn btn-primary" target="_blank" rel="noreferrer">
                <WaIcon />
                Request a Quote
              </a>
              <a href={SITE.whatsapp} className="btn btn-outline" target="_blank" rel="noreferrer">
                Consultation
              </a>
            </div>
            <div className="hero-stats">
              {HERO_STATS.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual reveal">
            <div className="hero-img-stack">
              <img
                className="hero-img-main"
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Solar Panel Installation"
              />
              <div className="hero-img-card">
                <div className="icon-wrap">☀️</div>
                <div>
                  <strong>Solar Powered</strong>
                  <span>Clean &amp; Reliable Energy</span>
                </div>
              </div>
              <div className="hero-img-badge">
                <strong>RC</strong>
                3571621
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
