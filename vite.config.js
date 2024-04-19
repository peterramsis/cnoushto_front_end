import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    history: {
      // When using vue-router, it is important to enable history mode.
      // This allows the server to correctly resolve URLs.
      // Otherwise, URLs without a file extension will not be served correctly.
      // Read more: https://vitejs.dev/config/#server-historyfallback
      mode: "history",
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
      // Add more aliases as needed
    },
  },
  // css: {
  //     preprocessorOptions: {
  //         scss: {
  //             additionalData: `@import "@/assets/scss/global.scss";`,
  //         },
  //     },
  // },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/mixins.scss";
        `,
      },
    },
  },
});
