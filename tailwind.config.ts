/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'var-main': '#2B7DE4',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      screens: {
        sm: '768px',
        md: '1024px',
      },
    },
  },
};
