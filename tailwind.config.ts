import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ccfae4",
          200: "#99f5c8",
          300: "#66f0ad",
          400: "#33eb91",
          500: "#00e676",
          600: "#00b85e",
          700: "#008a47",
          800: "#005c2f",
          900: "#002e18"
        },
      }
    },
  },
  plugins: [

  ],
};
export default config;
