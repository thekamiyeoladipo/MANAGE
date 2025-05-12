/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,css,js}"],
  theme: {
    extend: {
  colors: {
        brightRed: '#f25f3a',
        darkBlue: '#242d52',
        grayishBlue: '#a0a1ab',
        darkGrayishBlue: '#9095a7',
        veryDarkBlue: '#1d1e25',
        veryPaleRed: '#ffefeb',
        veryLightGray: '#fafafa',
      }
    },
  },
  plugins: [],
}

