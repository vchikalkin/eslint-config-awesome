/** @type {import('eslint').Linter.Config} */
module.exports = {
  name: 'Sonar rules override',
  rules: {
    'sonarjs/no-duplicate-string': 'warn',
    // fix
    'sonarjs/no-empty-function': 'off',
    'sonarjs/no-unused-expressions': 'off',
  },
};
