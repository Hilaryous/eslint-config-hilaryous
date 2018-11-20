module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended'
  ],
  plugins: [
    "flowtype",
    "import"
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      'components': ['Link'],
      'specialLink': ['to']
    }],
  }
}
