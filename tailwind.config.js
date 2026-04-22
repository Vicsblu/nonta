/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0a1f44',
          mid: '#0d2d6b',
          light: '#1a4299',
        },
        yellow: {
          DEFAULT: '#f5c518',
          light: '#ffe066',
        },
        dark: '#0a0f1e',
        'gray-light': '#f4f6fb',
        'gray-mid': '#e1e6f0',
        'gray-text': '#7a8499',
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 8px 40px rgba(10,31,68,.13)',
      },
    },
  },
  plugins: [],
}
