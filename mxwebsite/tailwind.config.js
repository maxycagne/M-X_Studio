/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Mapping your specific palette for easier use across the app
      colors: {
        "black-russian": "#000029",
        "alucard-night": "#000051",
        "palatinate-blue": "#173DED",
        "grey-placidity": "#DCDEE2",
        "baby-grey": "#BABABA",
      },
      // Adding extra-wide tracking for that "luxury branding" feel
      letterSpacing: {
        "ultra-widest": "0.35em",
        "mega-widest": "0.5em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        // Explicitly defining the animation utilities
        marquee: "marquee 20s linear infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};
