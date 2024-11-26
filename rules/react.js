/** @type {import('eslint').Linter.Config} */
module.exports = {
  name: 'React rules override',
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
