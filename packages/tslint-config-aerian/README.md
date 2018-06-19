# tslint-config-aerian

This is a shareable TSLint configuration that enforces a strict and opinionated
TypeScript coding style. Formatting is based on Prettier, and tslint:recommended
but also includes rules from tslint-react, tslint-eslint-rules and
tslint-consistent-codestyle.

To install, run:

```sh
#npm
npm i -D tslint prettier tslint-config-aerian

#yarn
yarn add --dev tslint prettier tslint-config-aerian
```

To use it, create the following tslint.json:

```json
{
    "extends": ["tslint-config-aerian"]
}
```

If you are using JavaScript you should use eslint-config-aerian instead.
