import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#191719",
            default: {
              foreground: "#ff4088",
              DEFAULT: "#40182c",
            },
            primary: {
              foreground: "#40182c",
              DEFAULT: "#ff4088",
            },
            secondary: {
              foreground: "#8840ff",
              DEFAULT: "#2c1840",
            },
            success: {
              foreground: "#4088ff",
              DEFAULT: "#182c40",
            },
            warning: {
              foreground: "#88ff40",
              DEFAULT: "#2c4018",
            },
            danger: {
              foreground: "#ff8840",
              DEFAULT: "#402c18",
            },
            divider: "#3a363c",
            focus: "#ffffff",
            content1: "#191719",
          },
        },
      },
    }),
  ],
};

export default config;
