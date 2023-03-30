/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["heebo"],
        inter: ["inter"],
      },
      colors: {
        primary: "#00B98E",
        dark: "#0E2E50",
        light: "#F3F6F8;",
        textColor: "#212529",
      },
    },
  },
  plugins: [],
};
