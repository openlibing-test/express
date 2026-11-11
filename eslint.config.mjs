import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['node_modules/**', 'coverage/**', 'reports/**'] },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'commonjs', globals: globals.node },
    rules: { eqeqeq: ['error', 'always'], 'no-console': 'warn', 'no-unused-vars': 'warn' },
  },
  { files: ['test/**/*.js'], languageOptions: { globals: globals.mocha } },
  { files: ['examples/**/*.js'], languageOptions: { globals: globals.browser } },
];

