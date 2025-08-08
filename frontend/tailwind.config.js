/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'brand-purple': '#6A5ACD',
        'brand-pink': '#FF69B4',
        'brand-blue': '#00BFFF',
        'brand-light': '#EDE8F5',
        'brand-muted': '#ADBBDD',
        'brand-neutral': '#8697C4',
        'brand-accent': '#7091E6',
        'brand-dark': '#3D52A0',
        'brand-black': '#1F1F1F',
        'brand-white': '#F8F8FF',
        'brand-brick': '#E11D48',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rgbBorderAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          "0%, 100%": { "background-position": "left -200px top 0" },
          "50%": { "background-position": "right -200px top 0" },
        },
      },
      animation: {
        flicker: 'flicker 1.5s infinite',
        fadeInOut: 'fadeInOut 2s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        gradientX: 'gradientX 4s ease infinite',
        rgbBorderAnimation: 'rgbBorderAnimation 6s ease infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
      backgroundSize: {
        '200': '200% 200%',
        'size-200': '200% 200%',
        'size-300': '300% 300%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};