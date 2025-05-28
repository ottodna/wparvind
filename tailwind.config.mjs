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
        // Primary: Strong, trustworthy blue (Tailwind blue-600)
        primary: '#2563EB',

        // Secondary: Neutral, supportive grey (Tailwind coolGray-500 / gray-500 area)
        secondary: '#6C757D', // Updated from your example to our discussed grey

        // Accent: Warm, contrasting gold/amber (Tailwind amber-400)
        accent: '#FFC107',    // Updated from your red example to our discussed gold

        // Background: Clean, off-white (Tailwind gray-50)
        background: '#F9FAFB', // Kept from your example - standard and good

        // Text: Very dark grey for high contrast (Tailwind gray-900)
        text: '#111827',      // Kept from your example - standard and good
      },
    },
    fontFamily: {
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
      serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};