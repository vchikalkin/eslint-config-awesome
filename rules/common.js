/** @type {import('eslint').Linter.Config} */
module.exports = {
  name: 'Common rules override',
  rules: {
    'canonical/filename-match-exported': 'off',
    'func-style': [
      'warn',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'import/no-unassigned-import': [
      2,
      {
        allow: ['**/*.css'],
      },
    ],
  },
};
