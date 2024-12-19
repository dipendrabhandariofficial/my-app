/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: ['hover'],
      animation: {
        fadeInUp: 'fadeInUp 3s ease-out forwards', // Custom animation
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: 0, // Opacity starts at 0 (invisible)
            transform: 'translateY(30px)', // Starts slightly below
          },
          '100%': {
            opacity: 1, // Ends fully visible
            transform: 'translateY(0)', // Ends at its original position
          },
        },
      },
    },
  },
  plugins: [],
};
