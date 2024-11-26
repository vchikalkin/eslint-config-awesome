/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const { fixupConfigRules } = require('@eslint/compat');
const { FlatCompat } = require('@eslint/eslintrc');
const auto = require('eslint-config-canonical/configurations/auto');
const sonarjs = require('eslint-plugin-sonarjs');
const rules = require('../rules');

const flatCompat = new FlatCompat();

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
  ...fixupConfigRules(flatCompat.extends('plugin:@next/next/core-web-vitals')),
  rules.common,
  rules.react,
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
