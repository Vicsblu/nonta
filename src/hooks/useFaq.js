// src/hooks/useFaq.js
// Manages open/close state for the FAQ accordion
import { useState } from 'react'

export function useFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return { openIndex, toggle }
}
