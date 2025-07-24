<!--
 * @Author: 'worthman' renth3@asiainfo.com
 * @Date: 2025-04-11 14:52:36
 * @LastEditors: 'worthman' renth3@asiainfo.com
 * @LastEditTime: 2025-07-24 10:55:17
 * @FilePath: \tue3-turbo-component-lib-template\packages\ui\src\components\Button\Button.tue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <button
    class="t-button"
    :class="[
      type ? `t-button--${type}` : '',
      size ? `t-button--${size}` : '',
      {
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-plain': plain,
        'is-text': text,
        'is-bg': bg,
        'is-link': link,
        'is-loading': loading,
      },
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <i v-if="loading" class="loading-icon">{{ loadingIcon || '加载中...' }}</i>
    <i v-else-if="icon" :class="icon" />
    <span v-if="$slots.default" class="button-text"><slot /></span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from './Button.types';

defineOptions({
  name: 'TButton',
});

const {
  type = undefined,
  size = 'medium',
  disabled = false,
  round = false,
  plain = false,
  text = false,
  bg = false,
  link = false,
  loading = false,
  loadingIcon = undefined,
  icon = undefined,
  circle = false,
} = defineProps<ButtonProps>();

const emit = defineEmits<ButtonEmits>();

const handleClick = (event: MouseEvent) => {
  if (!disabled && !loading) {
    emit('click', event);
  }
};
</script>

<!-- <style src="./Button.scss"></style> 这种写法 gulp + rollup 打包会报错，tite 打包不会，所以采用以下都兼容的写法：-->
<style lang="scss">
@use './Button.scss' as *;
</style>
