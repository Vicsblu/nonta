// src/hooks/useScrollReveal.js
// Attaches IntersectionObserver to all .reveal elements
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    // Stagger cards
    document
      .querySelectorAll(
        '.services-grid .service-card, .trust-cards .trust-card, .testimonials-grid .tcard, .tips-grid .tip-card'
      )
      .forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.08}s`
      })

    return () => observer.disconnect()
  }, [])
}
