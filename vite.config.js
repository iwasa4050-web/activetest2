import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// 多ページ構成（index / company / services / recruit）。
// ビルド出力は dist/。public/ の中身（assets・CSS・robots.txt 等）はそのまま dist/ 直下へコピーされます。
export default defineConfig({
  root,
  base: '/activenara-HP/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        company: resolve(root, 'company.html'),
        services: resolve(root, 'services.html'),
        recruit: resolve(root, 'recruit.html'),
      },
    },
  },
});
