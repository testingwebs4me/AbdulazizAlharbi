export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f4f8',
          100: '#c5e4ef',
          200: '#9dd1e3',
          300: '#6fb9d4',
          400: '#4ba5c7',
          500: '#38667E',
          600: '#2f5468',
          700: '#254352',
          800: '#1B435E',
          900: '#0f2638',
        },
        dark: {
          50: '#f3f3f8',
          100: '#e0e0eb',
          200: '#c8c8dc',
          300: '#a8a8c5',
          400: '#8484a8',
          500: '#563F57',
          600: '#3A2B50',
          700: '#2b2040',
          800: '#1f1830',
          900: '#161638',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
};
