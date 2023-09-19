import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(270deg, #00c4e2 13.09%, #1B3F71 74.33%)`,
        'gradient-header': `linear-gradient(270deg, #A049E9 36.04%, #00ADDC 70.91%)`,
        'gradient-header-card': `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(rgb(190, 54, 235), rgb(0, 196, 226))`,
         'calculate': "url('/home/calc.png')"
      })
      ,
      colors: {
        primary: "#1B3F71",
        secondary: "#00c4e2",
        orange: "#F79214",
        grey: "#979797",
        grey1: "#263238",
        grey2: "#888282",
        blue1:"rgba(0, 196, 226, 0.07)",
        blue2:"#00ADDC",
        pink:"#C92FEC",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      screens: {
        s1200: "1200px",
        s1400: "1400px",
      },
    }
  },
  plugins: [],
}
export default config
