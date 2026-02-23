module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'lz-bg': '#080808',
        'lz-surface': '#0F0F0F',
        'lz-accent': '#FF2D20',
        'lz-text': '#E8E8E0',
        'lz-muted': '#555555',
        'lz-border': '#1D1D1D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
