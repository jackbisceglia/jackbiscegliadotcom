const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'rotate(-7.5deg)',
          },
          '25%': {
            transform: 'rotate(7.5deg)',
          },
          '50%': {
            transform: 'rotate(-3deg)',
          },
          '75%': {
            transform: 'rotate(3deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out ',
      },
      backgroundImage: {
        'main-bg': "url('/images/background.png')",
      },
      // fontSize: {},
      colors: {
        navbar: 'rgba(17, 8, 31, 0.3)',
        purple: {
          50: '#f5e5ff',
          100: '#dab7fd',
          200: '#c188f7',
          300: '#a75af3',
          400: '#8d2bee',
          500: '#7411d4',
          600: '#5a0ca6',
          700: '#400878',
          800: '#27044a',
          900: '#0f001e',
        },
        coolmint: {
          200: '#E5EEEB',
          300: '#C7CECC',
          400: '#5F7D76',
          500: '#88EFE0',
          // 600: '#1BA894',
          600: '#1DB39E',
          // 600: '#1DC6AE',
          700: '#131818',
          800: '#0B0D0D',
        },
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    // ...
  ],
};
