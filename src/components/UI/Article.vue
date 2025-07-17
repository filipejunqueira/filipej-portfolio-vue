<template>
  <article 
    :class="articleClasses"
    v-bind="$attrs"
  >
    <slot />
  </article>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

// Computed classes
const articleClasses = computed(() => {
  const baseClasses = "bg-emerald-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl dark:shadow-slate-700/60 dark:hover:shadow-slate-600/70 dark:border dark:border-slate-700 transition-all duration-300 flex flex-col h-full"
  
  return `${baseClasses} ${props.class}`
})
</script>