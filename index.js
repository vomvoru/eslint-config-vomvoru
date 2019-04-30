const airbnbBaseStyleRules = require('eslint-config-airbnb-base/rules/style').rules;
const airbnbBaseVariablesRules = require('eslint-config-airbnb-base/rules/variables').rules;

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    complexity: ['warn', { max: 10 }],
    'max-lines': ['warn', { max: 100, skipBlankLines: true, skipComments: true }],
    'max-depth': ['warn', 2],

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 100,
      },
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/issues/265
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', 'array'],
        '@typescript-eslint/ban-types': 'off',
        camelcase: 'off',
        '@typescript-eslint/camelcase': airbnbBaseStyleRules.camelcase,
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/generic-type-naming': 'off',
        indent: 'off',
        '@typescript-eslint/indent': airbnbBaseStyleRules.indent,
        '@typescript-eslint/interface-name-prefix': ['error', 'never'],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: false,
            },
            singleline: {
              delimiter: 'none',
              requireLast: false,
            },
          },
        ],
        '@typescript-eslint/member-naming': 'off',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': airbnbBaseStyleRules['no-array-constructor'],
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-object-literal-type-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-triple-slash-reference': 'error',
        '@typescript-eslint/no-type-alias': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': airbnbBaseVariablesRules['no-unused-vars'],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
      },
    },
  ],
};
