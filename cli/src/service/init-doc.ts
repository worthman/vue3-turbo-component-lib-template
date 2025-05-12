import { ComponentInfo } from '../domain/component-info';
import { g } from '../utils/log-utils';
import path from 'path';
import fs from 'fs';
import { demoTemplate, mdTemplate } from '../utils/template-utils';

/**
 * 创建组件文档、demo及更新菜单
 */
export const initDoc = (componentInfo: ComponentInfo) => {
  // 组件库文档根路径
  // D:\project\test\rth-demo-ui\docs
  const docRootPath = path.join(componentInfo.rootPath, '/apps/docs');
  const { lineName, lineNameWithPrefix, upCamelName, zhName } = componentInfo;
  // console.log(
  //   '🚀 ~ initDoc ~ docRootPath:',
  //   componentInfo.rootPath,
  //   docRootPath,
  //   path.resolve(docRootPath, `/en/packages/ui/${lineName}.md`),
  // );
  // return;

  // 1. 创建组件的 MD 文档
  fs.writeFileSync(
    path.join(docRootPath, `/en/packages/ui/${lineName}.md`),
    mdTemplate(componentInfo),
  );

  fs.writeFileSync(
    path.join(docRootPath, `/zh/packages/ui/${lineName}.md`),
    mdTemplate(componentInfo),
  );

  // 2. 创建组件文档中的 Demo
  fs.mkdirSync(path.join(docRootPath, `/examples/ui/${lineName}`));
  fs.writeFileSync(
    path.join(docRootPath, `/examples/ui/${lineName}/${lineName}.vue`),
    demoTemplate(lineNameWithPrefix),
  );

  // 3. 更新组件库文档菜单
  // D:\project\组件库\vue3-turbo-component-lib-template\apps\docs\components.ts
  const menuPath = path.join(docRootPath, 'en/components.ts');
  const menuPath1 = path.join(docRootPath, 'zh/components.ts');
  console.log('🚀 ~ initDoc ~ menuPath:', menuPath);
  const content = fs.readFileSync(menuPath).toString();
  const content1 = fs.readFileSync(menuPath1).toString();
  const index = content.indexOf(']; // end');
  const index1 = content.indexOf(']; // end');

  // console.log('🚀 ~ initDoc ~ content.substring(0, index - 1):', content.substring(0, index - 1));
  // console.log('🚀 ~ initDoc ~ content.substring(index):', content.substring(index));

  // return;

  const result =
    content.substring(0, index - 1) +
    `\n  { text: '${upCamelName} ${zhName}', link: 'en/packages/ui/${lineName}' },\n` +
    content.substring(index);
  fs.writeFileSync(menuPath, result);

  const result1 =
    content1.substring(0, index1 - 1) +
    `\n  { text: '${upCamelName} ${zhName}', link: 'zh/packages/ui/${lineName}' },\n` +
    content.substring(index1);
  fs.writeFileSync(menuPath1, result1);

  g('component document init success');
};
