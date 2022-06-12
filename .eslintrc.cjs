const { join } = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    project: join(__dirname, './tsconfig.json'),
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:rxjs/recommended',
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    'eol-last': ["error", "always"],
  }
};