<template>
  <input 
    :class="inputClasses"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script setup>
import { computed } from 'vue'
import { focusRing } from './utils.js'

// Props
const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})

// Emits
const emit = defineEmits(['update:modelValue'])

// Computed classes
const inputClasses = computed(() => {
  const baseClasses = "w-full px-4 py-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-md text-gray-800 dark:text-slate-200 placeholder-gray-500 dark:placeholder-slate-400 transition-colors duration-300"
  
  return `${baseClasses} ${focusRing} ${props.class}`
})
</script>