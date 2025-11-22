<script setup lang="ts">
import { SelectRoot, type SelectRootProps } from 'radix-vue'

interface SelectProps extends SelectRootProps {}

const props = defineProps<SelectProps>()
</script>

<template>
  <SelectRoot v-bind="props">
    <slot />
  </SelectRoot>
</template>
