<template>
  <div
    ref="elementRef"
    :id="id"
    :class="className"
    v-motion
    :initial="initialState"
    :enter="enterState"
    :leave="leaveState"
    :transition="transitionConfig"
    :aria-label="ariaLabel"
    :role="ariaLabel ? 'region' : undefined"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation.js'
import { motionPresets } from '@/animations.js'

// Props
const props = defineProps({
  id: {
    type: String,
    default: undefined
  },
  className: {
    type: String,
    default: ''
  },
  variants: {
    type: Object,
    default: () => motionPresets.fadeIn
  },
  delay: {
    type: Number,
    default: 0
  },
  threshold: {
    type: Number,
    default: 0.1
  },
  reduceMotion: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: undefined
  }
})

// Use scroll animation composable
const { elementRef, animationState, prefersReducedMotion } = useScrollAnimation({
  threshold: props.threshold,
  delay: props.delay,
  reduceMotion: props.reduceMotion
})

// Computed animation states
const initialState = computed(() => {
  if (prefersReducedMotion.value) {
    return { opacity: 1, x: 0, y: 0, scale: 1 }
  }
  return props.variants.initial || props.variants.hidden || { opacity: 0, y: 20 }
})

const enterState = computed(() => {
  if (prefersReducedMotion.value) {
    return { opacity: 1, x: 0, y: 0, scale: 1 }
  }
  return props.variants.enter || props.variants.visible || { opacity: 1, y: 0 }
})

const leaveState = computed(() => {
  if (prefersReducedMotion.value) {
    return { opacity: 1, x: 0, y: 0, scale: 1 }
  }
  return props.variants.leave || props.variants.exit || props.variants.initial || props.variants.hidden || { opacity: 0, y: 20 }
})

// Transition configuration
const transitionConfig = computed(() => {
  if (prefersReducedMotion.value) {
    return { duration: 0, delay: 0 }
  }
  
  const baseTransition = {
    duration: 600,
    delay: props.delay * 1000
  }
  
  // If variants have custom transition, merge it
  const variantTransition = props.variants.enter?.transition || props.variants.visible?.transition
  if (variantTransition) {
    return { ...baseTransition, ...variantTransition }
  }
  
  return baseTransition
})
</script>

<style scoped>
/* Add any component-specific styles if needed */
</style>