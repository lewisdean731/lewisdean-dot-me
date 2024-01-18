import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#fefcfb',
        blue1: '#1282a2',
        blue2: '#034078',
        blue3: '#001f54',
        blue4: '#0a1128',
      },
    },
  },
  plugins: [],
}
export default config
