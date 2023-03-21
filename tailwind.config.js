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
        green: '#00a600',
        blue: '#00a6b3',
        yellow: '#999900',
        gray: '#bfbfbf',
      },
    },
  },
  plugins: [],
};
