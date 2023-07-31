/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#DDE6ED",
        dark: "#9DB2BF",
        darker: "#526D82",
        darkest: "#27374D",

        light: {
          // primary: "#...",
          // secondary: "#...",
          // light: "#DDE6ED",
          // dark: "#9DB2BF",
          // darker: "#526D82",
          // darkest: "#27374D",
          bgc: "#fff",
        },
        dark: {
          // primary: "#...",
          // secondary: "#...",
          // light: "#DDE6ED",
          // dark: "#9DB2BF",
          // darker: "#526D82",
          // darkest: "#27374D",
          bgc: "#001234",
        },
      },
    },
  },
  plugins: [],
};
