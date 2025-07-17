<template>
  <a
    :href="`#${targetId}`"
    @click="handleSkip"
    class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-emerald-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
  >
    Skip to main content
  </a>
</template>

<script setup>
/**
 * SkipToContent Component: Provides a skip link for screen readers and keyboard users
 */

const props = defineProps({
  /** ID of the main content element */
  targetId: {
    type: String,
    default: 'main'
  }
})

const handleSkip = (e) => {
  e.preventDefault()
  const target = document.getElementById(props.targetId)
  if (target) {
    target.focus()
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>