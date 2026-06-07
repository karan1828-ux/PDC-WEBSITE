/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pdc: {
          blue: "#0a192f",
          brown: "#a67c52",
          orange: "#e69552",
          gold: "#c5a059",
          beige: "#f5f1e9",
        }
      },
    },
  },
  plugins: [],
}
