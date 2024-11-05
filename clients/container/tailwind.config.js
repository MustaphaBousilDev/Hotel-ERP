<<<<<<< HEAD
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:'#f8fafc',
      greyLight:'#cbd5e1',
      white:'#fff',
      textColor:'#333',
      greyNormal:'#94a3b8',
      danger:'#dc2626'
    },
    extend: {},
=======
const { fontFamily } =require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/index.html'
  ],
  darkMode: 'class', // enable dark mode
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors:{
        primary:'#f8fafc',
        greyLight:'#cbd5e1',
        white:'#fff',
        textColor:'#333',
        greyNormal:'#94a3b8',
        danger:'#dc2626',
        greyHover:'#e2e8f0',
        bluePrimary:'#0284c7',
        dark:"#1b1b1b",
        light:"#f5f5f5",
        //dark component colors
        darkGrey: "#1a1a1a",
        darkTopBar: "#333333",
        darkSideBar: "#121212",
        darkRightBar: "#1e1e1e",
        darkButton:"#4CAF50",
        darkButtonHover:"#45a049"
      },
      width:{
        '250px':'250px',
      },
      
    },
>>>>>>> typeorm
  },
  variants: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [],
=======
  plugins: [
    
  ],
>>>>>>> typeorm
}
