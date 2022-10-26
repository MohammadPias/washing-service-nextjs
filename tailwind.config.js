/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fc4949',
        'primary-light': '#dd2222',
        'secondary': '#0f182a',
        'secondary-light': '#182233',
        'accent': '#142e59',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [require("daisyui")],
}
