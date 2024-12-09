/** @type {import('eslint').Linter.Config} */
module.exports = {
  name: 'Common rules override',
  rules: {
    'canonical/filename-match-exported': 'off',
    'canonical/filename-match-regex': [
      1,
      {
        ignoreExporting: false,
        regex: '^[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\d*$',
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
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        json: 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: 'auto',
        insertPragma: false,
        jsxSingleQuote: false,
        printWidth: 100,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
      { usePrettierrc: false },
    ],
  },
};
