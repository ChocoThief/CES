<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SelectValue, type SelectValueProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends SelectValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <SelectValue v-bind="delegatedProps" :class="cn('', props.class)">
    <slot />
  </SelectValue>
</template>
