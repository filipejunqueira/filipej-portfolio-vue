<template>
  <button 
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <component 
      v-if="icon" 
      :is="icon" 
      class="w-5 h-5" 
      aria-hidden="true" 
    />
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { focusRing, iconButtonVariants, iconButtonSizes } from './utils.js'

// Props
const props = defineProps({
  icon: {
    type: [Object, Function],
    default: null
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  class: {
    type: String,
    default: ''
  }
})

// Computed classes
const buttonClasses = computed(() => {
  const baseClasses = "rounded-full transition-colors duration-300 inline-flex items-center justify-center"
  const variantClass = iconButtonVariants[props.variant]
  const sizeClass = iconButtonSizes[props.size]
  
  return `${baseClasses} ${focusRing} ${variantClass} ${sizeClass} ${props.class}`
})
</script>