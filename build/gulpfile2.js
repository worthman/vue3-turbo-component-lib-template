const { exec } = require('child_process');
const gulp = require('gulp');
const clean = require('gulp-clean');
const bundleUI = require('./rollup.ui.config.js');

// 清理任务
gulp.task('clean', function () {
  return gulp.src('dist', { allowEmpty: true, read: false }).pipe(clean());
});

// unbuild 构建任务
gulp.task('build', function (cb) {
  exec('npx unbuild', { cwd: '..', shell: true }, (err, stdout, stderr) => {
    if (stdout) process.stdout.write(stdout);
    if (stderr) process.stderr.write(stderr);
    cb(err);
  });
});
// gulp.task('build', async function () {
//   try {
//     const { build } = await import('unbuild');
//     await build({ rootDir: '..' });
//   } catch (err) {
//     console.error('unbuild 执行失败:', err);
//     throw err;
//   }
// });

// 打包 UI 组件
gulp.task('ui', async () => {
  await bundleUI();
});

// 默认任务
gulp.task('default', gulp.series('clean', 'build', 'ui'));
