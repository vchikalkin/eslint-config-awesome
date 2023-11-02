/** @type {import('eslint').Linter.Config} */
module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
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
};
