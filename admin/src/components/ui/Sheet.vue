<script setup lang="ts">
import { DialogRoot, type DialogRootProps } from 'radix-vue'

interface SheetProps extends DialogRootProps {}

const props = defineProps<SheetProps>()
</script>

<template>
  <DialogRoot v-bind="props">
    <slot />
  </DialogRoot>
</template>
