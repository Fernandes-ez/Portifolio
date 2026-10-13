import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site multipágina: cada rota é um HTML com o próprio <title> e meta description.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        sites: resolve(__dirname, 'sites/index.html'),
        automacao: resolve(__dirname, 'automacao/index.html'),
        sistemas: resolve(__dirname, 'sistemas/index.html'),
        termos: resolve(__dirname, 'termos/index.html'),
        privacidade: resolve(__dirname, 'privacidade/index.html'),
        obrigado: resolve(__dirname, 'obrigado/index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
})
