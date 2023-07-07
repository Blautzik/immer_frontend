/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {


    extend: {
<<<<<<< HEAD
      colors:{
        primary: '#ff6c00'
=======
      colors: {
        'immer-orange': '#FF6C00',
>>>>>>> f9740e8365f239bc6578830bd61a9c1224d65446
      },
    },
  },
  plugins: [],
}
