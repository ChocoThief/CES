<script setup lang="ts">
import { DialogRoot, type DialogRootProps } from 'radix-vue'

interface DialogProps extends DialogRootProps {}

const props = defineProps<DialogProps>()
</script>

<template>
  <DialogRoot v-bind="props">
    <slot />
  </DialogRoot>
</template>
