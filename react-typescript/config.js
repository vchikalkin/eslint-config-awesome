/** @type {import('eslint').Linter.Config} */
module.exports = {
  globals: {
    JSX: true,
  },
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
    {
      extends: ['canonical/react', 'canonical/typescript'],
      files: '*.tsx',
    },
    {
      extends: ['canonical/react'],
      files: '*.jsx',
    },
  ],
  plugins: ['sonarjs', '@typescript-eslint', 'prettier'],
};
