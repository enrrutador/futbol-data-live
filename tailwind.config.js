/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores base del sistema
        background: 'var(--bg-primary)',
        foreground: 'var(--text-primary)',
        
        // Brand colors - Inspirados en SofaScore Emerald
        brand: {
          DEFAULT: '#10b981',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        
        // Surface colors - Slate palette
        surface: {
          DEFAULT: '#1e293b',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        
        // Functional colors
        live: {
          DEFAULT: '#ef4444',
          subtle: 'rgba(239, 68, 68, 0.1)',
        },
        accent: {
          DEFAULT: '#10b981',
          hover: '#059669',
          subtle: 'rgba(16, 185, 129, 0.1)',
        },
        
        // Result colors
        result: {
          win: '#22c55e',
          draw: '#f59e0b',
          loss: '#ef4444',
        },
        
        // Sofascore palette
        sofascore: {
          bg: '#0b1120',
          card: '#1e293b',
          accent: '#10b981',
          text: '#f8fafc',
          muted: '#94a3b8',
        },
        
        // Dark mode specific
        dark: {
          bg: '#0b1120',
          card: '#1e293b',
          elevated: '#252f47',
          border: 'rgba(148, 163, 184, 0.1)',
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-accent': '0 0 30px rgba(16, 185, 129, 0.4)',
      },
      
      borderRadius: {
        'card': '12px',
        'card-lg': '16px',
        'badge': '9999px',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      },
      
      animation: {
        'pulse-live': 'pulse-live 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.3s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      
      keyframes: {
        'pulse-live': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.5)',
          },
          '50%': { 
            opacity: '0.9',
            boxShadow: '0 0 0 8px transparent',
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
