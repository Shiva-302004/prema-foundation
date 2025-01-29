/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#1e3a8a',
            dark: '#60a5fa'
          },
          secondary: {
            light: '#f97316',
            dark: '#fb923c'
          },
          background: {
            light: '#ffffff',
            dark: '#111827'
          },
          card: {
            light: '#f3f4f6',
            dark: '#1f2937'
          }
        }
      },
    },
    plugins: [],
};
  