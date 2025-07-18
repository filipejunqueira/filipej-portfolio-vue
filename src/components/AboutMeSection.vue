<template>
  <Section
    title="About Me"
    :icon="User"
    id="about"
    titleClassName="text-3xl sm:text-4xl md:text-5xl"
  >
    <Container size="sm" class="space-y-5">
      <TextSecondary
        v-for="(paragraph, index) in aboutMeNarrative"
        :key="index"
        as="p"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 500,
            delay: 200 + index * 100
          }
        }"
        class="text-base md:text-lg leading-relaxed text-center md:text-left"
      >
        {{ paragraph }}
      </TextSecondary>
    </Container>
  </Section>
</template>

<script setup>
import { User } from 'lucide-vue-next'
import Section from './Section.vue'
import { Container, TextSecondary } from './UI'

/**
 * AboutMeSection Component: Contains biographical information.
 */

// Narrative paragraphs
const aboutMeNarrative = [
  "Hello! Driven by curiosity for the quantum realm and a passion for computational problem-solving, I thrive at the intersection of nanoscience, data science, and creative technology.",
  "My journey has taken me from fundamental physics research and complex simulations to crafting intuitive command-line tools and exploring the artistic potential of 3D visualization of atomic simulations.",
  "I'm dedicated to leveraging cutting-edge techniques, including machine learning and density functional theory, to push the boundaries of what's possible at the atomic scale and to communicate these complex ideas effectively. I also love dogs, Dota2 and the idea of sailing to Antartica!",
]
</script>
