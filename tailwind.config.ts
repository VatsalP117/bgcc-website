import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-image": "url('https://i.imgur.com/BYu3zAD.png')",
        hero: "url('https://i.imgur.com/BYu3zAD.png')",
        "clients-image": "url('https://i.imgur.com/7X8FYwi.png')",
        "client-01": "url('https://imgur.com/rRFilsZ')",
        "bgcc-logo": "url('https://i.imgur.com/I4dsioZ.png')",
        "services-image": "url('https://i.imgur.com/wnkLzdK.png')",
        "testimonials-image": "url('https://i.imgur.com/bYyuvFb.png')",
        "events-image": "url('https://i.imgur.com/xOwBbB5.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
