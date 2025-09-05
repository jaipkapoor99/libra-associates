import type { Config } from 'tailwindcss';

const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'light-blue': '#a0c4ff',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
