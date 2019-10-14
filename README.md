# Carimus ESLint Config for Web

The prettier config used by Carimus web projects. This config is a good base config for any JS project that uses
eslint.

-   Extends [`eslint-config-standard`](https://www.npmjs.com/package/eslint-config-standard) which is the eslint config
    that enforces standard JS code standards. [Read more about those here](https://standardjs.com/).
-   Uses `babel-eslint` parser with support for modules and `experimentalObjectRestSpread`.
-   Includes the [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest) plugin and configuration
    for e.g. Jest globals.
-   Includes the [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) preset config in
    order to unset any rules that would conflict with prettier.
-   Some minor rule overrides that:
    -   ban `var`
    -   ban `console` statement
    -   ban `undefined`
    -   require camel cased variable names
    -   some other minor tweaks built-up over time across projects to promote healthier code

## TODO

-   [ ] For React projects, there will be a separate config that includes the react-specific stuff that extends this
        one.
