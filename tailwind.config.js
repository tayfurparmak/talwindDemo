/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  purge: ['./src/**/*.html'],
  darkMode:'class',
  content: [],
  theme: {
 
    extend: {
      flex: {
        '2': '2 2 0%'
      },
      colors: {
        300:'gray',
        700 : 'black',
        prototurk : '#32445a',
        twitter : '#1da1f2'
      },
      spacing : {
        '15' : '3.75 rem'
      },
      zIndex: {
        '-1' : '-1',
      }
     
    },
  },
variants: {
  extends:{},
},
plugins:[],
}