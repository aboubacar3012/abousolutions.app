import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#071526',
        },
        foreground: {
          DEFAULT: '#171717',
          dark: '#f8f8f8',
        },
        primary: {
          DEFAULT: '#0f56b3',
          dark: '#0a3d7f',
          light: '#3178c6',
        },
        accent: {
          DEFAULT: '#4dc0ff'
        },
        secondary: '#193249',
        'dark-blue': '#031b34',
        card: {
          bg: '#0d2446',
          hover: '#153864',
        },
      },
      backgroundImage: {
        'dark-blue-gradient': 'linear-gradient(180deg, #031b34 0%, #041e38 100%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config