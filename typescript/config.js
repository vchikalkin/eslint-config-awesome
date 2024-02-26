/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['canonical', 'plugin:sonarjs/recommended', 'prettier'],
  overrides: [
    {
      extends: ['canonical/typescript'],
      files: '*.ts',
    },
  ],
  plugins: ['sonarjs', 'prettier'],
};
