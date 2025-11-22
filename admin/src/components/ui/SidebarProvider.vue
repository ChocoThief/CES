<script setup lang="ts">
import { type HTMLAttributes, provide, ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface SidebarProviderProps {
  class?: HTMLAttributes['class']
  defaultOpen?: boolean
}

const props = withDefaults(defineProps<SidebarProviderProps>(), {
  defaultOpen: true,
})

const isMobile = ref(false)
const isOpen = ref(props.defaultOpen)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

provide('sidebarProvider', {
  isMobile,
  isOpen,
  toggleSidebar,
})
</script>

<template>
  <div :class="cn('flex min-h-screen w-full', props.class)">
    <slot />
  </div>
</template>
