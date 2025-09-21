module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss"
  ],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true
  }
};