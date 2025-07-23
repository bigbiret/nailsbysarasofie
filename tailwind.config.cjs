/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: '#F3C7D7',
        ivory: '#F8F4F1',
        nude: '#F2C2AE',
        gold: '#C8A96A',
        coal: '#111111',
        taupe: '#B9B0A8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        xl2: '1rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,.08)'
      },
    },
  },
  plugins: [],
}; 