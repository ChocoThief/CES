<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from 'radix-vue'

interface SheetTriggerProps extends DialogTriggerProps {}

const props = defineProps<SheetTriggerProps>()
</script>

<template>
  <DialogTrigger v-bind="props">
    <slot />
  </DialogTrigger>
</template>
