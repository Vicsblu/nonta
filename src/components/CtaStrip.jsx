// src/components/CtaStrip.jsx
import { SITE } from '../data/siteData'
import WaIcon from './WaIcon'

export default function CtaStrip() {
  return (
    <section id="cta-strip">
      <div className="container cta-strip-inner reveal">
        <div>
          <h2>Get a Fast Estimate for Your Power Setup</h2>
          <p>Tell us your energy needs and we'll give you a clear, no-obligation quote within minutes.</p>
        </div>
        <a
          href={SITE.whatsapp}
          className="btn btn-blue"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: '1.05rem', padding: '1em 2.5em' }}
        >
          <WaIcon size={20} />
          Get Quote on WhatsApp
        </a>
      </div>
    </section>
  )
}
