const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/**
 * @param {'next'|'next-typescript'|'react'|'react-typescript'|'typescript'} name
 * @param {import('eslint').Linter.Config} overrideConfig
 */
function createConfig(name, overrideConfig) {
  return {
    extends: [
      `@vchikalkin/eslint-config-awesome/${name}/config`,
      `@vchikalkin/eslint-config-awesome/${name}/rules`,
    ],
    parserOptions: {
      project,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project,
        },
      },
    },
    ignorePatterns: ['node_modules/', 'dist/'],
    ...overrideConfig,
  };
}

module.exports = createConfig;
