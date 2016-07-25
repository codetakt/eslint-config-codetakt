"use strict"

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "script"
  },
  extends: "eslint:recommended",
  rules: {
    "camelcase": "warn",
    "eol-last": "warn",
    "eqeqeq": ["error", "smart"],
    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-spaced-func": "warn",
    "no-unused-vars": ["warn", { "args": "none" }],
    "no-var": "error",
    "quotes": ["warn", "double", "avoid-escape"],
    "semi": ["error", "never"],
    "space-before-function-paren": ["warn", "never"],
    "strict": "error"
  }
}
