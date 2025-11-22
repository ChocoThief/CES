<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <nav :class="cn('flex flex-col gap-1 px-2', props.class)">
    <slot />
  </nav>
</template>
