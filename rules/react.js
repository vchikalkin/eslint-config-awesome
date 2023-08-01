module.exports = {
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
