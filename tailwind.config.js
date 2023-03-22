/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/layouts/**/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        green: '#00d900',
        blue: '#00e6e6',
        yellow: '#e6e600',
        gray: '#e6e6e6',
        pink: '#e600e6',
        purple: '#942192',
        red: '#e60000',
      },
    },
  },
  plugins: [],
};
