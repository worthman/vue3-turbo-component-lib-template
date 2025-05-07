import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
      // 使用本地UI库，ui组件修改实时变化，提高调试效率。
      '~@worthman/ui': resolve(import.meta.dirname, '../packages/ui/src'),
      '~': resolve(import.meta.dirname, '../packages/ui/src'),
    },
  },
  server: {
    port: 8888,
  },
  optimizeDeps: {
    include: ['vue', 'ant-design-vue'],
  },
});
