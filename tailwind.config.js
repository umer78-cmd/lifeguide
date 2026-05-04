/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#b45309', // Amber 700
          stone: '#1c1917', // Stone 900
          cream: '#fafaf9', // Stone 50
        },
        stone: {
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      letterSpacing: {
        'brand-wide': '0.1em',
      }
    },
  },
  plugins: [],
}

