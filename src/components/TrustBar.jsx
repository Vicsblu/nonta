// src/components/TrustBar.jsx
const ITEMS = [
  {
    type: 'icon',
    label: 'Registered Company',
  },
  { type: 'text', label: '⚡ Expert Installations' },
  { type: 'text', label: '☀️ Solar Specialists' },
  { type: 'text', label: '🔋 Inverter & Backup Systems' },
  { type: 'text', label: '📍 Lagos & Nationwide' },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  )
}

export default function TrustBar() {
  return (
    <div id="trustbar">
      <div className="container trust-inner">
        {ITEMS.map((item, i) => (
          <div key={i} style={{ display: 'contents' }}>
            {i > 0 && <div className="trust-divider" />}
            <div className="trust-item">
              {item.type === 'icon' && <CheckIcon />}
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
