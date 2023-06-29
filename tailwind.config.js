/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'var(--font-roboto)',
        title: 'var(--font-bungee)',
      },
      fontSize: {
        xxs: '0.5rem',
        '3xs': '0.25rem',
      },
      colors: {
        semiTransparent: '#00000050',

        gray900: '#121214',
        gray800: '#242436',

        yellow500: '#ffab04',

        green500: '#6cc644',

        blue300: '#0072b1',

        red600: '#b2071d',
      },
      backgroundImage: {
        gradientButton:
          'linear-gradient(90deg, rgba(226,226,226,0) 5%, rgba(42,42,43,1) 48%, rgba(42,42,43,1) 52%, rgba(18,7,32,0) 95%)',
      },
      boxShadow: {
        defaultDown: '0 3px 3px #00000050',
      },
      transitionDuration: {
        default: '250ms',
      },
      lineHeight: {
        0: 0,
      },
      keyframes: {
        'bg-fade-out': {
          '0%': { backgroundColor: '#121214' },
          '100%': { backgroundColor: '#12121400' },
        },
      },
      animation: {
        'bg-button-fade-out': 'ease-out bg-fade-out 250ms',
      },
    },
  },
  plugins: [],
}
