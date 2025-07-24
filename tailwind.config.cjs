/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: '#F3C7D7',
        'pink-strong': '#F5A6C4', // New stronger pink for primary buttons
        'pink-active': '#E58BAE', // New darker pink for active navigation  
        ivory: '#F8F4F1',
        nude: '#F2C2AE',
        gold: '#C8A96A',
        coal: '#111111',
        taupe: '#B9B0A8',
        'taupe-dark': '#6E5F5B', // New darker taupe for better contrast
        'footer-link': '#666', // New color for footer links
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