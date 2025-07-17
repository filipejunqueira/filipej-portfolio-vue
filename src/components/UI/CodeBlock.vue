<template>
  <div :class="containerClasses">
    <pre class="whitespace-pre-wrap leading-relaxed text-sm">
      <slot />
    </pre>
  </div>
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
const containerClasses = computed(() => {
  const baseClasses = "bg-gray-800 dark:bg-slate-900/80 p-4 rounded-lg font-mono text-xs overflow-x-auto shadow-inner"
  
  return `${baseClasses} ${props.class}`
})
</script>