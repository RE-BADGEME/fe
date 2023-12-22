module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },

  settings: {
    'import/resolver': {
      typescript: {},
    },
  },

  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'prettier',
  ],

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'no-useless-catch': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-nested-ternary': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-extra-boolean-cast': 'off',
    'react/self-closing-comp': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
