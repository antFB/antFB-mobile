'use strict';

const eslintrc = {
  extends: ['eslint-config-airbnb'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'markdown',
    'react',
    'babel',
  ],
  rules: {
    'func-names': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-first-prop-new-line': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'react/no-multi-comp': 0,
    'array-callback-return': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/img-has-alt': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-string-refs': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", ".md"] }],
    'react/no-find-dom-node': 0,
    'jsx-a11y/href-no-hash': 0,
  }
};

if (process.env.RUN_ENV === 'DEMO') {
  eslintrc.globals = {
    React: true,
    ReactDOM: true,
    mountNode: true,
    AlipayJSBridge: true,
    $: true,
    dd: true
  };

  Object.assign(eslintrc.rules, {
    'no-console': 0,
    'no-alert': 0,
    'eol-last': 0,
    'prefer-rest-params': 0,
    'react/no-multi-comp': 0,
  });
}

module.exports = eslintrc;
