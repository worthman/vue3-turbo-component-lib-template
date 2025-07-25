<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-show="open"
        class="v-dialog__wrapper"
        :class="{ 'is-fullscreen': fullscreen }"
        @click.self="handleWrapperClick"
      >
        <div
          ref="dialogRef"
          class="v-dialog"
          :class="[customClass, { 'is-center': center }]"
          :style="style"
          role="dialog"
          aria-modal="true"
          :aria-label="title || 'dialog'"
          @keydown.esc="handleEscClose"
        >
          <div v-if="showClose" class="v-dialog__header">
            <slot name="header">
              <span class="v-dialog__title">{{ title }}</span>
            </slot>
            <button type="button" class="v-dialog__headerbtn" aria-label="Close" @click="close">
              <i class="v-dialog__close">×</i>
            </button>
          </div>
          <div class="v-dialog__body">
            <slot />
          </div>
          <div v-if="showFooter" class="v-dialog__footer">
            <slot name="footer">
              <span v-if="footerContent">{{ footerContent }}</span>
              <div v-else class="v-dialog__footer-buttons">
                <button @click="close">取消</button>
                <button @click="confirm">确定</button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { DialogEmits, DialogProps } from './Dialog.types';

defineOptions({
  name: 'TDialog',
});

const props = withDefaults(defineProps<DialogProps>(), {
  title: '',
  width: '50%',
  customClass: '',
  center: false,
  showClose: true,
  modal: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  showFooter: false,
  fullscreen: false,
  draggable: false,
  top: '15vh',
  footerContent: '',
});

const open = defineModel<boolean>('open');
const emit = defineEmits<DialogEmits>();
const dialogRef = ref<HTMLElement | null>(null);
const style = computed(() => {
  const style: Record<string, string> = {};
  if (!props.fullscreen) {
    style.width = props.width;
    if (props.top) {
      style.marginTop = props.top;
    }
  }
  return style;
});

let initialPosition = { x: 0, y: 0 };
let isDragging = false;

const handleWrapperClick = () => {
  if (props.closeOnClickModal) {
    close();
  }
};

const handleEscClose = (event: KeyboardEvent) => {
  if (props.closeOnPressEscape && event.key === 'Escape') {
    close();
  }
};

const close = () => {
  emit('update:open', false);
  emit('close');
};

const confirm = () => {
  close();
};

const startDrag = (event: MouseEvent) => {
  if (!props.draggable || props.fullscreen) return;

  const dialog = dialogRef.value;
  if (!dialog) return;

  isDragging = true;
  const rect = dialog.getBoundingClientRect();
  initialPosition = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('mouseup', stopDrag);
};

const handleDrag = (event: MouseEvent) => {
  if (!isDragging || !dialogRef.value) return;

  const dialog = dialogRef.value;
  dialog.style.position = 'absolute';
  dialog.style.margin = '0';
  dialog.style.left = `${event.clientX - initialPosition.x}px`;
  dialog.style.top = `${event.clientY - initialPosition.y}px`;
};

const stopDrag = () => {
  isDragging = false;
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', stopDrag);
};

watch(
  () => open.value,
  (val) => {
    if (val) {
      emit('open');
      nextTick(() => {
        if (props.draggable && dialogRef.value) {
          dialogRef.value.addEventListener('mousedown', startDrag);
        }
      });
    } else {
      if (props.draggable && dialogRef.value) {
        dialogRef.value.removeEventListener('mousedown', startDrag);
      }
      emit('closed');
    }
  },
);

onMounted(() => {
  if (open.value && props.draggable && dialogRef.value) {
    dialogRef.value.addEventListener('mousedown', startDrag);
  }
});

onBeforeUnmount(() => {
  if (props.draggable && dialogRef.value) {
    dialogRef.value.removeEventListener('mousedown', startDrag);
  }
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', stopDrag);
});
</script>

<style lang="scss">
@use './Dialog.scss' as *;
</style>
