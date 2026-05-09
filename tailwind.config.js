/** @type {import('tailwindcss').Config} */
// Palette + keyframes mirror minecraft/docs/index.html (source: AnubisWorld site).
// Goal: launcher UI is visually 1:1 with the website.
module.exports = {
  content: [
    './app/**/*.ejs',
    './app/**/*.js',
    './app/assets/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#3b1574',
          950: '#1e0a4a'
        },
        violet: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          900: '#3b0764',
          950: '#1f0238'
        },
        egypt: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          900: '#164e63'
        },
        amber: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706'
        },
        surface: {
          800: '#0c0a18',
          900: '#070612',
          950: '#040309'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow:  'glow 2s ease-in-out infinite alternate',
        twinkle: 'twinkle 4s ease-in-out infinite',
        auraPulse: 'auraPulse 5s ease-in-out infinite',
        borderPulse: 'borderPulse 3s ease-in-out infinite',
        particleFloat: 'particleFloat linear infinite'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' }
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(139,92,246,.25)' },
          '100%': { boxShadow: '0 0 50px rgba(139,92,246,.55)' }
        },
        twinkle: {
          '0%,100%': { opacity: '.25', transform: 'scale(1)' },
          '50%':     { opacity: '.85', transform: 'scale(1.4)' }
        },
        auraPulse: {
          '0%,100%': { transform: 'scale(1)',    opacity: '.9' },
          '50%':     { transform: 'scale(1.08)', opacity: '1'  }
        },
        borderPulse: {
          '0%,100%': { borderColor: 'rgba(139,92,246,.18)' },
          '50%':     { borderColor: 'rgba(168,85,247,.4)' }
        },
        particleFloat: {
          '0%':   { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) scale(1)', opacity: '0' }
        }
      }
    }
  },
  plugins: []
};
