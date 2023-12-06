import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve, dirname } from "node:path";
import { fileURLToPath, URL } from "node:url";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      runtimeOnly: false,
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/i18n/locales/**"
      ), // provide a path to the folder where you'll store translation data (see below)
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./node_modules"),
      "@": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
