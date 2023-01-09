/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['night'],
  },
};
