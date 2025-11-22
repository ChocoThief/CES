<script setup lang="ts">
import { type HTMLAttributes, inject, computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface SidebarMenuButtonProps extends PrimitiveProps {
  class?: HTMLAttributes['class']
  active?: boolean
}

const props = withDefaults(defineProps<SidebarMenuButtonProps>(), {
  as: 'button',
  active: false,
})

const sidebar = inject<any>('sidebar', null)

const isCollapsed = computed(() => sidebar?.isCollapsed?.value ?? false)

const delegatedProps = computed(() => {
  const { class: _, active, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive
    v-bind="delegatedProps"
    :class="cn(
      'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      props.active && 'bg-accent text-accent-foreground',
      isCollapsed && 'justify-center px-2',
      props.class
    )"
  >
    <slot />
  </Primitive>
</template>
