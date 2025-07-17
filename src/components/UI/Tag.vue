<template>
  <span :class="tagClasses">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { tagVariants } from './utils.js'

// Props
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'secondary'].includes(value)
  },
  class: {
    type: String,
    default: ''
  }
})

// Computed classes
const tagClasses = computed(() => {
  const baseClasses = "inline-block px-3 py-1 rounded-full text-sm font-medium"
  const variantClass = tagVariants[props.variant]
  
  return `${baseClasses} ${variantClass} ${props.class}`
})
</script>