/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'real-screen': 'calc(var(--vh) * 100)',
      },
      colors: {
        'var-main': '#2B7DE4',
        'var-epiday-black': '#2B2B2B',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      screens: {
        ss: '550px',
        sm: '768px',
        md: '1024px',
      },
    },
  },
};
