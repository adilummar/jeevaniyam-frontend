/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans your files
    theme: {
      extend: {
        fontFamily: {
          primary: ["Inter", "sans-serif"],
          secondary: ["Quicksand", "sans-serif"],
        },
      },
    },
    plugins: [],
  };