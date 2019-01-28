const path = require('path');

const buildConfig = require('./config/build-scripts.config');

const CWD = path.resolve(process.cwd());
const cwdResolve = relative => path.join(CWD, relative);

const MODULES = buildConfig.modules.map(cwdResolve).concat('node_modules');

module.exports = {
  extends: [
    '@nextiva/eslint-config',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['jest', 'prettier', 'react', 'import'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/require-default-props': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/no-access-state-in-setstate': 0,
    'react/sort-comp': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'prefer-destructuring': 0,
    'consistent-return': 0,
    'prefer-promise-reject-errors': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  settings: {
    polyfills: ['promises'],
    'import/resolver': {
      node: {
        moduleDirectory: MODULES,
      },
    },
  },
};
