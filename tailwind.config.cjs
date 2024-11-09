/** @type {import('tailwindcss').Config} */

const darkBlueTheme = '#192A68'
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlueTheme:darkBlueTheme,
      }
    },
  },
  plugins: [],
};
