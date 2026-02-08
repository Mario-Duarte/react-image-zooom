import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude: ["**/dist/**", "**/node_modules/**"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});