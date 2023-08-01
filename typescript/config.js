const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  parser: '@typescript-eslint/parser',
  extends: ['canonical', 'plugin:sonarjs/recommended', 'prettier'],
  overrides: [
    {
      extends: ['canonical/typescript'],
      files: '*.ts',
    },
  ],
  plugins: ['sonarjs', '@typescript-eslint', 'prettier'],
});
