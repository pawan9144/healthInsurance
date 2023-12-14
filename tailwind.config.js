/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5AB01",
        secondary: "#0A225F",
        tertiary: "#36B37E",
        quaternary: "#2E2E2EB2",
      },
      screens: {
        mobile: { max: "768px" },
        desktop: { min: "800px" },
      },
    },
  },
  plugins: [],
};
