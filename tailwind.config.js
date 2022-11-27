/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colorWhite: '#fafafa',
        colorBlack: '#111215',
        colorGray: '#1f1f22'
      },
    },
  },
  plugins: [],
}
