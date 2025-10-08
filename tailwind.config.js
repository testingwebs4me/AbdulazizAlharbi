export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef1f7',
          100: '#fde4f0',
          200: '#fcc9e1',
          300: '#faa3cb',
          400: '#f76daa',
          500: '#f0388a',
          600: '#e01570',
          700: '#c00f5e',
          800: '#9f0f4f',
          900: '#411d2b',
        },
        dark: {
          50: '#f8f7f8',
          100: '#e8e6e9',
          200: '#d1cdd3',
          300: '#a9a1ab',
          400: '#7d717f',
          500: '#5f5360',
          600: '#4a3f4d',
          700: '#3a313d',
          800: '#217720',
          900: '#110e15',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
};
