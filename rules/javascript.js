module.exports = {
  rules: {
    // Disabled
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'func-call-spacing': 'off',
    indent: 'off',
    'keyword-spacing': 'off',
    'lines-between-class-members': 'off',
    'no-extra-parens': 'off',
    'object-curly-spacing': 'off',
    'padding-line-between-statements': 'off',
    quotes: 'off',
    semi: 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',

    // Config
    'linebreak-style': ['error', 'windows'],
    'import/extensions': 'off',
    'newline-before-return': 'warn',
    'function-paren-newline': 'off',
    'promise/prefer-await-to-then': 'off',
    'id-length': 'warn',
    'import/no-unassigned-import': 'off',
    'import/no-named-as-default-member': 'warn',

    // Unicorn
    'unicorn/no-array-for-each': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['^.*.(jsx|tsx)$'],
      },
    ],
    'unicorn/numeric-separators-style': [
      'warn',
      {
        onlyIfContainsSeparator: false,
        hexadecimal: {
          minimumDigits: 0,
          groupLength: 2,
        },
        binary: {
          minimumDigits: 0,
          groupLength: 4,
        },
        octal: {
          minimumDigits: 0,
          groupLength: 4,
        },
        number: {
          minimumDigits: 5,
          groupLength: 3,
        },
      },
    ],

    // Canonical
    'canonical/prefer-inline-type-import': 'off',
    '@babel/object-curly-spacing': ['off'],
    'canonical/filename-match-exported': ['off'],
    'canonical/import-specifier-newline': ['off'],
    'canonical/destructuring-property-newline': ['off'],
    'canonical/export-specifier-newline': 'off',
    'canonical/sort-keys': [
      'warn',
      'asc',
      {
        natural: true,
      },
    ],
    'canonical/id-match': ['off'],
    'import/order': [
      'error',
      {
        groups: [],
        'newlines-between': 'always',
      },
    ],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
  },
};
