/** @type {import('eslint').Linter.Config} */
module.exports = {
  name: 'Common rules override',
  rules: {
    'canonical/filename-match-exported': 'off',
    'canonical/filename-match-regex': [
      1,
      {
        ignoreExporting: false,
        regex: '^[A-Za-z]+(?:[A-Za-z0-9-]*\\.[A-Za-z0-9-]+)*\\d*$',
      },
    ],
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
