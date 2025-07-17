<template>
  <header
    id="home"
    class="bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-slate-800 dark:to-slate-900 text-white py-12 md:py-16"
    aria-labelledby="main-heading"
  >
    <Container class="text-center flex flex-col items-center">
      <div
        v-motion
        :initial="motionPresets.heroProfileImage.initial"
        :enter="motionPresets.heroProfileImage.enter"
        :transition="{ duration: 800, delay: 200 }"
        class="mb-6"
      >
        <OptimizedImage
          :src="profilePic"
          :webp-src="profilePicWebP"
          alt="Filipe L. Q. Junqueira - Main Section"
          class-name="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-2xl border-4 border-white/80 dark:border-slate-400/50"
          :priority="true"
          sizes="(max-width: 768px) 144px, 176px"
        />
      </div>
      
      <TextPrimary
        id="main-heading"
        as="h1"
        v-motion
        :initial="motionPresets.fadeIn.initial"
        :enter="motionPresets.fadeIn.enter"
        :transition="{ duration: 500, delay: 400 }"
        class="text-4xl sm:text-5xl md:text-6xl font-light mb-4 dark:text-slate-100"
      >
        Filipe L. Q. Junqueira
      </TextPrimary>
      
      <p
        v-motion
        :initial="motionPresets.fadeIn.initial"
        :enter="motionPresets.fadeIn.enter"
        :transition="{ duration: 500, delay: 600 }"
        class="text-lg sm:text-xl md:text-2xl font-normal mb-4 text-emerald-100 dark:text-slate-300 opacity-95"
      >
        Research Associate, School of Physics and Astronomy, University of
        Nottingham
      </p>
      
      <p
        v-motion
        :initial="motionPresets.fadeIn.initial"
        :enter="motionPresets.fadeIn.enter"
        :transition="{ duration: 500, delay: 800 }"
        class="text-base sm:text-lg md:text-xl mb-8 text-emerald-200 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
      >
        Density Functional Theory, 3D printing with atoms, NC-AFM & STM, and
        Machine Learning in nanoscience.
      </p>
      
      <Button
        as="a"
        :href="filipeCv"
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size="lg"
        v-motion
        :initial="motionPresets.fadeIn.initial"
        :enter="motionPresets.fadeIn.enter"
        :transition="{ duration: 500, delay: 1000 }"
        :hovered="motionPresets.buttonHover"
        class="bg-white text-emerald-600 dark:bg-emerald-500 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-600 shadow-md hover:shadow-lg uppercase tracking-wider"
      >
        View Full CV
      </Button>
    </Container>
  </header>
</template>

<script setup>
// Import assets
import profilePic from '@/assets/captainbroccoli.png'
import profilePicWebP from '@/assets/captainbroccoli.webp'
import filipeCv from '@/assets/filipecv.pdf'

// Import components
import OptimizedImage from '@/components/OptimizedImage.vue'
import { Button, Container, TextPrimary } from '@/components/UI'

// Import animations
import { motionPresets } from '@/animations.js'
</script>

<style scoped>
/* Component-specific styles if needed */
</style>
