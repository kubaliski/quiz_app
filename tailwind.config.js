/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    // Con Tailwind CSS v4, la detección automática de contenido está habilitada por defecto
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }