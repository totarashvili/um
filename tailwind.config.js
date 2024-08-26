/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // fontFamily: {
      //   'helvetica': ['Helvetica Neue LT GEO', 'sans-serif'],
      //   'helvetica-bold': ['Helvetica Neue Bold', 'sans-serif'],
      //   'umgbold': ['UMgBold', 'sans-serif'],
      //   'bpg-caps': ['BPG-WEB-001-Caps', 'sans-serif'],
      // },
      /* Font Face for Helvetica Neue LT GEO 25 UltLt */
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue LT GEO', 'sans-serif'],
        'Umgeo': ['Umgeo','sans-serif']
      },
      fontWeight: {
        'ultralight': 200,
        'thin': 300,
        'light':400,
        'normal': 500,
        'medium': 600,
        'bold': 700,
        'heavy': 800,
        'black': 900,
      },
    },
  },
  plugins: [],
}
