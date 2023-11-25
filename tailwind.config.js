/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-green-136deg': 'linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)',  
        'blue-green-134deg': 'linear-gradient(134deg, #0076BE 11.95%, #95D8EB 100%)',  
        'blue-green-141deg': 'linear-gradient(141deg, #48BF91 11.98%, #8BD9C7 83.25%)', 
        'hover':' linear-gradient(136deg, #48BF91 3.65%, #0076BE 89.63%);' 
       
      },
      fontFamily:{
        'rubik':'rubik'
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}

