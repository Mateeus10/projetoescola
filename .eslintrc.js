module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: 'off',
    "class-methods-use-this": 'off',
    "no-param-reassign": "off",
    "import/extensions": "off",
    "no-console": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    camelcase: "off",
  },

};
