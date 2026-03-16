/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    // This enables the global API
    globals: true,
    environment: "jsdom", // or 'node'
    setupFiles: "./setupTests.ts", // optional
  },
});
