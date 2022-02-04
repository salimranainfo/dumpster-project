module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-primary': '#FFD361',
        'gray-primary': '#333333',
      },
      boxShadow: {
        custom: '3px 3px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
}
