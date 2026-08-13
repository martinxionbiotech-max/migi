/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

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
          950: '#0c241d',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(16 24 40 / 0.05), 0 1px 3px 0 rgb(16 24 40 / 0.1)',
        'card-hover':
          '0 10px 25px -5px rgb(16 24 40 / 0.1), 0 8px 10px -6px rgb(16 24 40 / 0.1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-links': theme('colors.brand.600'),
            '--tw-prose-bold': theme('colors.gray.900'),
            '--tw-prose-counters': theme('colors.brand.600'),
            '--tw-prose-bullets': theme('colors.brand.400'),
            '--tw-prose-quotes': theme('colors.gray.700'),
            '--tw-prose-quote-borders': theme('colors.brand.300'),
            '--tw-prose-hr': theme('colors.gray.200'),
            '--tw-prose-th-borders': theme('colors.gray.300'),
            '--tw-prose-td-borders': theme('colors.gray.200'),
            '--tw-prose-code': theme('colors.brand.700'),
            '--tw-prose-pre-bg': theme('colors.gray.900'),
            '--tw-prose-pre-code': theme('colors.gray.100'),
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              fontWeight: '800',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h3: {
              fontWeight: '600',
            },
            'thead th': {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            'tbody tr': {
              '&:nth-child(even)': {
                backgroundColor: theme('colors.gray.50'),
              },
            },
            img: {
              borderRadius: theme('borderRadius.lg'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
