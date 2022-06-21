/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "530px",
      md: "770px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "pack-train": "url(../public/img/bg1.jpg)",
      },
      boxShadow: {
        shadow: "0px 0px 25px rgba(0, 0, 0, 0.15)",
        shadow1: "0px 0px 30px rgba(0,0,0, 0.40)",
      },
      fontFamily: {
        font1: "Montserrat",
        font2: "Lato",
      },
    },
  },
  plugins: [],
};
