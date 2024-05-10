import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-h1": "radial-gradient(circle at 60%, #6c6c6c, black)",
        "gradient-announcement": "linear-gradient(to right, white 20%, purple)",
      },
      animation: {
        "come-up": "comeUp 1s ease-in-out forwards",
        "come-down": "comeDown 1s ease-in-out forwards",
        "come-right": "comeRight 1s ease-in-out forwards",
        "come-left": "comeLeft 1s ease-in-out forwards",
        "to-right": "toRight 2.5s ease-in-out infinite",
      },
      keyframes: {
        comeUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        comeDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        comeRight: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        comeLeft: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        toRight: {
          "0%": {
            left: "-40px",
          },
          "100%": {
            left: "100%",
          },
        },
      },
    },
  },
  plugins: [require("@catppuccin/tailwindcss")],
};
export default config;
