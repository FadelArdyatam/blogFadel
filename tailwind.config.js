/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#6F4E37',
          DEFAULT: '#5A3A2B',
          dark: '#4A2F24',
        },
      },
    },
  },
  plugins: [],
}

