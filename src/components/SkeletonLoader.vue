<template>
  <div class="animate-pulse space-y-6 p-6">
    <!-- Header skeleton -->
    <div class="h-8 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
    
    <!-- Content skeleton -->
    <div class="space-y-3">
      <div class="h-4 bg-gray-200 dark:bg-slate-700 rounded"></div>
      <div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-5/6"></div>
      <div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-4/6"></div>
    </div>
    
    <!-- Additional content skeleton -->
    <div class="space-y-3">
      <div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
      <div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-2/3"></div>
    </div>
  </div>
</template>

<script setup>
// Simple skeleton loader for lazy-loaded components
</script>

<style scoped>
/* Skeleton animation is handled by Tailwind's animate-pulse */
</style>