module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'content-main': 'calc(100vh - 112px)',
        'navigation-list': 'calc(100vh - 176px)'
      }
    },
  },
  plugins: [],
}
