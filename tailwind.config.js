/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      flexBasis:{
        "1/8":"12.5%",
        "7/8":"87.5%"
      },
      width:{
        "70":"17.5rem"
      }
    },
  },
  plugins: [],
}
