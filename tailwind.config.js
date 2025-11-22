/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    // Con Tailwind CSS v4, la detección automática de contenido está habilitada por defecto
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        },
        colors: {
          brand: {
            50:  'rgb(var(--color-brand-50-rgb) / <alpha-value>)',
            100: 'rgb(var(--color-brand-100-rgb) / <alpha-value>)',
            200: 'rgb(var(--color-brand-200-rgb) / <alpha-value>)',
            300: 'rgb(var(--color-brand-300-rgb) / <alpha-value>)',
            400: 'rgb(var(--color-brand-400-rgb) / <alpha-value>)',
            500: 'rgb(var(--color-brand-500-rgb) / <alpha-value>)',
            600: 'rgb(var(--color-brand-600-rgb) / <alpha-value>)',
            700: 'rgb(var(--color-brand-700-rgb) / <alpha-value>)',
            800: 'rgb(var(--color-brand-800-rgb) / <alpha-value>)',
            900: 'rgb(var(--color-brand-900-rgb) / <alpha-value>)'
          }
        }
      },
    },
    plugins: [],
  }