/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      colors: {
        textcolor: "#E4E4E7",
        body: "#F1F1F3",
        whiteFour: "#FCFCFD",
        whiteThree: "#FCFCFD",
        whiteTwo: "#F1F1F3",
        whiteOne: "#EAEAE7",
        orange99: "#FFFDFA",
        orange70: "#FFBF66",
        orange75: "#FFCA80",
        orange97: "#FFF9F0",
        orange90: "#FFEACC",
        orange95: "#FFE4E5",
        grey70: "#B3B3B3",
        grey35: "#59595A",
        grey30: "#4C4C4D",
        grey15: "#262626",
        grey20: "#333333",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF9500",
        },
      },
    ],
  },
};
