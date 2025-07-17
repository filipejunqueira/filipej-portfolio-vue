<template>
  <component 
    :is="as" 
    :class="textClasses"
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
    default: 'span'
  },
  class: {
    type: String,
    default: ''
  }
})

// Computed classes
const textClasses = computed(() => {
  const baseClasses = "text-gray-700 dark:text-slate-300"
  return `${baseClasses} ${props.class}`
})
</script>