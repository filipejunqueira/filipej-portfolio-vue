<template>
  <!-- Loading state -->
  <div 
    v-if="isLoading || !imageUrl"
    :class="`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 animate-pulse rounded ${className}`"
    aria-hidden="true"
  />
  
  <!-- Error state -->
  <div 
    v-else-if="hasError"
    :class="`bg-gray-100 dark:bg-slate-800 flex items-center justify-center ${className}`"
    role="img"
    :aria-label="`Failed to load image: ${alt}`"
  >
    <span class="text-gray-400 dark:text-slate-500 text-sm text-center px-2">
      Image unavailable
    </span>
  </div>
  
  <!-- Loaded image -->
  <OptimizedImage
    v-else
    :src="imageUrl"
    :alt="alt"
    :class="className"
    @click="onClick && onClick(imageUrl)"
    @error="onError"
    :sizes="sizes"
    :priority="priority"
    v-bind="$attrs"
  />
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import OptimizedImage from './OptimizedImage.vue'

/**
 * LazyImage Component: Dynamically loads images on demand
 */

const props = defineProps({
  /** Name of the image to load (without extension) */
  imageName: {
    type: String,
    required: true
  },
  /** Alt text for accessibility */
  alt: {
    type: String,
    required: true
  },
  /** CSS classes */
  className: {
    type: String,
    default: ''
  },
  /** Click handler */
  onClick: {
    type: Function,
    default: null
  },
  /** Error handler */
  onError: {
    type: Function,
    default: null
  },
  /** Responsive sizes attribute */
  sizes: {
    type: String,
    default: null
  },
  /** Whether image is above fold */
  priority: {
    type: Boolean,
    default: false
  },
  /** Whether to trigger loading */
  shouldLoad: {
    type: Boolean,
    default: true
  }
})

// Reactive state
const imageUrl = ref(null)
const isLoading = ref(false)
const hasError = ref(false)

// Load image with WebP fallback
watchEffect(async () => {
  if (!props.shouldLoad || !props.imageName) return

  isLoading.value = true
  hasError.value = false
  
  try {
    // Try WebP first
    try {
      const webpModule = await import(`@/assets/${props.imageName}.webp`)
      imageUrl.value = webpModule.default
    } catch (webpError) {
      // Fallback to PNG
      const pngModule = await import(`@/assets/${props.imageName}.png`)
      imageUrl.value = pngModule.default
    }
  } catch (error) {
    console.warn(`Failed to load image: ${props.imageName}`, error)
    hasError.value = true
    if (props.onError) props.onError(error)
  } finally {
    isLoading.value = false
  }
})

// Enable attribute inheritance
defineOptions({
  inheritAttrs: false
})
</script>