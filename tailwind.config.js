/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F2634",
        secondary: "#15F5BA",
        accent: "#3E9BD4",
        extra: "#3f515d",
      },
      backgroundImage: {
        school:
          "linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)),url(/src/img/school.jpg)",
      },
      fontFamily: {
        koulen: ["Koulen", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
