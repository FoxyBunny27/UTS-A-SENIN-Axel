/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        diffrent: "#C93D8D",
        primary: "#ffffff",
        purple: "#120227",
        purple2: "#1F0443",
        purple3: "#321655",
        gray: "#DADADA4D",
        black: "#000000",
        green: "#22EE98",
        red: "#FF1515",
      },
    },
    extend: {
      fontFamily:{
        Poppins: ["poppins", "serif"],
      },
    },
  },
  plugins: [],
}
