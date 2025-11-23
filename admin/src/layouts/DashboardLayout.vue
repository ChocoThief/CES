<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider storage-key="ces-admin-sidebar" :default-open="true">
    <AppSidebar />
    <SidebarInset>
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>
