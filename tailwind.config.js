/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#1182c5",
        secondary:"#2aa6df",
      },

      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"3rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        }
      }
    },
  },
  plugins: [],
}

