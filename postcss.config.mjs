const config = {
  plugins: ["@tailwindcss/postcss"],
  colors: {
    primary: "#edf4f6",
  },
};

export default {
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-sin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
