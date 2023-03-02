/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-1":
          "linear-gradient(148deg, rgba(1,72,114,1) 0%, rgba(160,234,207,1) 100%)",
        "gradient-2": "linear-gradient(-45deg, #CC7952 0%, #474344 100%)",
      }),
      screens: {
        sm: "576px",

        md: "960px",

        lg: "1440px",
      },
    },
  },
  plugins: [],
};
