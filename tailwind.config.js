/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    maxWidth: {
      'logo': '3rem',
    },
    extend: {
      colors: {
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        lightGray: 'hsl(0, 0%, 98%)'
      },
    },
  },
  plugins: [],
}
