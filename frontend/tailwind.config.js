module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // => @media (max-width: 1279px) { ... }
        xl: { max: "1279px" },
  
        // => @media (max-width: 1023px) { ... }
        lg: { max: "1023px" },
  
        // => @media (max-width: 867px) { ... }
        md_lg: { max: "867px" },

        // => @media (max-width: 767px) { ... }
        md: { max: "767px" },

        // => @media (max-width: 500px) { ... }
        sm: { max: "500px" },

        // => @media (max-width: 360px) { ... }
        xs : {max: "360px"},
      },
    },
  },
  plugins: [],
}