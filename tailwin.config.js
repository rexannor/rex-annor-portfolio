/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': 'hsl(0, 0%, 6.7%)',
        'dark-secondary': 'hsl(0, 0%, 13.3%)',
        'light-bg': 'hsl(0, 0%, 97.6%)',
        'text-primary': 'hsl(0, 0%, 20%)',
        'text-secondary': 'hsl(0, 0%, 40%)',
        'nav-light': 'hsl(0, 0%, 80%)',
      },
    },
  },
  plugins: [],
}
