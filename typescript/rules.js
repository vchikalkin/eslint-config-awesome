const javascript = require('../rules/javascript');
const typescript = require('../rules/typescript');
const sonar = require('../rules/sonar');

module.exports = {
  rules: {
    ...javascript.rules,
    ...typescript.rules,
    ...sonar.rules,
  },
};
