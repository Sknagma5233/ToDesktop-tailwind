/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors :{
        'primary': '#ee0181'
      }
    },
    fontFamily:{
      'display':['Poppins','sans-serif'],
      'body':['Roboto','sans-serif']
  },
  plugins: [],
}
}
