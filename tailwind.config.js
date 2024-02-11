/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './apps/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
    './{src,pages,components,app}/**/*.{ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f0f4ff',
          200: '#d9e2ff',
          300: '#a6c1ff',
          400: '#598bff',
          500: '#3366ff',
          600: '#274bdb',
          700: '#1a34b8',
          800: '#102694',
          900: '#091c7a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

