/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "second-color": "var(--second-color)",
        "alert-color": "var(--alert-color)",
        "hover-main-color": "var(--hover-main-color)",
      },
    },
  },
  plugins: [],
};
