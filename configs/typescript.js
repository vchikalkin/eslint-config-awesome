const auto = require('eslint-config-canonical/configurations/auto');
const sonarjs = require('eslint-plugin-sonarjs');
const rules = require('../rules');

/** @type {import('eslint').Linter.Config} */
module.exports = [
  { name: 'ESLint Config Awesome - Typescript' },
  ...auto,
  sonarjs.configs.recommended,
  {
    plugins: {
      import: require('eslint-plugin-import'),
    },
  },
  rules.common,
  rules.sonar,
  {
    ignores: [
      '**/node_modules',
      '**/package-lock.json',
      '**/pnpm-lock.yaml',
      '**/package.json',
      '**/tsconfig.json',
      '**/eslint.config.js',
    ],
  },
];
