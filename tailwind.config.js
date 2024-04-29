/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3296F6",
        secondary: "#0969C3",
        background: "#E7F3FE",
        gold: "#FFCC00",
        darkGold: "#997A00",
        dark: "#333333",
        darkBlue: "#010D18",
        lightBlack: "#666666",
        greener: "#0B8924",
      },
      fontSize: {
        md: "20px",
        small: "16px",
      },
      padding: {
        mid: "90px",
        tip: "24px",
      },
    },
  },
  plugins: [],
};
