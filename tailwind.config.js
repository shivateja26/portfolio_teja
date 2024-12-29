/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        Sans:['Inter','Sans-Serif']
      }
    },
  },
  plugins: [tailwindScrollbar],
}

