const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        'navigation-list': 'calc(100vh - 176px)',
        'todo-content': 'calc(100vh - 173px)',
      },
      width: {
        'content-right': 'calc(100% - 260px)',
      },
      minHeight: {
        'content-main': 'calc(100vh - 143px)',
        'todo-content': 'calc(100vh - 173px)',
      },
      boxShadow: {
        main: '0 4px 24px 0 rgba(34,41,47,.24)',
        indigo: '0 8px 25px -8px #7367f0',
      },
      transitionProperty: {
        inset: 'top left bottom right',
      },
    },
    colors: {
      ...colors,
      ebonyClay: '#283046',
      mirage: '#161d30',
      indigo: {
        main: '#7367f0',
        second: '#9991f3',
        third: '#7367f0b3',
      },
      gray: {
        main: '#3B4253',
        second: '#475569',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
