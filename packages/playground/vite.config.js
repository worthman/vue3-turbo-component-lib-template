import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue', '@vue/repl', '@vue/repl/dist/vue.worker.js', '@vue/repl/dist/editor.worker.js'],
  },
});
