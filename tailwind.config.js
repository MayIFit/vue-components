/** @format */
/* eslint-disable */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./resources/js/**/*.vue"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans]
            }
        }
    },

    variants: {
        opacity: ["responsive", "hover", "focus", "disabled"]
    },

    plugins: [require("@tailwindcss/ui")]
};
