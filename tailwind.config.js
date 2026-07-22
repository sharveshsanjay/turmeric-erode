/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        erode: {
          gold: '#E5A93C',
          amber: '#D97706',
          deep: '#92400E',
          soil: '#291E14',
          sand: '#FDFBF7',
          pure: '#FFFFFF',
          dark: '#0F0F10',
          gray: '#86868B',
          lightgray: '#F5F5F7'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        'apple-soft': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'apple-glow': '0 0 50px rgba(229, 169, 60, 0.2)',
        'apple-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.03)'
      }
    },
  },
  plugins: [],
}
