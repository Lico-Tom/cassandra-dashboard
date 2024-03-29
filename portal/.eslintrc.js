module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-unused-vars': 0,
    'no-var': 2,
    'object-curly-newline': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
  },
};
