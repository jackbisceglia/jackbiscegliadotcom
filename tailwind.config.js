const { url } = require("inspector");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/images/background.png')",
      },
      colors: {
        navbar: "rgba(17, 8, 31, 0.25)",
        purple: {
          50: "#f5e5ff",
          100: "#dab7fd",
          200: "#c188f7",
          300: "#a75af3",
          400: "#8d2bee",
          500: "#7411d4",
          600: "#5a0ca6",
          700: "#400878",
          800: "#27044a",
          900: "#0f001e",
        },
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
