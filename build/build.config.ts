import { defineBuildConfig } from 'unbuild';

// unbuild 配置
export default defineBuildConfig({
  // 类型声明
  declaration: true,
  // 入口
  entries: ['./src/index'],
  // 默认是输出的cjs和mjs文件的，但是声明了配置文件，则需要设置 emitCJS 为 true 显式输出 cjs，否则不会输出 cjs
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    esbuild: {
      target: 'ES2020',
      // 压缩
      minify: true,
    },
  },
});
