/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },

      colors: {
        brand: "#1F2629",
        brand1: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
