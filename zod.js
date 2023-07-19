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
  overrides: [
    {
      extends: ['canonical/zod'],
      files: '*.ts',
    },
  ],
  rules: {
    'zod/require-strict': 'off',
  },
};
