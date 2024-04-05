/** @type {import('tailwindcss').Config} */
export default {
  content: [],  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

