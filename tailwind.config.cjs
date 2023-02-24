/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-red': 'hsl(1, 90%, 64%)',
        'c-blue': 'hsl(219, 85%, 26%)',

        'c-very-dark-blue': 'hsl(224, 21%, 14%)',
        'c-dark-grayish-blue': 'hsl(219, 12%, 42%)',
        'c-grayish-blue': 'hsl(219, 14%, 63%)',
        'c-light-grayish-blue-darker': 'hsl(205, 33%, 90%)',
        'c-light-grayish-blue': 'hsl(211, 68%, 94%)',
        'c-very-light-grayish-blue': 'hsl(210, 60%, 98%)',
        'c-white': 'hsl(0, 0%, 100%)',
      },
      screens: {
        desk: '375px',
      },
    },
  },
  plugins: [],
};
