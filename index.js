"use strict"

module.exports = {
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "script"
  },
  extends: "eslint:recommended",
  rules: {
    "brace-style":["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["warn"],
    "eol-last": ["warn"],
    "eqeqeq": ["error", "smart"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-console": ["warn"],
    "no-debugger": ["warn"],
    "no-spaced-func": ["warn"],
    "no-unused-vars": ["warn", { "args": "none" }],
    "no-var": ["error"],
    "quotes": ["warn", "double", {"avoidEscape": true}],
    "semi": ["error", "never"],
    "space-before-function-paren": ["warn", "never"],
    "strict": ["error"]
  }
}
