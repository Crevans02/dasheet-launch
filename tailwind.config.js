const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['canada-type-gibson', ...defaultTheme.fontFamily.sans],
                serif: ['warnock-pro', ...defaultTheme.fontFamily.serif],
            },
        },
        colors: {
            brand: {
                yellow: "#F4C05F",
                orange: "#E88431",
                red: "#C53A32",
            },
            blue: {
                darker: "#0F3047",
                dark: "#254B66",
            },
            grey: {
                darker: "#394146",
                dark: "#798186",
                base: "#BCC0C2",
                light: "#F0F1F3",
                lighter: "#FCFCFC",
            },
            white: {
                10: "rgba(255, 255, 255, 0.1)",
                20: "rgba(255, 255, 255, 0.2)",
                25: "rgba(255, 255, 255, 0.25)",
                30: "rgba(255, 255, 255, 0.3)",
                40: "rgba(255, 255, 255, 0.4)",
                50: "rgba(255, 255, 255, 0.5)",
                60: "rgba(255, 255, 255, 0.6)",
                70: "rgba(255, 255, 255, 0.7)",
                75: "rgba(255, 255, 255, 0.75)",
                80: "rgba(255, 255, 255, 0.8)",
                90: "rgba(255, 255, 255, 0.9)",
                100: "rgba(255, 255, 255, 1)",
            },
            form: {
                success: "#32C57E",
                danger: "#C2605B",
            },
            transparent: "transparent",

        },
        boxShadow: {
            default: "0px 4px 0px rgba(0, 0, 0, 0.02)"
        }
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    // plugins: [require('@tailwindcss/ui')],
};
