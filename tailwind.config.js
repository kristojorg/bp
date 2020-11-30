module.exports = {
  purge: ["./**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        tulip: "url('/tulip.png')",
      }),
      gridTemplateColumns: {
        ts: "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        ts: "repeat(16, minmax(0, 1fr))",
      },
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
