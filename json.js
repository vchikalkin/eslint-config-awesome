module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  overrides: [
    {
      extends: ['canonical/json'],
      files: '*.json',
    },
  ],
};
