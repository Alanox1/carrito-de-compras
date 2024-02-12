/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '48': '48px',
      },
      maxWidth: {
        '1250': '1250px',
      },
      gridTemplateColumns: {
        'auto-fill-minmax': 'repeat(auto-fill, minmax(320px, 1fr))',
      },
      colors: {
        'dodgerblue': '#1E90FF',
      },
      boxShadow: {
        '3xl': '0 0px 10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

