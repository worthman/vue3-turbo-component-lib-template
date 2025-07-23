/*
 * @Author: 'worthman' renth3@asiainfo.com
 * @Date: 2025-05-12 10:23:24
 * @LastEditors: 'worthman' renth3@asiainfo.com
 * @LastEditTime: 2025-07-23 17:34:26
 * @FilePath: \vue3-turbo-component-lib-template\apps\docs\.vitepress\config\zh.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress';
import { components } from '../../zh/components';

export const zh = defineConfig({
  lang: 'zh-Hans',
  title: '组件库模板文档',
  description: '一个基于 Vue3 的组件库和工具集',
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/packages/ui/button' },
      { text: '工具', link: '/packages/utils/string' },
      { text: 'Playground', link: '/packages/playground' },
      // { text: '其他', link: '/markdown-examples' },
      // { text: '博客', link: 'https://huangmingfu.github.io/my-blog' },
      {
        text: '更多',
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/worthman/vue3-turbo-component-lib-template/blob/master/CHANGELOG.md',
          },
          // {
          //   text: '参与贡献',
          //   link: '',
          // },
        ],
      },
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [{ text: '介绍', link: '/guide/index' }],
      },
      {
        text: '组件（@worthman/ui）',
        items: [
          ...components,
          // { text: 'Button 按钮', link: '/packages/ui/button' },
          // { text: 'Dialog 对话框', link: '/packages/ui/dialog' },
        ],
      },
      {
        text: 'Hooks（@worthman/hooks）',
        items: [{ text: 'useCounter 计数器', link: '/packages/hooks/useCounter' }],
      },
      {
        text: '指令（@worthman/directives）',
        items: [{ text: 'vFocus 聚焦', link: '/packages/directives/vFocus' }],
      },
      {
        text: '工具函数（@worthman/utils）',
        items: [{ text: '字符串工具', link: '/packages/utils/string' }],
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
