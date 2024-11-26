# @vchikalkin/eslint-config-awesome 🎉

- 🛠️ Most rules autofixable
- 🎯 Designed to work with TypeScript, NextJS, React projects
- 🏆 Powered by [Canonical](https://github.com/gajus/eslint-config-canonical), [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)
- ⚙️ Using ESLint **Flat** config

## Requirements

- [ESLint 9](https://github.com/eslint/eslint)
- [TypeScript 5](https://www.typescriptlang.org/)

## 🚀 Usage

### 📥 Install

```bash
pnpm add -D eslint typescript @vchikalkin/eslint-config-awesome
```

### ⚙️ Config `eslint.config.js`

Common usage:

```js
const config = require('@vchikalkin/eslint-config-awesome');

module.exports = config['react-typescript'];
```

Extend config:

```js
const config = require('@vchikalkin/eslint-config-awesome');

module.exports = [
  ...config['react-typescript'],
  {
    rules: {
      'rule-name': 'off',
    },
    ignores: ['node_modules'],
  },
  //...other configs
];
```

### ➕ Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### ✨ Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [VS Code Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and create `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.removeUnusedImports": "explicit"
  },
  "editor.formatOnSave": true,
  "eslint.lintTask.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "json",
    "typescript",
    "typescriptreact",
    "yaml"
  ]
}
```

Recomended **.prettierrc**:

```json
{
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "endOfLine": "auto",
  "insertPragma": false,
  "jsxSingleQuote": false,
  "printWidth": 100,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```
