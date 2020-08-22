module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        "0": "0",
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%",
        "2/3": "66%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    applyComplexClasses: true,
    extendedFontSizeScale: true,
  },
}
