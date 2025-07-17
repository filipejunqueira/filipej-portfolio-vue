<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { containerSizes } from './utils.js'

// Props
const props = defineProps({
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['sm', 'default', 'lg', 'xl'].includes(value)
  },
  class: {
    type: String,
    default: ''
  }
})

// Computed classes
const containerClasses = computed(() => {
  const baseClasses = "container mx-auto px-6"
  const sizeClass = containerSizes[props.size]
  
  return `${baseClasses} ${sizeClass} ${props.class}`
})
</script>