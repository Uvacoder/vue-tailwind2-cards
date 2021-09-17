const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'trueGray': colors.trueGray,
        'emerald': colors.emerald,
        'sky': colors.sky,
        pony: {
          'primary': '#303030',
          'secondary': '#212121',
          'button': '#1d4ed8',
          'card': '#424242',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}