import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'dark-900': '#0a0a0a',
        'dark-800': '#1a1a1a',
        'dark-700': '#2a2a2a',
        'dark-600': '#3a3a3a',
        'grey-500': '#4a4a4a',
        'grey-400': '#6a6a6a',
        'grey-300': '#8a8a8a',
        'grey-200': '#a0a0a0',
        white: '#ffffff',
        'off-white': '#f5f5f5',
        red: '#ff1744',
        'red-dark': '#d50000',
      },
    },
  },
  plugins: [],
};

export default config;
