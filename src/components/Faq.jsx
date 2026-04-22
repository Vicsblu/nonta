// src/components/Faq.jsx
import { FAQS } from '../data/siteData'
import { useFaq } from '../hooks/useFaq'

export default function Faq() {
  const { openIndex, toggle } = useFaq()

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-inner">
          {/* Accordion */}
          <div>
            <div className="section-tag">FAQ</div>
            <h2 className="section-heading">
              Common <span>Questions</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: '2rem' }}>
              Everything you need to know before getting started with us.
            </p>

            <div className="faq-list">
              {FAQS.map((item, i) => (
                <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
                  <button className="faq-q" onClick={() => toggle(i)}>
                    {item.q}
                    <div className="chevron">+</div>
                  </button>
                  <div className="faq-a">{item.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky image */}
          <div className="faq-visual reveal">
            <img
              src="/notas/notash.jpg"
              alt="Solar installation"
              style={{ aspectRatio: '3/4', objectFit: 'cover', width: '100%', borderRadius: 16 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
