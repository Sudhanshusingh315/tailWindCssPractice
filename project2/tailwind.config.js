/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "meow-purple": "#5267DF",
        "meow-red": "#FA5959",
        "meow-blue": "#242A45",
        "meow-grey": "#9194A2",
        "meow-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
