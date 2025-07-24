<template>
  <a-space>
    <TDialog v-model:open="open">
      <div>弹窗测试2222</div>
    </TDialog>
    <a-button @click="open = true"> 弹窗 </a-button>
  </a-space>
</template>

<script setup lang="ts">
// import { TDialog } from '~@worthman/ui';
import { ref } from 'vue';
// console.log(TDialog);
const open = ref(false);
</script>
