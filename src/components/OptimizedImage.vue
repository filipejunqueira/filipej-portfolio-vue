<template>
  <div class="relative">
    <!-- Loading skeleton -->
    <div 
      v-if="!isLoaded"
      :class="[
        'absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 animate-pulse rounded',
        className
      ]"
      aria-hidden="true"
    />
    
    <!-- Optimized image with WebP support -->
    <picture>
      <!-- WebP source for modern browsers -->
      <source 
        :srcset="webpSource" 
        type="image/webp"
        :sizes="sizes"
      />
      
      <!-- Fallback to original format -->
      <img
        :src="src"
        :alt="alt"
        :class="[
          className,
          isLoaded ? 'opacity-100' : 'opacity-0',
          'transition-opacity duration-300'
        ]"
        :loading="loadingStrategy"
        :sizes="sizes"
        @click="handleClick"
        @error="handleError"
        @load="handleLoad"
        v-bind="$attrs"
      />
    </picture>
    
    <!-- Error fallback -->
    <div 
      v-if="hasError"
      :class="[
        'absolute inset-0 bg-gray-100 dark:bg-slate-800 flex items-center justify-center',
        className
      ]"
      role="img"
      :aria-label="`Failed to load image: ${alt}`"
    >
      <span class="text-gray-400 dark:text-slate-500 text-sm text-center px-2">
        Image unavailable
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  webpSrc: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  sizes: {
    type: String,
    default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  },
  priority: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['click', 'error', 'load'])

// Reactive state
const hasError = ref(false)
const isLoaded = ref(false)

// Computed properties
const webpSource = computed(() => {
  if (props.webpSrc) return props.webpSrc
  
  const lastDotIndex = props.src.lastIndexOf('.')
  if (lastDotIndex !== -1) {
    return props.src.substring(0, lastDotIndex) + '.webp'
  }
  return props.src
})

const loadingStrategy = computed(() => {
  return props.priority ? 'eager' : props.loading
})

// Event handlers
const handleError = () => {
  hasError.value = true
  emit('error')
}

const handleLoad = () => {
  isLoaded.value = true
  emit('load')
}

const handleClick = (event) => {
  emit('click', event)
}
</script>

<style scoped>
/* Component-specific styles if needed */
</style>