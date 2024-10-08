/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Noto: ["Noto Sans JP", "sans-serif"],
        Sankofa: ["Sankofa Display", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        secondary: {
          light: "#F7F7F8",
          dark: "#1E1E1E",
        },
        text: {
          light: "#000000",
          dark: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
