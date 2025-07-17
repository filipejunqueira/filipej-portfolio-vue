<template>
  <component 
    :is="as" 
    :class="cardClasses"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  as: {
    type: String,
    default: 'div'
  },
  class: {
    type: String,
    default: ''
  }
})

// Computed classes
const cardClasses = computed(() => {
  const baseClasses = "bg-white dark:bg-slate-800/50 rounded-lg shadow-lg dark:shadow-slate-700/70 p-6"
  return `${baseClasses} ${props.class}`
})
</script>