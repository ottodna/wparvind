import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class', // Enable dark mode support
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        'primary-light': '#1A5CFF',
        'accent-light': '#FFD54F',
        'background-light': '#F9FAFB',
        'text-primary-light': '#1F2937',
        'text-secondary-light': '#6B7280',
        'border-light': '#E5E7EB',

        // Dark Mode Colors
        'background-dark': '#0F172A',
        'header-footer-dark': '#1E293B',
        'text-primary-dark': '#F3F4F6',
        'text-secondary-dark': '#94A3B8',
        'border-dark': '#334155',
        'cta-button-dark': '#3B82F6',
        'cta-hover-dark': '#FACC15',

        // Optional default aliases (fallbacks)
        primary: '#1A5CFF',
        accent: '#FFD54F',
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        display: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
        // mono: [...defaultTheme.fontFamily.mono], // Uncomment if you use monospace fonts
      },
      rotate: {
        0: '0deg',
        180: '180deg',
      },
    },
  },
  plugins: [],
};
