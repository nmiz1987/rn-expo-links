module.exports = {
  root: true,
  extends: ['universe/native', 'prettier'],
  plugins: ['import'],
  rules: {
    'import/order': ['warn', { alphabetize: { order: 'asc' } }], // group and then alphabetize lines - https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'no-duplicate-imports': 'error',
    quotes: ['error', 'signle', { avoidEscape: true }], // signle quote unless usign interpolation
    'react/jsx-uses-react': 'off',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react/react-in-jsx-scope': 'off',
    'sort-imports': ['warn', { ignoreDeclarationSort: true, ignoreMemberSort: false }], // alphabetize named imports - https://eslint.org/docs/rules/sort-imports
  },
};
