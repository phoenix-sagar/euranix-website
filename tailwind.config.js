/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      animation: {
        'phoenix-rise': 'phoenixRise 2s ease-out forwards',
        'flame-sweep': 'flameSweep 3s infinite',
      },
      keyframes: {
        phoenixRise: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px) scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        flameSweep: {
          '0%': {
            left: '-100%',
          },
          '100%': {
            left: '100%',
          },
        },
      },
    },
  },
  plugins: [],
};