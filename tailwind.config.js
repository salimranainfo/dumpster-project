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
        custom: '4px 4px rgba(0, 0, 0, 0.75)',
        'custom-large': '7px 7px rgba(0, 0, 0, 0.75)',
        footer: '0px 0px 20px 5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
