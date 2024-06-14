/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'osward': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      fontSize:{
        '10xl':'10rem',
      }
    },
  },
  plugins: [],
}

