import path from 'path';

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`

const config = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  'src/**/*': 'prettier --write --ignore-unknown',
  'src/**/*.{css,scss}': 'stylelint',
};

export default config;
