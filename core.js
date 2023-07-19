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
    'prettier',
  ],
  overrides: [
    {
      extends: ['canonical/typescript'],
      files: '*.ts',
    },
  ],
  plugins: ['canonical', 'sonarjs', '@typescript-eslint', 'prettier'],
  rules: {
    // Disabled
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': 'off',
    quotes: 'off',
    '@typescript-eslint/quotes': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',

    // Config
    'linebreak-style': ['error', 'windows'],
    'import/extensions': 'off',
    'newline-before-return': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    'function-paren-newline': 'off',
    'promise/prefer-await-to-then': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'off',
        },
      },
    ],
    'id-length': 'warn',
    'import/no-unassigned-import': 'off',
    'import/no-named-as-default-member': 'warn',
    '@typescript-eslint/naming-convention': 'warn',

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

    // Sonar
    'sonarjs/no-duplicate-string': 'warn',
  },
};
