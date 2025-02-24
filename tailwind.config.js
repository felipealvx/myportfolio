/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          '100': '#ffff3f',
          '200': '#eeef20',
          '300': '#dddf00',
          '400': '#d4d700',
          '500': '#bfd200',
          '600': '#aacc00',
          '700': '#55a630',
          '800': '#2b9348',
          '900': '#007f5f',
        },
        black: {
          '100': '#f8f9faff',
          '200': '#e9ecefff',
          '300': '#dee2e6ff',
          '400': '#ced4daff',
          '500': '#adb5bdff',
          '600': '#6c757dff',
          '700': '#495057ff',
          '800': '#343a40ff',
          '900': '#2d3142',
        },
        white: '#f4f1de',
        gray: '#70798c',
        grayLight: '#f4f4f6',
      },
    }
  },
  plugins: [],
}