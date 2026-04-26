import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: { '/api/safebooru': {
      target: "https://safebooru.org",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api\/safebooru/, '/index.php')

    }},
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
