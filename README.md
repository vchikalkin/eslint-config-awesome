# @vchikalkin/eslint-config-awesome

- 🛠️ Most rules autofixable
- 🎯 Designed to work with TypeScript, Nextjs, React projects
- 🏆 Powered by [Canonical](https://github.com/gajus/eslint-config-canonical), [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)

## 🚀 Usage

### 📥 Install

```bash
yarn add -D eslint @vchikalkin/eslint-config-awesome
```

### ⚙️ Config `.eslintrc.js`

For Next.js

```js
const { createConfig } = require('@vchikalkin/eslint-config-awesome');

module.exports = createConfig('next-typescript'); // or module.exports = createConfig('next');
```

For React

```js
const { createConfig } = require('@vchikalkin/eslint-config-awesome');

module.exports = createConfig('react-typescript'); // or module.exports = createConfig('react');
```

For TypeScript

```js
const { createConfig } = require('@vchikalkin/eslint-config-awesome');

module.exports = createConfig('typescript');
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
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true,
    "source.removeUnusedImports": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "json",
    "typescript",
    "typescriptreact",
    "yaml"
  ],
  "eslint.lintTask.enable": true
}
```
