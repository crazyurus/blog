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
        blue: '#00e5e6',
        yellow: '#e5e600',
        gray: '#e5e6e6',
      },
    },
  },
  plugins: [],
};
