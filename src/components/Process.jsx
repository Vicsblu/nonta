// src/components/Process.jsx
import { PROCESS_STEPS } from '../data/siteData'

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="process-header reveal">
          <div className="section-tag">How We Work</div>
          <h2 className="section-heading">
            Our Simple <span>Process</span>
          </h2>
          <p className="section-sub">
            A clear, professional workflow from first contact to full handover — no guesswork,
            no surprises.
          </p>
        </div>

        <div className="process-steps">
          {PROCESS_STEPS.map((step) => (
            <div className="process-step reveal" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
