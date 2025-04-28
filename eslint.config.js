import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Archivos a ignorar
  { ignores: [
    'dist/**',
    'dev-dist/**', // Añadido para ignorar los archivos generados de PWA
    'build/**',
    'node_modules/**'
  ]},
  {
    // Configuración para archivos JavaScript y JSX
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        vi: 'readonly', // Añadido para reconocer 'vi' de Vitest
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // Personalización para ignorar variables no utilizadas que comienzan con mayúscula
      // o con guión bajo, útil para props como RouterComponent
      'no-unused-vars': ['error', {
        varsIgnorePattern: '^[A-Z_]',
        argsIgnorePattern: '^_|^[A-Z]', // Añadido para ignorar argumentos de función que comienzan con mayúscula
      }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // Configuración específica para los archivos de pruebas
  {
    files: ['**/*.test.{js,jsx}', '**/tests/**/*.{js,jsx}', '**/setupTests.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // Añadir globales de Jest si las necesitas
        vi: 'readonly',   // Añadir vi de Vitest como global
      },
    },
  },
]