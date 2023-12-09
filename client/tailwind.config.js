/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,vue,js,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      blue: '#0019FF',
      pastelRed: '#FF6262'
    },
    fontFamily: {
      merri: ['Merriweather', 'serif'],
      playfair: ['"Playfair Display"', 'serif']
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
