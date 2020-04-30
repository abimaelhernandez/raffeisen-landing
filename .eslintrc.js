module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: '^16.4.2',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  rules: {
    "semi": [ 2, "never"],
    'no-console': 'off',
    strict: ['error', 'global'],
    curly: 'warn',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'consistent-return': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    "jsx-a11y/label-has-for": [ 2, {
      "required": {
          "some": [ "nesting", "id" ]
      }
    }],
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomLabel"],
      "labelAttributes": ["inputLabel"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'import/no-extraneous-dependencies': 0,
  }
}
