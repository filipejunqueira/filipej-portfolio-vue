<template>
  <a 
    :class="linkClasses"
    v-bind="linkAttrs"
  >
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { focusRing, linkVariants } from './utils.js'

// Props
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'button'].includes(value)
  },
  external: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
})

// Computed classes
const linkClasses = computed(() => {
  const baseClasses = "transition-colors duration-300"
  const focusClasses = props.external ? focusRing : ""
  const variantClass = linkVariants[props.variant]
  
  return `${baseClasses} ${focusClasses} ${variantClass} ${props.class}`
})

// Computed attributes for external links
const linkAttrs = computed(() => {
  const attrs = { ...$attrs }
  
  if (props.external) {
    attrs.target = "_blank"
    attrs.rel = "noopener noreferrer"
  }
  
  return attrs
})
</script>