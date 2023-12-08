import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        primary: '#3f51b5',
        secondary: '#f50057',
        success: '#4caf50',
        info: '#00acc1',
        warning: '#ff9800',
        error: '#f44336',
        light: '#f5f5f5',
        dark: '#212121',
        white: '#ffffff',
        transparent: 'transparent',
        current: 'currentColor',
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
