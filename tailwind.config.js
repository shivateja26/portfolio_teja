/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    './index.html', // Your main HTML file
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Sans:['Inter','Sans-Serif']
      }
    },
  },
  plugins: [tailwindScrollbar],
}

