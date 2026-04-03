/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B99470',
        'background-light': '#f7f7f6',
        'background-dark': '#1c1916',
        surface: '#f7f7f6',
        'surface-container-low': '#f2efeb',
        'on-surface': '#2f2a24',
        'on-surface-variant': '#5f5850',
        secondary: '#82776b',
        'primary-container': '#e9d7c4',
        'on-primary-container': '#3b2d20',
        'outline-variant': '#cdc2b8',
      },
      fontFamily: {
        headline: ['Newsreader', 'serif'],
        display: ['Newsreader', 'serif'],
        body: ['Newsreader', 'serif'],
        label: ['Newsreader', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [],
}
