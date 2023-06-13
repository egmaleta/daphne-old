import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: ["src/index.ts", "src/jsx-runtime.ts", "src/jsx-dev-runtime.ts"],
      formats: ["es", "cjs"],
      fileName: (format, name) =>
        `${name}.${format === "cjs" ? "common" : format}.js`,
    },
  },
});
