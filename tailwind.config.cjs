/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    animation: {
      marquee: "marquee 35s linear infinite",
      marquee2: "marquee2 25s linear infinite",
      scroller3: "scroller3 25s linear infinite",
      "spin-slow": "spin 4s linear infinite",
      "spin-slower": "spin 6s linear infinite",
      "spin-reverse": "spin-reverse 1s linear infinite",
      "spin-reverse-slow": "spin-reverse 4s linear infinite",
      "spin-reverse-slower": "spin-reverse 6s linear infinite",
      scroller: "scroller 15s linear infinite",
      scroller2: "scroller2 20s linear infinite",
      "fade-in": "fade-in 0.5s linear forwards",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
      scroller: {
        "0%": { transform: "translateY(10em)" },
        "100%": { transform: "translateY(-14em)" },
      },
      scroller2: {
        "0%": { transform: "translateY(10em)" },
        "100%": { transform: "translateY(-14em)" },
      },
      "fade-in": {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
      scroller3: {
        "100%": {
          transform: "translateY(-50%)",
        },
      },
      "spin-reverse": {
        to: {
          transform: "rotate(-360deg)",
        },
      },
    },
    extend: {
      width: {
        '4/5': '80%',  // adds a new width utility of 4/5 equals to 80%
      },
      colors: {
        black: "#151515",
        white: "#f5f5f5",
        accent: {
          50: "#E5E5FF",
          100: "#CCCCFF",
          200: "#9999FF",
          300: "#6666FF",
          400: "#3333FF",
          500: "#0000FF",
          600: "#0000CC",
          700: "#000099",
          800: "#000066",
          900: "#000033",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Gilda Display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),

    // ...
  ],
};
