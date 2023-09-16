import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(270deg, #00c4e2 13.09%, #1B3F71 74.33%)`
      })
,
      colors: {
        primary: "#1B3F71",
        secondary:"#00c4e2"
      }
    },
  },
  plugins: [],
}
export default config
