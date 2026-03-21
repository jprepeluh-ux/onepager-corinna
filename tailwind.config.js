/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        lora: ['Lora', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        sage: {
          50:  '#F3F7F3',
          100: '#E4EEE4',
          200: '#C6DAC6',
          300: '#A3C3A3',
          400: '#7DAD7D',
          500: '#6B9B6B',
          600: '#578257',
          700: '#456845',
          800: '#334F33',
          900: '#223622',
        },
        moss: {
          50:  '#F2F5F2',
          100: '#E1EAE1',
          200: '#BDD3BD',
          300: '#96BA96',
          400: '#6A9B6A',
          500: '#4E804F',
          600: '#3D663E',
          700: '#2E4E2F',
          800: '#1F3520',
          900: '#111D12',
        },
        cream: {
          50:  '#FAFAF8',
          100: '#F5F2EC',
          200: '#EDE7DC',
          300: '#DDD5C8',
          400: '#C8BDB0',
          500: '#B3A495',
        },
        gold: {
          300: '#E2CE82',
          400: '#D4B85A',
          500: '#C5A84B',
          600: '#A88B38',
        },
        /* Semantic tokens Variante A */
        'heading-a':         'var(--color-text-primary)',
        'body-a':            'var(--color-text-secondary)',
        'muted-a':           'var(--color-text-muted)',
        'surface-a':         'var(--color-bg-main)',
        'section-a':         'var(--color-bg-accent)',
        'card-bg-a':         'var(--color-bg-card-a)',
        'input-bg-a':        'var(--color-bg-input-a)',
        'brand-a':           'var(--color-primary)',
        'highlight-hero-a':  'var(--color-highlight-hero)',
        'highlight-about-a': 'var(--color-highlight-about)',
      },
      borderRadius: {
        'button-a':    'var(--radius-button-a)',
        'card-a':      'var(--radius-card-a)',
        'accordion-a': 'var(--radius-accordion-a)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease forwards',
        'slide-up': 'slideUp 0.7s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
