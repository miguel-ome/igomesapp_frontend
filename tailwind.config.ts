import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ffb923",
        gray: "#ffb923",
        black: "#000000",
        white: "#ffffff",
      },
      fontSize: {
        title: "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
