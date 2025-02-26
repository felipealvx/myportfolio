/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fff5f2',
          '100': '#fee6de',
          '200': '#fdcfbc',
          '300': '#fbae91',
          '400': '#f8835d',
          '500': '#eb5e28', // cor base
          '600': '#dc4a1a',
          '700': '#b73812',
          '800': '#922e14',
          '900': '#782a16',
        },
        dark: {
          '50': '#f6f6f6',
          '100': '#ececec',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#6b6b6b',
          '600': '#555555',
          '700': '#3d3d3d',
          '800': '#252422', // Cor base
          '900': '#1a1a1a',
        },
        light: {
          '50': '#fffcf2', // Cor base
          '100': '#faf7e9',
          '200': '#f4efd9',
          '300': '#eee5c7',
          '400': '#e8daaf',
          '500': '#d4c49e',
          '600': '#b8a98a',
          '700': '#93866e',
          '800': '#756a58',
          '900': '#5c5345',
        },
      },
    },
  },
  plugins: [],
}