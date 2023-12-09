module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#f8fafc',
        greyLight:'#cbd5e1',
        white:'#fff',
        textColor:'#333',
        greyNormal:'#94a3b8',
        danger:'#dc2626',
        greyHover:'#e2e8f0',
        bluePrimary:'#0284c7'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
