/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBtn: "rgb(231, 254, 41)",
      },
      backgroundImage: {
        "custom-image": "url('/src/assets/bg-shadow.png')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
