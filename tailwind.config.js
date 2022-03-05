module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'navigation-list': 'calc(100vh - 176px)'
      },
      minHeight: {
        'content-main': 'calc(100vh - 143px)',
      },
      boxShadow: {
        'main': '0 4px 24px 0 rgba(34,41,47,.24)',
      }
    },
  },
  plugins: [],
}
