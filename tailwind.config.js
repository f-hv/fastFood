/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
    // fontFamily: {
    //   sans: [
    //     '"Inter var", sans-serif',
    //     {
    //       fontFeatureSettings: '"cv11", "ss01"',
    //       fontVariationSettings: '"opsz" 32'
    //     },
    //   ],
    // }
  },
  plugins: [],
}

