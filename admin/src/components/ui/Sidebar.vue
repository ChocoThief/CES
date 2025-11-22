<script setup lang="ts">
import { type HTMLAttributes, provide, ref, computed } from 'vue'
import { cn } from '@/lib/utils'

interface SidebarProps {
  class?: HTMLAttributes['class']
  defaultCollapsed?: boolean
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

const props = withDefaults(defineProps<SidebarProps>(), {
  defaultCollapsed: false,
  collapsible: 'offcanvas',
})

const isCollapsed = ref(props.defaultCollapsed)

const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value
}

// Provide sidebar context
provide('sidebar', {
  isCollapsed,
  toggleCollapsed,
  collapsible: props.collapsible,
})
</script>

<template>
  <aside
    :data-collapsed="isCollapsed"
    :class="cn(
      'flex h-full flex-col border-r bg-background transition-all duration-300',
      isCollapsed ? 'w-16' : 'w-64',
      props.class
    )"
  >
    <slot />
  </aside>
</template>
