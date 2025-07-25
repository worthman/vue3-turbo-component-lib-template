import { defineConfig } from 'vitepress';
import { shared } from './config/shared';
import { en } from './config/en';
import { zh } from './config/zh';
import llmstxt from 'vitepress-plugin-llms'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  },
  vite: {
    plugins: [llmstxt()]
  }
});
