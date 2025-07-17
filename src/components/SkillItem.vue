<template>
  <li
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0 }"
    :hovered="{ scale: 1.02, y: -2 }"
    class="bg-emerald-50 dark:bg-slate-700/50 p-3 rounded-lg shadow-sm flex items-center space-x-3 hover:shadow-md transition-shadow"
  >
    <component
      v-if="icon"
      :is="icon"
      class="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0"
      :stroke-width="2"
      aria-hidden="true"
    />
    
    <TextPrimary class="text-sm font-medium">
      {{ name }}
    </TextPrimary>
    
    <TextMuted 
      v-if="proficiency"
      class="text-xs ml-auto"
    >
      ({{ proficiency }})
    </TextMuted>
  </li>
</template>

<script setup>
import { TextPrimary, TextMuted } from './UI'

/**
 * SkillItem Component: Renders a single skill item.
 */

defineProps({
  /** Name of the skill */
  name: {
    type: String,
    required: true
  },
  /** Lucide icon component */
  icon: {
    type: [Object, Function],
    default: null
  },
  /** Optional proficiency level */
  proficiency: {
    type: String,
    default: null
  }
})
</script>