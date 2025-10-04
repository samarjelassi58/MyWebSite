/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          bleuFonce: "#001219",
          bleu: "#005F73",
          bleuClair: "#0A9396",
          turquoise: "#94D2BD",
          beige: "#E9D8A6",
          jaune: "#EE9B00",
          orange: "#CA6702",
          orangeFonce: "#BB3E03",
          rouge: "#AE2012",
          rougeFonce: "#9B2226",
        },
      },
    },
  },
  plugins: [],
};
