module.exports = {
    extends: [
        "tslint:recommended",
        "tslint-react",
        "tslint-eslint-rules",
        "tslint-consistent-codestyle",
        "tslint-config-prettier"
    ],
    rules: {
        "interface-name": [true, "never-prefix"],
        "object-literal-sort-keys": false,
        "no-empty-interface": false,
        "no-submodule-imports": false,
        "jsx-no-lambda": false,
        "no-console": false,
        "no-empty": false,
        radix: false,
        "jsx-no-multiline-js": false,
        "only-arrow-functions": [true, "allow-declarations"],
        "no-invalid-this": true,
        "ban-comma-operator": true,
        "no-arg": true,
        "no-duplicate-case": true,
        "no-empty-character-class": true,
        "no-ex-assign": true,
        "no-extra-boolean-cast": true,
        "no-extra-semi": true,
        "no-inner-declarations": true,
        "no-invalid-regexp": true,
        "no-irregular-whitespace": true,
        "no-regex-spaces": true,
        "no-sparse-arrays": true,
        "no-unexpected-multiline": true,
        "valid-jsdoc": true,
        "valid-typeof": true,
        "early-exit": { severity: "warning" },
        "no-collapsible-if": { severity: "warning" },
        "no-unnecessary-else": { severity: "warning" },
        "no-accessor-recursion": { severity: "warning" },
        "no-else-after-return": {
            severity: "warning",
            options: "allow-else-if"
        },
        "no-return-undefined": { severity: "warning" },
        "no-static-this": { severity: "warning" },
        "no-var-before-return": {
            severity: "warning",
            options: "allow-destructuring"
        },
        "prefer-const-enum": { severity: "warning" },
        "prefer-while": { severity: "warning" }
    }
};
