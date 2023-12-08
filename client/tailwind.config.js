/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,vue,js,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'black': '#000000',
      'white': "#ffffff",
      'blue': '#0019FF',
      'lightBlue': '#0019ff1a',
      'pastelRed': '#FF6262'
    },
    fontFamily: {
      'merri': ['Merriweather', 'serif'],
      'playfair': ['"Playfair Display"', 'serif']
    },
    screens: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: false,
    darkTheme: 'dark',
    base: false,
    logs: false,
  },
}
