<!--
 * @Author: 'worthman' renth3@asiainfo.com
 * @Date: 2025-04-16 16:08:52
 * @LastEditors: 'worthman' renth3@asiainfo.com
 * @LastEditTime: 2025-07-23 15:01:06
 * @FilePath: \vue3-turbo-component-lib-template\packages\playground\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, watch, watchEffect } from 'vue';

// 调试日志
console.log('App.vue: Initializing');
import { Repl, useStore, useVueImportMap } from '@vue/repl';
import Monaco from '@vue/repl/monaco-editor';

const { importMap: builtinImportMap, vueVersion, productionMode } = useVueImportMap();
const store = useStore(
  {
    builtinImportMap,
    vueVersion,
    showOutput: ref(false),
    outputMode: ref('preview'),
  },
  '#eNp9kUFLwzAUx7/KM5cqzBXR0+gGKgP1oKKCl1xG99ZlpklIXuag9Lv7krK5w9it7//7v/SXthP3zo23EcVEVKH2yhEEpOhm0qjWWU/QgccV9LDytoWCq4U00tTWBII2NDBN/LJ4Qq0tfFuvlxfFlTRVORzHB/FA2Dq9IOQJoFrfzLouL/d9VfKUU2VcJNhet3aJeioFcymgZFiVR/tiJCjw61eqGW+CNWzepX0pats6pdG/OVKsJ8UEMklswXa/LzkjH3G0z+s11j8n8k3YpUyKd48B/RalODBa+AZpwPPPV9zx8wGyfdTcPgM/MFgdk+NQe4hmydpHvWz7nL+/Ms1XmO8ITdhfKommZp/7UvA/eTxz9X/d2/Fd3pOmF/0fEx+nNQ==',
);
watchEffect(() => history.replaceState({}, '', store.serialize()));

// 深度观察store状态变化
watch(
  store,
  (newStore) => {
    console.log('Store changed:', newStore);
  },
  { deep: true },
);
vueVersion.value = '3.5.13';
// 尝试禁用生产模式来解决只读属性问题
productionMode.value = true;
</script>

<template>
  <Repl
    :store="store"
    :editor="Monaco"
    :show-compile-output="true"
    :auto-resize="true"
    split-direction="vertical"
    :show-code="true"
    :show-tabs="true"
    :editor-options="{ minimap: { enabled: true } }"
    style="width: 100vw; height: 100vh"
  />
</template>
