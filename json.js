module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  overrides: [
    {
      extends: ['canonical/json'],
      files: '*.json',
    },
  ],
};
