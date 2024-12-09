const auto = require('eslint-config-canonical/configurations/auto');
const sonarjs = require('eslint-plugin-sonarjs');
const rules = require('../rules');
const pluginNext = require('@next/eslint-plugin-next');

/** @type {import('eslint').Linter.Config} */
module.exports = [
  { name: 'ESLint config awesome' },
  ...auto,
  sonarjs.configs.recommended,
  {
    plugins: {
      import: require('eslint-plugin-import'),
      react: require('eslint-plugin-react'),
    },
  },
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  rules.common,
  rules.react,
  rules.sonar,
  rules.next,
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
