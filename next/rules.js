const javascript = require('../rules/javascript');
const sonar = require('../rules/sonar');
const react = require('../rules/react');
const next = require('../rules/next');

module.exports = {
  rules: {
    ...javascript.rules,
    ...sonar.rules,
    ...react.rules,
    ...next.rules,
  },
};
