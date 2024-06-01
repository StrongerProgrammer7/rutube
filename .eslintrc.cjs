module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', "build/*", "*.config.*"],
    parser: '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "ecmaFeatures": {
            "tsx": true
        }
    },
    plugins: ["@typescript-eslint", "simple-import-sort", "react", "css-modules",
        "css"],
    rules: {

        "indent": [
            "error",
            "tab",
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eol-last": ["error", "always"],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 3
            }

        ],
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "prefix": ["I"],
                "custom":
                {
                    "regex": "^I[A-Z]",
                    "match": false
                }
            },
            {
                "selector": ["variable"],
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "should", "has", "can", "did", "will"]
            }

        ],
        "brace-style": ["error", "allman"],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "no-mixed-spaces-and-tabs": ["off", "smart-tabs"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "css/no-unknown-property": "error",
        "css/no-unknown-unit": "error",
        "css/named-color": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "semi-spacing": ["error", { "before": false, "after": true }],
        "react-hooks/exhaustive-deps": "off"
    },
};
