module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  plugins: [
    'import',
    'react',
    '@typescript-eslint',
    'functional',
    'jsx-a11y',
    'react-perf',
    'react-hooks',
    'sort-keys-fix',
    'unicorn',
    'regexp',
    'array-func',
    'eslint-plugin-jest-dom',
  ],
  extends: [
    'plugin:import/typescript',
    'next',
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/all',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:react/all',
    'plugin:react-perf/all',
    'plugin:jsx-a11y/strict',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:regexp/all',
    'plugin:array-func/all',
    'prettier',
  ],
  reportUnusedDisableDirectives: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['dist/', 'node_modules/', '.next/', '.eslintrc.js', 'next.config.js', 'src/types/'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['./'],
      },
    },
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1, 100, 1000, 10000],
        ignoreArrayIndexes: true,
        ignoreNumericLiteralTypes: true,
        ignoreEnums: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': ['warn'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
    ],
    'no-unused-vars': 'off',
    'no-implicit-coercion': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
    'arrow-body-style': 'error',
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-max-depth': ['error', { max: 3 }],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-duplicate-string': 'warn',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkShorthandImports: false,
        replacements: {
          env: false,
          prop: false,
          props: false,
          ref: false,
          refs: false,
        },
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'functional/functional-parameters': 'off',
    'functional/no-class': 'off',
    'functional/no-conditional-statement': 'off',
    'functional/no-expression-statement': 'off',
    'functional/no-mixed-type': 'off',
    'functional/no-return-void': 'off',
    'functional/no-throw-statement': 'off',
    'functional/prefer-type-literal': 'off',
    'import/extensions': ['off'],
    'import/prefer-default-export': 'off',
    'no-empty-function': 'off',
    'no-underscore-dangle': 'off',
    'react/boolean-prop-naming': 'off',
    'react/sort-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-literals': 'off',
    'react/no-unused-prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-newline': 'off',
    'require-await': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'array-func/prefer-array-from': 'off',
  },
  overrides: [
    {
      files: ['*{_,.}page.ts{,x}'],
      rules: {
        'import/no-default-export': 'off',
        'no-restricted-exports': 'off',
        'react/jsx-props-no-spreading': 'off',
        'functional/no-try-statement': 'off',
        'functional/immutable-data': 'off',
      },
    },
    {
      files: ['*{_,.}api.ts{,x}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
