import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/svg/svgReactComponent/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '443px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },

      colors: {
        primary: '#F27B50',
        secondary: '#F2B872',
        success: '#004B02',
        basic: '#F2CFC2',
        warning: '#ff9800',
        error: '#f44336',
        white: '#ffffff',
        transparent: 'transparent',
        text: '#0D0D0D',
        backgroud: '#F2F2F2',
        current: 'currentColor',
        cstroke: '#e65100',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
});

export default config;
