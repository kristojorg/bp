module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        tulip: "url('/tulip.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
