/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan all component and page files
    './public/index.html',        // Optional, if using CRA or custom HTML
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB', // Tailwind's blue-600 (or customize)
        secondary: '#1E40AF', // blue-800
        accent: '#F59E0B', // amber-500
        danger: '#DC2626', // red-600
        success: '#16A34A', // green-600
        info: '#0EA5E9', // sky-500
      },
      maxWidth: {
        'mobile': '375px', // For centered mobile layout
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
