/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        //Max-width
        m2xl: { max: "1535px" },

        mxl: { max: "1279px" },

        mlg: { max: "1023px" },

        mmd: { max: "767px" },

        msm: { max: "639px" },

        msmm: { max: "450px" },

        //Min width

        smm: { min: "451px" },

        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
