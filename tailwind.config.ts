import type { Config } from "tailwindcss";

export default {
  content: ["./src/**.{html,tsx,ts}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
