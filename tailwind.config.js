/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily :{
      'stretch_pro' : ['Stretch Pro', 'sans-serif'],
      'underated':[ 'Underrated' , 'sans-serif'],
      'poppin': ['Poppins', 'sans-serif'],
      'syne':['Syne', 'sans-serif']
    },
    extend: {
      colors : {
        primary : "#CDE648",
        secondary:"#110725",
        second_grey:"#CBC9D1"
      },
      aspectRatio: {
        '4/3': '3 / 4',
      }
    },
  },
  plugins: [],
}