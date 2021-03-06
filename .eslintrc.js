module.exports = {
    extends: ['airbnb', 'prettier'],

    plugins: ['html', 'prettier', 'react-hooks'],

    parser: '@babel/eslint-parser',

    parserOptions: {
        ecmaVersion: 12,
        requireConfigFile: false,
        ecmaFeatures: {
            impliedStrict: true,
            classes: true,
        },
    },

    env: {
        browser: true,
        node: true,
        jest: true,
    },

    rules: {
        'arrow-parens': 'off',
        'arrow-body-style': ['warn', 'as-needed'],
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            },
        ],
        'no-unused-expressions': [
            'warn',
            {
                allowTaggedTemplates: true,
            },
        ],
        'no-param-reassign': [
            'warn',
            {
                props: false,
            },
        ],
        'no-console': 'off',
        'no-debugger': 'off',
        'no-await-in-loop': 0,
        'no-return-assign': ['error', 'except-parens'],
        'import/prefer-default-export': 'off',
        import: 'off',
        'func-names': 'off',
        'space-before-function-paren': 'off',
        'comma-dangle': 'off',
        'max-len': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'consistent-return': 'off',
        'react/display-name': 'error',
        'react/no-array-index-key': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prefer-stateless-function': 'off',
        'react/forbid-prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'jsx-a11y/accessible-emoji': 'off',
        'no-shadow': [
            'warn',
            {
                hoist: 'all',
                allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
            },
        ],
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx', 'tsx'],
            },
        ],
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 120,
                tabWidth: 4,
                semi: false,
            },
        ],
    },
}
