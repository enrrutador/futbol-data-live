/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        promiedos: {
          bg: '#0f172a',
          card: '#1e293b',
          accent: '#10b981',
        },
      },
    },
  },
  plugins: [],
}
