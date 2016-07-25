# eslint-config

codeTakt プロジェクト共通の ESLint ルールです

## 使い方

リポジトリの `package.json` に eslint とルールを追加します

    npm i -D eslint @codetakt/eslint-config

`.eslintrc` の extends に追加します。

    {
      "extends": ["@codetakt"]
    }

なお @codetakt/eslint-config 自体が `extends: "eslint:recommended"` を  
含みますので eslint:recommended は不要です。
