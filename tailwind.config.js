/** @type {import('tailwindcss').Config} */
const colors = require('./constants/colors');

module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/layouts/**/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
