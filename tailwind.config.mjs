/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8f4',
          100: '#d6efe4',
          200: '#b0dfca',
          300: '#7fc7aa',
          400: '#4daa86',
          500: '#2e8f6b',
          600: '#207356',
          700: '#1a5c46',
          800: '#174a3a',
          900: '#143d30',
        },
      },
    },
  },
  plugins: [],
};
