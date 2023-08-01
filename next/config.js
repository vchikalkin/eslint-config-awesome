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
  extends: [
    'canonical',
    'plugin:sonarjs/recommended',
    'canonical/next',
    'prettier',
  ],
  overrides: [
    {
      extends: ['canonical/react'],
      files: '*.jsx',
    },
    {
      extends: ['canonical/graphql'],
      files: ['*.graphql'],
    },
    // {
    //   files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    //   extends: ['plugin:testing-library/react', 'canonical/jest'],
    // },
  ],
  plugins: [
    'sonarjs',
    'prettier',
    // 'testing-library',
  ],
});
