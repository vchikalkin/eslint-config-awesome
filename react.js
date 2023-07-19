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
      extends: ['canonical/react', 'canonical/typescript'],
      files: '*.tsx',
    },
    {
      extends: ['canonical/react'],
      files: '*.jsx',
    },
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-sort-props': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
