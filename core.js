module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'canonical',
    'plugin:sonarjs/recommended',
    'eslint:recommended',
    'prettier',
  ],
  overrides: [
    {
      extends: ['canonical/typescript'],
      files: '*.ts',
    },
  ],
  plugins: ['canonical', 'sonarjs', '@typescript-eslint', 'prettier'],
};
