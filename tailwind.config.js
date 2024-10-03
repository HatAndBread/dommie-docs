import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF6978",

          secondary: "#25025e",

          accent: "#B1EDE8",

          neutral: "#352D39",

          "base-100": "#FFFCF9",

          info: "#7dd3fc",

          success: "#4ade80",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
};
