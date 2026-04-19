/** @type {import('tailwindcss').Config} **/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B262C',
        navy: '#0F4C75',
        accent: '#1B98E0',
        light: '#E2EAF4',
      }
    }
  },
  plugins: []
}
