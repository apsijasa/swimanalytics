/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E53935',
          light: '#EF5350',
          hover: '#D32F2F',
          pale: '#FFCDD2',
        },
        black: '#212121',
        gray: {
          dark: '#424242',
          mid: '#6c757d',
          border: '#dee2e6',
          light: '#F5F5F5',
          'very-light': '#F9F9F9',
        },
        blue: '#1565C0',
        success: '#4CAF50',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};
