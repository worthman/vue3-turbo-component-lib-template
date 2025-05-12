import { defineConfig } from 'vitepress';
import { components } from '../../en/components';

export const en = defineConfig({
  lang: 'en-US',
  title: 'Library Template Doc',
  description: 'A Vue3-based Component Library and Utility Collection',
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Component', link: '/packages/ui/button' },
      { text: 'Tool', link: '/packages/utils/string' },
      { text: 'Playground', link: '/' },
      // { text: 'Others', link: '/markdown-examples' },
      // { text: 'Blog', link: 'https://huangmingfu.github.io/my-blog' },
      {
        text: 'More',
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/worthman/vue3-turbo-component-lib-template/blob/master/CHANGELOG.md',
          },
          // {
          //   text: 'Contribute',
          //   link: '',
          // },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Quick Start',
        items: [{ text: 'Introduction', link: 'en/guide/index' }],
      },
      {
        text: 'Components (@worthman/ui)',
        items: [...components],
      },
      {
        text: 'Hooks (@worthman/hooks)',
        items: [{ text: 'useCounter', link: 'en/packages/hooks/useCounter' }],
      },
      {
        text: 'Directives (@worthman/directives)',
        items: [{ text: 'vFocus', link: 'en/packages/directives/vFocus' }],
      },
      {
        text: 'Utilities (@worthman/utils)',
        items: [{ text: 'String Utils', link: 'en/packages/utils/string' }],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/worthman/vue3-turbo-component-lib-template',
      },
    ],
  },
});
