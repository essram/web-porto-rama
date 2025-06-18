import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font-roboto": ["Roboto", "sans-serif"],
      },
      // backgroundImage: {
      //   'home': "url('/images/swiss.jpg')",
      // },
      backgroundColor:{
        "brown":"rgba(92,61,49,0,9)"
      },
      borderColor: {
        "brown":"rgba(92,61,49,0,9)",
        "soft-brown" : "#f2c2ad"
      },
      textColor: {
        "brown":"rgba(92,61,49,0,9)",
        "soft-brown" : "#f2c2ad"
      },
      letterSpacing:{
        'spasi' : '.5em'
      }

    },
  },
  plugins: [],
} satisfies Config;
