/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./*.{js,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#F8F9FF',
          300: '#DFDFE4',
          400: '#9FA1AC',
          500: '#4D516D',
          900: '#0B1536',
        },
        accent: {
          300: '#FFE0DC',
          500: '#FF6251',
          600: '#E94534',
        },
        neutralgray: {
          300: '#F6F6F6',
        },
        staryellow: {
          500: '#FECD58',
          300: '#FBEECF',
        }
      },
    },
  },
  plugins: [],
}