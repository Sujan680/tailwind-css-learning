/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs' : '340px',
      // => @media (min-width: 340px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#34BG65',
        secondary: '#12F000',
        ternary: '#FFFGGG',
      }
    },
    keyframes: {
      spinMe: {
        '0%' : { transform: 'rotate(0deg)' },
        '100%' : { transform: 'rotate(360deg)' }
      }
    },
    animation: {
      rotate: 'spinMe 2s 0s linear infinite'
    }
  },
  plugins: [],
}