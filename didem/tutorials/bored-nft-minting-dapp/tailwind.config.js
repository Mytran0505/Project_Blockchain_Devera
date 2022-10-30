/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        coiny : ["Coiny", ...defaultTheme.fontFamily.sans],
      },
      colors :{
        'brand-purple': 'var(--clr-purple)',
        'brand-pink': 'var(--clr-pink)',
        'brand-yelllow': 'var(--clr-yelllow)',
        'brand-blue': 'var(--clr-blue)',
        'brand-green': 'var(--clr-green)',
        'brand-light': 'var(--clr-light)',
        'brand-background': 'var(--clr-background)',
      }
    },
  },
  plugins: [],
};