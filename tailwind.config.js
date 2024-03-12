/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A4D68",
        secondary: "#088395",
        accent: "#05BFDB",
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
