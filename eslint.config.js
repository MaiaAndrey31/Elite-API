import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Configurações base do ESLint
  {
    ignores: ['node_modules/', 'dist/'],
  },
  js.configs.recommended,
  
  // Configurações do TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      'prettier': prettierConfig,
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
      ...tsPlugin.configs['eslint-recommended'].rules,
    },
  },

  // Configurações de formatação
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Integração com Prettier (deve vir por último para sobrescrever regras conflitantes)
  prettierConfig,
];
