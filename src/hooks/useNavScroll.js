// src/hooks/useNavScroll.js
// Adds/removes 'scrolled' class on #navbar based on scroll position
import { useEffect } from 'react'

export function useNavScroll() {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const onScroll = () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
