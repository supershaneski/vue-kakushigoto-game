import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-kakushigoto-game/",
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        //nested: resolve(__dirname, 'nested/index.html')
      }
    }
  }
})
