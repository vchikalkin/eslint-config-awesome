const javascript = require('../rules/javascript');
const typescript = require('../rules/typescript');
const sonar = require('../rules/sonar');
const react = require('../rules/react');

module.exports = {
  rules: {
    ...javascript.rules,
    ...typescript.rules,
    ...sonar.rules,
    ...react.rules,
  },
};
