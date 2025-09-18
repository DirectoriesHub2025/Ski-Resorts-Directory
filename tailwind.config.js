/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,svelte,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'teal',
        secondary: '#6B7280',
        accent: 'teal'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}