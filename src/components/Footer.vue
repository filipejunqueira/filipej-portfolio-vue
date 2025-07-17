<template>
  <footer class="bg-emerald-700 dark:bg-slate-800 text-emerald-100 dark:text-slate-300 py-10 text-center">
    <div class="container mx-auto">
      <p class="text-sm">
        &copy; {{ currentYear }} Filipe L. Q. Junqueira. All rights
        reserved.
      </p>
      <p class="text-xs mt-2 opacity-80 dark:opacity-70">
        Crafted with Vue.js, Tailwind CSS, VueUse Motion &amp; Love :-)
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// Get current year
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Component-specific styles if needed */
</style>