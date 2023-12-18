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
        primary: '#ff6e59',
        secondary: '#ffece9',
        success: '#4ab783',
        basic: '#F2CFC2',
        warning: '#ff9800',
        error: '#f36140',
        transparent: 'transparent',
        text: '#0D0D0D',
        backgroud: '#FaFaFa',
        sub: '#673ce6',
        sub2: '#e1d8fa',
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
