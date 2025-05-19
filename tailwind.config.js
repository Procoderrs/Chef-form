/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "gray-border": "rgba(135,135,135,0.2)",
      },
      screens: {
        coxs: '375px',
        xs: '425px',
        sm: '576px',
        comd: '650px',
        md: '768px',
        colg: '850px',
        lg: '992px',
        '2coxl': '929.5px',
        coxl: '1050px',
        cocoxl: '1100px',
        xl: '1200px',
        '12xl': '1270px',
        co2xl: '1320px',
        '2xl': '1440px',
        '1540scrn': '1540px',
        '3xl': '1660px',
        '4xl': '1800px',
        max: '2000px',
      },
    },
  },
  plugins: [],
};
