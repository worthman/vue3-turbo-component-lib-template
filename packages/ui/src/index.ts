/*
 * @Author: 'worthman' renth3@asiainfo.com
 * @Date: 2025-04-11 14:52:36
 * @LastEditors: 'worthman' renth3@asiainfo.com
 * @LastEditTime: 2025-07-24 10:03:23
 * @FilePath: \vue3-turbo-component-lib-template\packages\ui\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App } from 'vue';
import { TButton, TDialog } from './components';

export { version } from './version';

const components = [TButton, TDialog];

function install(app: App) {
  components.forEach((component) => {
    app.use(component);
  });
}

export { install };

export * from './components';

export default {
  install,
};
