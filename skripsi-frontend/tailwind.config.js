/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      backgroundColor: {
        'custom-screen': '#FFF8E1',
      },
      fontFamily: {
        'dmsans': ['DMSans_400Regular'],
        'dmsans-bold': ['DMSans_700Bold'],
      },
      colors: {
        titleGreen: '#3F7D58',
        textGrey: '#6C8174',
      },
    },
  },
  plugins: [],
};
