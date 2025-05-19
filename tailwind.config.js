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
        "primary-color": "#ffa12e",
        "bg-color": "#f6f6f6",
      },
      screens: {
        coxs: '375px',
        xs: '425px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1660px',
      },
    },
  },
  plugins: [],
};
