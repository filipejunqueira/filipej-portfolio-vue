<template>
  <a
    :href="href"
    :target="isExternal ? '_blank' : '_self'"
    :rel="isExternal ? 'noopener noreferrer' : ''"
    :class="`flex items-center justify-center font-medium py-2.5 px-5 rounded-md text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto min-h-[48px] text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/80 ${bgColorInitial} ${bgColorHover}`"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :aria-label="ariaLabel || textInitial"
  >
    <div class="relative w-full text-center overflow-hidden h-5">
      <!-- Initial state (icon + text) -->
      <span
        :class="`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${isHovered ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`"
        :aria-hidden="isHovered"
      >
        <component
          v-if="IconInitial"
          :is="IconInitial"
          :size="18"
          class="mr-2 flex-shrink-0"
          aria-hidden="true"
        />
        <span class="truncate">{{ textInitial }}</span>
      </span>
      
      <!-- Hover state (text only) -->
      <span
        :class="`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`"
        :aria-hidden="!isHovered"
      >
        <span class="truncate">{{ textHover }}</span>
      </span>
    </div>
  </a>
</template>

<script setup>
import { ref } from 'vue'

/**
 * HoverFlipButton Component: A reusable button with a text/icon flip animation.
 */

defineProps({
  /** URL the button links to */
  href: {
    type: String,
    required: true
  },
  /** Lucide icon for initial state */
  IconInitial: {
    type: [Object, Function],
    default: null
  },
  /** Text for initial state */
  textInitial: {
    type: String,
    required: true
  },
  /** Text for hover state */
  textHover: {
    type: String,
    required: true
  },
  /** Tailwind CSS bg color for initial state */
  bgColorInitial: {
    type: String,
    required: true
  },
  /** Tailwind CSS bg color for hover state */
  bgColorHover: {
    type: String,
    required: true
  },
  /** If true, opens link in new tab */
  isExternal: {
    type: Boolean,
    default: true
  },
  /** ARIA label for accessibility */
  ariaLabel: {
    type: String,
    default: null
  }
})

// State to track hover status
const isHovered = ref(false)
</script>