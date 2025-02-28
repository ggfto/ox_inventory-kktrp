/** @type {import('tailwindcss').Config} */
import { colorManager } from './src/store/ColorManager';
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colorManager.getAllColors()
      },
      maxWidth: {
        '8xl': '88rem'
      },
      opacity: {
        '15': '.15'
      },
      screens: {
        'k': '1900px',
        '2k': '2500px',
        '4k': '3800px'
      },
    },
  },
  plugins: [],
}
