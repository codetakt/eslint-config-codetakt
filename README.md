# What is this?

Common ESLint configurations of the codeTakt's project.

## Usage

Add this configurations and ESlint to your repository.

    npm i -D eslint eslint-config-codetakt

Set to `extends` (This example is YAML format).

```yaml
---
extends: codetakt
```

## Note

This configuration extends the [eslint-config-standard][], and that configuration is quite opinionated.

Example:

```json
{
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
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
  ]
```

Cite from: <https://github.com/standard/eslint-config-standard/blob/v10.2.1/eslintrc.json#L1-L14>

If your project conflicts with that configurations, please overwrite them.

[eslint-config-standard]: https://github.com/standard/eslint-config-standard "ESLint Config for JavaScript Standard Style."

## Semantic Versioning Guidelines

- When bumping ESLint or base rule, bump corresponding version part of this module.
  - e.g. When bumping ESLint 1.2.3 to 1.3.4, bump our minor version.

Plus:

- Tighten (and relax) rules -> Major
- Relax rules -> Minor
