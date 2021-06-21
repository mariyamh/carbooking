module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['public/apidoc', 'src/utils', 'node_modules'],
  rules: {
    'import/no-cycle': 1,
    'no-unused-vars': 0,
    'max-len': 1,
  },
};
