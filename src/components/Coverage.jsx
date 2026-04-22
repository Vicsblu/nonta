// src/components/Coverage.jsx
import { SITE } from '../data/siteData'

export default function Coverage() {
  return (
    <section id="coverage">
      <div className="container coverage-inner reveal">
        <div className="coverage-icon">📍</div>
        <div>
          <h2>We Serve Lagos &amp; Beyond</h2>
          <p>
            Currently operating across Lagos — Ikorodu, Ikeja, Lagos Island, Agege, Epe,
            Badagry, and surrounding areas.
            <br />
            <strong>Nationwide services available on request.</strong>
          </p>
        </div>
        <a href={SITE.whatsapp} className="btn btn-blue" target="_blank" rel="noreferrer">
          Check Coverage →
        </a>
      </div>
    </section>
  )
}
