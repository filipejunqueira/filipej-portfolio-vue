// composables/useDarkMode.js
import { ref, watch, onMounted } from 'vue'
import { useLocalStorage, usePreferredDark } from '@vueuse/core'

/**
 * Vue composable for managing dark mode state
 * Uses localStorage for persistence and system preference as fallback
 * @returns {object} - { isDarkMode, toggleDarkMode }
 */
export const useDarkMode = () => {
  // Use VueUse's useLocalStorage with system preference as default
  const preferredDark = usePreferredDark()
  const isDarkMode = useLocalStorage('darkMode', preferredDark.value)

  // Update DOM classes when dark mode changes
  watch(isDarkMode, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })

  // Listen for system theme changes
  watch(preferredDark, (newValue) => {
    // Only update if user hasn't explicitly set a preference
    const stored = localStorage.getItem('darkMode')
    if (stored === null || stored === 'null') {
      isDarkMode.value = newValue
    }
  })

  // Apply initial dark mode class on mount
  onMounted(() => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }

  return {
    isDarkMode,
    toggleDarkMode
  }
}