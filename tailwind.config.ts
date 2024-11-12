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
        'var-epiday-black': '#2B2B2B',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 3px 12px 0px rgba(0, 0, 0, 0.09)',
        big: '0px 0px 36px 0px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        ss: '550px',
        sm: '768px',
        md: '1024px',
      },
    },
  },
};
