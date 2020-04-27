# What is this?

Common ESLint configurations of the codeTakt's project.

## Usage

Add this configurations and ESlint to your repository.

    npm i -D eslint eslint-config-codetakt
    npx install-peerdeps --dev eslint-config-codetakt

or

    yarn add --dev eslint-config-codetakt
    npx install-peerdeps --dev --yarn eslint-config-codetakt

Note that, this will also introduce a number of unnecessary packages for your product. You can delete unnecessary things manually.

Set to `extends` (This example is YAML format).

```yaml
---
extends:
  - codetakt

  # These are optional settings.
  # If you want to use them, uncomment that.
  # - codetakt/react
  # - codetakt/vue
  # - codetakt/typescript
```

## Note

This configuration base on the [eslint-config-standard][] and [prettier][]. Those configuration is quite opinionated.

Example:

```json
{
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },

  "env": {
    "es6": true,
    "node": true
  },

  "plugins": [
    "import",
    "node",
    "promise",
    "standard"
  ],
```

Cite from: <https://github.com/standard/eslint-config-standard/blob/v14.1.0/eslintrc.json#L1-L20>

If your project conflicts with that configurations, please overwrite them.

[eslint-config-standard]: https://github.com/standard/eslint-config-standard "ESLint Config for JavaScript Standard Style."
[prettier]: https://prettier.io/docs/en/integrating-with-linters.html "Integrating with Linters · Prettier"

## Semantic Versioning Guidelines

- When bumping ESLint or base rule, bump corresponding version part of this module.
  - e.g. When bumping ESLint 1.2.3 to 1.3.4, bump our minor version.

Plus:

- Tighten (and relax) rules -> Major
- Relax rules -> Minor
