module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        tulip: "url('/tulip.png')",
      }),
    },
    fontFamily: {
      sans: ["ff-meta", "-apple-system", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
