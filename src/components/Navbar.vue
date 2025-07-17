<template>
  <nav class="bg-emerald-600 dark:bg-slate-800 text-white sticky top-0 z-50 shadow-lg dark:shadow-black/30" aria-label="Main navigation">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <!-- Profile Picture with Rotation Animation -->
          <div 
            class="mr-3 w-10 h-10"
            v-motion
            :initial="{ scale: 1, rotate: 0 }"
            :hovered="{ scale: 1.1, rotate: 15 }"
            :transition="{ type: 'spring', stiffness: 300, damping: 15 }"
          >
            <OptimizedImage
              :src="profilePic"
              :webpSrc="profilePicWebP"
              alt="Filipe L. Q. Junqueira - Profile Picture"
              class="w-full h-full rounded-full object-cover cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:ring-offset-emerald-600 dark:focus:ring-offset-slate-800"
              :priority="true"
              sizes="40px"
            />
          </div>
          <!-- Brand Name with Hover Animation -->
          <a
            href="#home"
            @click="handleNavClick('home')"
            v-motion
            :hovered="brandHoverAnimation"
            class="flex-shrink-0 text-xl md:text-2xl font-medium focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 rounded-sm"
          >
            Filipe L. Q. Junqueira
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center">
          <div class="ml-10 flex items-center space-x-1">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              @click="handleNavClick(link.id)"
              v-motion
              :hovered="navLinkHoverAnimation"
              class="hover:bg-emerald-700/50 dark:hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:ring-offset-emerald-600 dark:focus:ring-offset-slate-800"
            >
              {{ link.label }}
            </a>
          </div>
          
          <!-- Desktop Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            v-motion
            :initial="{ scale: 1, rotate: 0 }"
            :hovered="{ scale: 1.15, rotate: isDarkMode ? -15 : 15 }"
            :tap="{ scale: 0.9 }"
            :transition="{ type: 'spring', stiffness: 400, damping: 15 }"
            class="ml-6 p-2 rounded-full hover:bg-emerald-700/50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-slate-300 focus:ring-offset-emerald-600 dark:focus:ring-offset-slate-800 transition-colors duration-200"
            :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <Sun v-if="isDarkMode" :size="20" class="text-yellow-400" aria-hidden="true" />
            <Moon v-else :size="20" class="text-slate-300" aria-hidden="true" />
          </button>
        </div>
        
        <!-- Mobile Menu Button and Dark Mode Toggle -->
        <div class="-mr-2 flex md:hidden items-center">
          <!-- Mobile Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            v-motion
            :initial="{ scale: 1, rotate: 0 }"
            :hovered="{ scale: 1.15, rotate: isDarkMode ? -15 : 15 }"
            :tap="{ scale: 0.9 }"
            :transition="{ type: 'spring', stiffness: 400, damping: 15 }"
            class="p-2 rounded-full text-emerald-100 dark:text-slate-300 hover:text-white dark:hover:text-white hover:bg-emerald-700/50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-slate-300 focus:ring-offset-emerald-600 dark:focus:ring-offset-slate-800 mr-2"
            :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <Sun v-if="isDarkMode" :size="22" class="text-yellow-400" aria-hidden="true" />
            <Moon v-else :size="22" aria-hidden="true" />
          </button>
          
          <!-- Hamburger Menu Button -->
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="bg-emerald-700 dark:bg-slate-700/50 inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-600 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-emerald-700 dark:focus:ring-offset-slate-800 focus:ring-white"
            aria-controls="mobile-menu"
            :aria-expanded="isOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger Icon -->
            <svg
              v-if="!isOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- X Icon -->
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          @click="handleNavClick(link.id)"
          class="hover:bg-emerald-700/50 dark:hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:ring-offset-emerald-600 dark:focus:ring-offset-slate-800"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import OptimizedImage from './OptimizedImage.vue'
import profilePic from '@/assets/captainbroccoli.png'
import profilePicWebP from '@/assets/captainbroccoli.webp'
import { motionPresets } from '@/animations.js'
import { siteConfig } from '@/config/sections.js'

// Props
const props = defineProps({
  setActiveSection: {
    type: Function,
    required: true
  },
  toggleDarkMode: {
    type: Function,
    required: true
  },
  isDarkMode: {
    type: Boolean,
    required: true
  }
})

// State for mobile menu visibility
const isOpen = ref(false)

// Navigation links - automatically synced with site configuration
const navLinks = computed(() => [
  { id: "home", label: "Home" },
  ...siteConfig.sections.map(section => ({ id: section.id, label: section.label }))
])

// Animation variants for hover effects
const navLinkHoverAnimation = {
  rotate: [0, -1.5, 1.5, -1.5, 1.5, 0],
  scale: 1.03,
  transition: { duration: 350, ease: "easeInOut" }
}

const brandHoverAnimation = {
  scale: [1, 1.02, 1, 1.02, 1],
  color: props.isDarkMode
    ? ["#e2e8f0", "#6ee7b7", "#e2e8f0"]
    : ["#FFFFFF", "#A7F3D0", "#FFFFFF"],
  transition: { duration: 500, ease: "easeInOut" }
}

// Handle navigation clicks
const handleNavClick = (section) => {
  props.setActiveSection(section)
  // Close mobile menu when clicking a link
  isOpen.value = false
}
</script>

<style scoped>
/* Component-specific styles if needed */
</style>
