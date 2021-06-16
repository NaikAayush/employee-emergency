const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "media",
  corePlugins: {
    fontFamily: false,
  },
  prefix: "",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          1000: "#ffe600",
          1100: "#E96565",
          1200: "#FF9497",
        },
      },
      backgroundImage: (theme) => ({
        "home-1": "url('assets/home/Welcome1.png')",
        "home-2": "url('assets/home/Welcome2.png')",
        "home-3": "url('assets/home/Welcome3.png')",
      }),
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
