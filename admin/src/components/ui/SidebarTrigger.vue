<script setup lang="ts">
import { type HTMLAttributes, inject, computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { PanelLeft } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})

const sidebarProvider = inject<any>('sidebarProvider', null)

const handleClick = () => {
  sidebarProvider?.toggleSidebar()
}

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive
    v-bind="delegatedProps"
    @click="handleClick"
    :class="cn(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9',
      props.class
    )"
  >
    <PanelLeft class="h-4 w-4" />
    <span class="sr-only">Toggle Sidebar</span>
  </Primitive>
</template>
