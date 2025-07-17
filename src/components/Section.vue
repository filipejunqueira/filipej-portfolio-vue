<template>
  <section
    :id="id"
    class="py-16 md:py-20 bg-white dark:bg-slate-800/80 rounded-xl shadow-xl dark:shadow-black/30 mb-12 md:mb-16 px-6 md:px-10"
    :aria-labelledby="`${id}-title`"
  >
    <div class="container mx-auto">
      <h2
        :id="`${id}-title`"
        :class="`${titleClassName} font-medium text-emerald-700 dark:text-emerald-400 mb-10 md:mb-14 text-center flex items-center justify-center`"
      >
        <component
          v-if="icon"
          :is="icon"
          class="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-emerald-500 dark:text-emerald-400"
          :stroke-width="2"
          aria-hidden="true"
        />
        {{ title }}
      </h2>
      
      <slot />
    </div>
  </section>
</template>

<script setup>
/**
 * Section Component: A styled container for main content sections of the page.
 * Provides consistent padding, background, shadow, and a title structure.
 */

defineProps({
  /** The title of the section */
  title: {
    type: String,
    required: true
  },
  /** Lucide icon component to display next to the title */
  icon: {
    type: [Object, Function],
    default: null
  },
  /** HTML ID for the section, used for navigation and ARIA */
  id: {
    type: String,
    required: true
  },
  /** CSS classes for the title */
  titleClassName: {
    type: String,
    default: 'text-3xl sm:text-4xl'
  }
})
</script>