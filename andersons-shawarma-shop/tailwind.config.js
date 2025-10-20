/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        night: ["TheNightWatch", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },

      colors: {
        brand: "#1F2629",
        brand1: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
