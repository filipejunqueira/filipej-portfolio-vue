// composables/useScrollAnimation.js
import { ref, computed } from 'vue'
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

/**
 * Vue composable for scroll-triggered animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (default: 0.1)
 * @param {number} options.delay - Animation delay in seconds (default: 0)
 * @param {boolean} options.triggerOnce - Whether to trigger only once (default: true)
 * @param {boolean} options.reduceMotion - Whether to respect reduced motion (default: false)
 * @returns {Object} - { elementRef, isVisible, prefersReducedMotion }
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  delay = 0,
  triggerOnce = true,
  reduceMotion = false
} = {}) => {
  const elementRef = ref()
  const isVisible = ref(false)
  const prefersReducedMotion = usePreferredReducedMotion()

  // Use VueUse's intersection observer
  const { stop } = useIntersectionObserver(
    elementRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // Apply delay if specified and motion is not reduced
        if (delay > 0 && prefersReducedMotion.value !== 'reduce' && !reduceMotion) {
          setTimeout(() => {
            isVisible.value = true
          }, delay * 1000)
        } else {
          isVisible.value = true
        }

        // Stop observing if triggerOnce is true
        if (triggerOnce) {
          stop()
        }
      } else if (!triggerOnce) {
        isVisible.value = false
      }
    },
    {
      threshold,
      rootMargin: '50px 0px' // Start animation slightly before element enters view
    }
  )

  // Computed property for animation state
  const animationState = computed(() => {
    if (prefersReducedMotion.value === 'reduce' || reduceMotion) {
      return 'visible' // Skip animations, show content immediately
    }
    return isVisible.value ? 'visible' : 'hidden'
  })

  return {
    elementRef,
    isVisible,
    animationState,
    prefersReducedMotion: computed(() => prefersReducedMotion.value === 'reduce' || reduceMotion)
  }
}