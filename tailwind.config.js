/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage:{

        "signin":"url(/src/assets/images/signinbg.jpg)",
        "moviecollage":"url(/src/assets/images/MovieCollage.jpg)",

       
      
      }


    },
  },
  plugins: [],
}


