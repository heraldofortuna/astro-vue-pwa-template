/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-green-100': '#CBF7F6',
        'primary-green-200': '#6CD3CF',
        'primary-green-300': '#00A19B',
        'primary-green-500': '#00524F',
        'primary-orange-300': '#EB6F25',
        'neutrals-plate-200': '#4E5D73',
        'neutrals-plate-300': '#3E4B61',
        'neutrals-plate-400': '#1F263E',
        'neutrals-sky-100': '#FFF',
        'neutrals-sky-200': '#F4F5F6',
        'neutrals-sky-300': '#E7E9EC',
        'neutrals-sky-400': '#D4D8DD',
        'neutrals-sky-500': '#B1B8C1',
        'neutrals-dark-500': '#141414',
        'support-positive-100': '#E5FCE0',
        'support-positive-300': '#5BBC43',
        'support-warning-100': '#FFF8D8',
        'support-warning-300': '#F0CC10',
        'support-warning-400': '#499636',
        'support-negative-100': '#FFD0D0',
        'support-negative-400': '#9D0606',
        'secondary-lightblue-100': '#E2F6FF',
        'secondary-lightblue-400': '#169CD0',
      },
      fontFamily: {
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
      fontSize: {
        nano: '0.6875rem',
        micro: '0.75rem',
        '2xs': '0.875rem',
        xs: '1.0rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2.0rem',
        xl: '2.5rem',
        '2xl': '3.0rem',
        '3xl': '4.0rem',
        '4xl': '6.0rem',
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      lineHeight: {
        tight: 1,
        fair: 1.28,
        confy: 1.52,
      },
      boxShadow: {
        'fixed-navbar': '0px -3px 15px 0px rgba(32, 51, 50, 0.07)',
        'nav-drawer':
          '0px 1px 10px 0px rgba(188, 198, 212, 0.20), 0px 4px 5px 0px rgba(188, 198, 212, 0.12), 0px 2px 4px 0px rgba(188, 198, 212, 0.14)',
      },
      opacity: {
        intense: '.6',
        light: '.16',
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
