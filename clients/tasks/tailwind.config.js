/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:[
    './src/**/*.html',
    './src/**/*.ts',
    './src/app/tasks/tasks.component.html',
    './src/app/components/breadcrumbs/breadcrumbs.component.html'
  ],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':'#3B82F6',
        'red':'#EF4444',
        'green':'#34D399',
        'yellow':'#FDE68A',
        'blueLight':'#DBEAFE',
        'greenLight':'#D1FAE5',
        'redLight':'#FEE2E2',
        'yellowLight':'#FFFBEB',
        'black':'#111827',
        'primary':'#F9FAFB',
        'gray':'#94a3b8',
        
      }
    },
  },
  plugins: [],
}

