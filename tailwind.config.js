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
        'content-main': 'calc(100vh - 112px)',
      },
      boxShadow: {
        'main': '0 4px 24px 0 rgba(34,41,47,.24)',
        'second': '0 8px 25px -8px #7367f0'
      }
    },
  },
  plugins: [],
}
