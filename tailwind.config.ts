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
      })
      ,
      colors: {
        primary: "#1B3F71",
        secondary: "#00c4e2",
        orange: "#F79214",
        grey: "#979797",
        blue1:"rgba(0, 196, 226, 0.07)"
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
