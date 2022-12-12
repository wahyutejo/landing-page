/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screen: {
      sm: "min-width: 640px",
      md: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
