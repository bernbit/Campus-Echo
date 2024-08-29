/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F2634",
        secondary: "#3CD184",
        accent: "#3E9BD4",
        extra: "#3482B3",
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
