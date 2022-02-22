module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './components/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './pages/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    fontFamily: {
      'display': ['Cutive Mono', 'sans-serif'],
      'body': ['Cutive Mono', 'sans-serif']
    },
    colors: {
      'primary': "var(--primary)",
      'secondary': "var(--secondary)",
      'transparent': 'rgba(0, 0, 0, 0)'
    },
    extend: {
      boxShadow: {
        'sm': '0.9px 1px 1.5px hsl(var(--shadow-color) / 0.29), 1.5px 1.5px 2.4px -1.2px hsl(var(--shadow-color) / 0.29), 3.5px 3.5px 5.6px -2.5px hsl(var(--shadow-color) / 0.29);',
        'md': '0.9px 1px 1.5px hsl(var(--shadow-color) / 0.31), 2.9px 3px 4.7px -0.8px hsl(var(--shadow-color) / 0.31), 7.2px 7.3px 11.5px -1.7px hsl(var(--shadow-color) / 0.31), 17.5px 17.6px 27.9px -2.5px hsl(var(--shadow-color) / 0.31)',
        'lg': '0.9px 1px 1.5px hsl(var(--shadow-color) / 0.28), 4.8px 4.8px 7.6px -0.4px hsl(var(--shadow-color) / 0.28), 8.9px 8.9px 14.2px -0.7px hsl(var(--shadow-color) / 0.28), 14.5px 14.6px 23.1px -1.1px hsl(var(--shadow-color) / 0.28), 23.1px 23.2px 36.8px -1.4px hsl(var(--shadow-color) / 0.28), 36px 36.1px 57.4px -1.8px hsl(var(--shadow-color) / 0.28), 54.6px 54.9px 87.1px -2.1px hsl(var(--shadow-color) / 0.28), 80.3px 80.8px 128.2px -2.5px hsl(var(--shadow-color) / 0.28)'
      },
      dropShadow: {
        'sm': '1px 1px .5px hsl(var(--shadow-color))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
}
