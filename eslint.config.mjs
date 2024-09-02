// eslint.config.js
import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
    {
        // Specify the files to be linted
        files: ['**/*.js', '**/*.ts', '**/*.tsx'],

        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: '**/*tsconfig.json', // Make sure to include this if you have a tsconfig.json file
            },
        },

        // Use ESLint plugins
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            prettier: eslintPluginPrettier,
        },

        // Define ESLint rules
        rules: {
            // Prettier integration rule
            ...typescriptPlugin.configs.recommended.rules,

            'prettier/prettier': 'error', // Treat Prettier formatting issues as ESLint errors
        },
    },
    { ignores: ['tonKeeper/*', 'playwright*', './package*', '**/pre-commit'] },

    includeIgnoreFile(gitignorePath),

    eslintConfigPrettier, // Disable conflicting ESLint rules
];
