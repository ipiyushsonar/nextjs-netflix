const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Roboto', ...fontFamily.sans ]
      },
      colors: {
        'netflix-red': '#e50914',
      },
    },
  },
  plugins: [],
}
