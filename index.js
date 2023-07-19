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
    'next',
    'prettier',
  ],
  overrides: [
    {
      extends: ['canonical/typescript', 'canonical/zod'],
      files: '*.ts',
    },
    {
      extends: ['canonical/react', 'canonical/jsx-a11y', 'canonical/typescript'],
      files: '*.tsx',
    },
    {
      extends: ['canonical/react', 'canonical/jsx-a11y'],
      files: '*.jsx',
    },
    {
      extends: ['canonical/json'],
      files: '*.json',
    },
    {
      extends: ['canonical/graphql'],
      files: ['*.graphql'],
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'canonical/jest'],
    },
  ],
  plugins: ['canonical', 'sonarjs', '@typescript-eslint', 'prettier', 'testing-library'],
};
