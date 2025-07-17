<template>
  <component 
    :is="as" 
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { focusRing, buttonVariants, buttonSizes } from './utils.js'

// Props
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  as: {
    type: String,
    default: 'button'
  },
  class: {
    type: String,
    default: ''
  }
})

// Computed classes
const buttonClasses = computed(() => {
  const baseClasses = "rounded-md font-medium transition-colors duration-300 inline-flex items-center justify-center"
  const variantClass = buttonVariants[props.variant]
  const sizeClass = buttonSizes[props.size]
  
  return `${baseClasses} ${focusRing} ${variantClass} ${sizeClass} ${props.class}`
})
</script>