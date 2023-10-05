/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      extend: {
        fontFamily: {
          Poppins: ["Inter", "sans-serif"],
        },
      },
      colors: {
        body: "#faf9f8",
        blackOne: "#1c232c",
        blackTwo: "#1e242e",
        blackThree: "#222222",
        blackForth: "#4a5359",
        grayOne: "#4a5359",
        grayTwo: "#d3d4da",
        grayThree: "#e1e3e3",
        grayForth: "#a0a3a6",
        grayFifth: "#a0a3a6",
      },
    },
  },
  plugins: [],
};
