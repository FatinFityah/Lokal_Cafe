import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FFFCF9',  // Almost white (cleaner background)
          100: '#F5EBE0', // Light beige (for soft backgrounds)
          200: '#E3D5CA', // Latte color
          500: '#D4A373', // Rich Caramel (Primary Brand Color)
          800: '#4A3B32', // Dark Roast (Readable Text)
          900: '#231B15', // Deep Espresso (Headings/Buttons)
        }
      },
    },
  },
  plugins: [],
};
export default config;