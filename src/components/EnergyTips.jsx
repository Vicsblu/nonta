// src/components/EnergyTips.jsx
import { ENERGY_TIPS } from '../data/siteData'

export default function EnergyTips() {
  return (
    <section id="tips">
      <div className="container">
        <div className="tips-header reveal">
          <div className="section-tag">Knowledge Hub</div>
          <h2 className="section-heading">
            Energy <span>Tips</span> for You
          </h2>
          <p className="section-sub">
            Practical knowledge to help you make smarter energy decisions for your home or
            business.
          </p>
        </div>

        <div className="tips-grid">
          {ENERGY_TIPS.map((tip) => (
            <div className="tip-card reveal" key={tip.title}>
              <h3>
                {tip.icon} {tip.title}
              </h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
