/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {

  purge: [],

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }