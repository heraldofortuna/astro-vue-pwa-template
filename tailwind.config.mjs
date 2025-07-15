/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: { fontSize: '16px' },
      });
    },
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
