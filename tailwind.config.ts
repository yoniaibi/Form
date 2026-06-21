import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        form: {
          black:   '#0D0D0D',
          surface: '#161616',
          raised:  '#1E1E1E',
          border:  '#2A2A2A',
          white:   '#FFFFFF',
          dim:     '#8A8A8A',
          faint:   '#3A3A3A',
          steel:   '#4A7FA5',
          repair:  '#3A6B8A',
          reset:   '#2E8B6E',
          shield:  '#4A7FA5',
          hold:    '#8B6A3E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)'],
      },
    },
  },
  plugins: [],
};

export default config;
