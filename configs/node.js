const auto = require('eslint-config-canonical/configurations/auto');
const node = require('eslint-config-canonical/configurations/node');
const sonarjs = require('eslint-plugin-sonarjs');
const rules = require('../rules');

/** @type {import('eslint').Linter.Config} */
module.exports = [
  { name: 'ESLint Config Awesome - Node Typescript' },
  ...auto,
  node.recommended,
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
