// src/components/Navbar.jsx
import { useState } from 'react'
import { SITE } from '../data/siteData'
import WaIcon from './WaIcon'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about',    label: 'About' },
  { href: '#faq',      label: 'FAQ' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav id="navbar">
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#" className="nav-logo">
            <img
              src="/logo/nonta.png"
              alt="Nonta Engineering Logo"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <div className="nav-logo-text">
              <strong>{SITE.shortName}</strong>
              <span>{SITE.tagline}</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <a href={SITE.whatsapp} className="btn btn-primary" target="_blank" rel="noreferrer">
              <WaIcon />
              Request Quote
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href={SITE.whatsapp} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
          📲 Request a Quote
        </a>
      </div>
    </>
  )
}
