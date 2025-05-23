/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d7567',    // Color principal
        secondary: '#d8775d',  // Color secundario
        'gray-custom': '#7c7e7b',
      },
    },
  },
  plugins: [],
}

