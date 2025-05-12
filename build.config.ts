import { defineBuildConfig } from 'unbuild';

const packages = ['hooks', 'directives', 'utils'];

export default defineBuildConfig({
  entries: packages.map((pkg) => ({
    // 入口文件路径（直接用相对路径字符串）
    input: `./packages/${pkg}/src/index`,
    // 输出目录（可选，建议也用相对路径）
    outDir: `./packages/${pkg}/dist`,
    name: pkg,
  })),
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    // 解决命名导出警告
    output: {
      exports: 'named',
      // 外部依赖，避免打包进bundle
      external: [
        'vue',
        '@vue/runtime-dom',
        '@vue/runtime-core',
        '@vue/shared',
        '@vue/reactivity',
        '@vue/compiler-dom',
        '@vue/compiler-core',
        'csstype',
        '@babel/types',
        '@babel/parser'
      ]
    }
  },
  // outDir: 'build/dist',
  // 设置为 false 避免因警告而退出
  failOnWarn: false,
  hooks: {
    'build:done': () => {
      console.log('Build completed!');
    },
  },
});
