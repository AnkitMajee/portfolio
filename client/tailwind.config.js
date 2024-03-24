/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000", // dark black
        "secondary": "#eC1D95",
        "tertiary": "#38A3A5",
        "accent": "#FFD700" // gold
      }
    },
    screens: {
      'lg': { 'max': '2023px' },
      // => @media (max-width: 1023px) { ... }
      'sm': { 'max': '1000px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}