<template>
  <div id="app">
    <router-view />
    <Toaster position="top-right" richColors :duration="4000" />
  </div>
</template>

<script setup>
import 'vue-sonner/style.css';
import { Toaster } from 'vue-sonner';
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
}

#app {
  min-height: 100vh;
}
</style>
