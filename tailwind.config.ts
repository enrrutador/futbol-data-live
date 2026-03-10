<<<<<<< HEAD
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { 500: '#10b981', 600: '#059669' },
        live: { DEFAULT: '#ef4444', pulse: '#f87171' },
      },
    },
  },
  plugins: [],
};

export default config;
=======
export default {content: ['./src/**/*.{js,tsx,jsx}'], theme: {extend: {}}}
>>>>>>> b793163b10f4975ee2bc3680f6a6c744f50910c4
