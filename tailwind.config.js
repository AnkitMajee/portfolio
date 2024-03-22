/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#FF6363",
        "secondary":"#4C1D95",
        "tertiary":"#38A3A5",
      }
    },
  },
  plugins: [],
}