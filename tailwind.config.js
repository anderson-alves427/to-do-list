export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          brand: "#bef264",
        },
        body: {
          success: "#7FB431",
          warning: "#B2343A",
        },
        grayscale: {
          black: "#09090b",
          white: "#FFFFFF",
          stroke: "#18181b",
        },
        text: {
          primary: "#FAFAFA",
          secondary: "#A2A1A8",
          tertiary: "#D4D4D8",
        },
      },
    },
  },
  plugins: [],
};
