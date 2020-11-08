module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    layers: ["components", "utilities"],
    content: ["./src/**/*.html", "./src/**/*.js", "./public/**/*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
