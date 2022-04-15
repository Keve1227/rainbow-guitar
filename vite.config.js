import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/rainbow-guitar/",
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        outDir: fileURLToPath(new URL("./docs", import.meta.url)),
        sourcemap: false,
        minify: "terser",
        // terserOptions: {
        //     mangle: false,
        // },
    },
    css: {
        preprocessorOptions: {
            scss: {
                charset: false,
            },
        },
    },
});
