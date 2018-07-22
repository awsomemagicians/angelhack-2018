const importRules = {
  'import/order': [2, { 'newlines-between': 'always' }],
  'import/newline-after-import': 2
}
const complexityRules = {
  complexity: [2, 10],
  'max-statements': [2, 20],
  'max-depth': [2, 3],
  'max-params': [2, 3],
  'max-lines': [
    2,
    {
      max: 250,
      skipBlankLines: true,
      skipComments: true
    }
  ],
  'import/max-dependencies': [2, { max: 20 }]
}
const reactRules = {
  'react/jsx-key': 2,
  'react/jsx-no-bind': 2,
  'react/prefer-stateless-function': ['warn']
}
const codeStyleRules = {
  'arrow-body-style': [2, 'as-needed'],
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'return' }
  ]
}
const otherRules = {
  'no-console': ['error'],
  'no-unused-vars': ['error']
}

module.exports = {
  extends: ['universe/native'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    ...complexityRules,
    ...reactRules,
    ...importRules,
    ...codeStyleRules,
    ...otherRules
  },
  overrides: [
    {
      files: ['src/**/*.test.js', 'src/**/Navigation.screen.js'],
      rules: {
        'max-lines': 0
      }
    },
    {
      files: ['src/**/index.js', 'src/**/*.screen.js', 'src/**/*reducer.js'],
      rules: {
        'import/max-dependencies': 0
      }
    }
  ]
}
