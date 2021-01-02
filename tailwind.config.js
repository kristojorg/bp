module.exports = {
  purge: ["./**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        tulip: "url('/tulip.png')",
      }),
      fontFamily: {
        sans: ["ff-meta", "-apple-system", "sans-serif"],
        mono: [
          "Menlo",
          // "Monaco",
          // "Lucida Console",
          // "Liberation Mono",
          // "DejaVu Sans Mono",
          // "Bitstream Vera Sans Mono",
          // "Courier New",
          // "monospace",
          "serif",
        ],
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [],
};
