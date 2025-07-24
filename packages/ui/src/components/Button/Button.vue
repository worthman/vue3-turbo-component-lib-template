<!--
 * @Author: 'worthman' renth3@asiainfo.com
 * @Date: 2025-04-11 14:52:36
 * @LastEditors: 'worthman' renth3@asiainfo.com
 * @LastEditTime: 2025-07-23 16:16:58
 * @FilePath: \vue3-turbo-component-lib-template\packages\ui\src\components\Button\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <button
    class="v-button"
    :class="[
      type ? `v-button--${type}` : '',
      size ? `v-button--${size}` : '',
      {
        'is-round': round,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from './Button.types';

defineOptions({
  name: 'VButton',
});

const {
  type = undefined,
  size = 'medium',
  disabled = false,
  round = false,
} = defineProps<ButtonProps>();

const emit = defineEmits<ButtonEmits>();

const handleClick = (event: MouseEvent) => {
  if (!disabled) {
    emit('click', event);
  }
};
</script>

<!-- <style src="./Button.scss"></style> 这种写法 gulp + rollup 打包会报错，vite 打包不会，所以采用以下都兼容的写法：-->
<style lang="scss">
@use './Button.scss' as *;
</style>
