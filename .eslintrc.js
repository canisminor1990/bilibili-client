module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: [
    'flowtype',
    'react',
    'prettier',
    'standard'
  ],
  parserOptions: {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },
  globals: {
    'window': true,
    'document': true,
    'navigator': true
  },
  env: {
    'es6': true,
    'node': true
  },
  rules: {
    'prettier/prettier': [
      2, {
        'printWidth': 100,
        'singleQuote': true,
        'trailingComma': 'es5',
        'parser': 'flow',
      }
    ],
    'react/react-in-jsx-scope': [0],
    'react/prop-types': [0],
    'react/display-name': [0],
    'react/no-children-prop': [0],
	  'no-undef': [0],
	  'no-unused-vars': [1]
  }
};

