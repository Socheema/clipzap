import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX files in src for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        "clipzap-navy": "#000080", // Navy background
        "clipzap-teal": "#00B7B5", // Primary teal for buttons and hover
        "clipzap-gray": "#D1D5DB", // Secondary gray for text and borders
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
