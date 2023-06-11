module.exports = {
  extends: ['react-app', 'airbnb', 'prettier', 'plugin:eslint-plugin/recommended'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../../*'],
      },
    ],

    'no-console': 'error',

    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
