/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fwd: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(2px)' },
        }
      },
      fontFamily: {
        "poppins": ["'Poppins'",'sans-serif'],
        "firacode": ["'Fira Code'", 'monospace']
      },
      animation: {
        fwd: 'fwd 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} 