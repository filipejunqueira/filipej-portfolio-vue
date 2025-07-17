<template>
  <Section
    title="Blender Art & 3D Visualization"
    :icon="Palette"
    id="blender"
  >
    <p class="text-center text-base md:text-lg text-gray-700 dark:text-slate-300 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
      Leveraging Blender for creative 3D projects, scientific visualization,
      and concept art. Each piece is a journey into form, light, and
      narrative, aiming to bridge the gap between the technical and the
      aesthetic.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      <AnimatedSection
        v-for="(project, index) in blenderProjects"
        :key="project.id"
        :delay="index * 0.15"
        :threshold="0.1"
      >
        <ProjectCard
          v-bind="project"
          type="blender"
          :isGalleryOpen="areAllGalleriesOpen"
          :onImageClick="openLightbox"
        />
      </AnimatedSection>
    </div>

    <!-- Master button to toggle all galleries -->
    <div class="text-center mt-12 md:mt-16">
      <button
        @click="toggleAllGalleries"
        class="inline-flex items-center gap-2 bg-emerald-500 dark:bg-emerald-600 text-white font-medium py-2.5 px-6 rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 focus:ring-offset-white dark:focus:ring-offset-slate-800"
        :aria-expanded="areAllGalleriesOpen"
      >
        {{ areAllGalleriesOpen ? "Hide All Images" : "View All Images" }}
        <component
          :is="areAllGalleriesOpen ? ChevronUp : ImageIcon"
          :size="18"
          aria-hidden="true"
        />
      </button>
    </div>

    <p class="text-center text-sm text-gray-600 dark:text-slate-400 mt-8">
      More creations and visualizations coming soon! Stay tuned for updates
      on new projects and explorations.
    </p>
  </Section>

  <!-- Lightbox Modal Implementation -->
  <Teleport to="body">
    <div
      v-if="lightboxImage"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :leave="{ opacity: 0 }"
      @click="closeLightbox"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <button
        v-motion
        :initial="{ scale: 0, rotate: -90 }"
        :enter="{ scale: 1, rotate: 0 }"
        :leave="{ scale: 0, rotate: -90 }"
        :transition="{ type: 'spring', stiffness: 300, damping: 20 }"
        @click="closeLightbox"
        class="absolute top-5 right-5 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors"
        aria-label="Close image view"
      >
        <X :size="30" />
      </button>
      
      <div
        v-motion
        :initial="{ scale: 0.5, opacity: 0 }"
        :enter="{ scale: 1, opacity: 1 }"
        :leave="{ scale: 0.5, opacity: 0 }"
        :transition="{ type: 'spring', stiffness: 250, damping: 25 }"
        @click.stop
        class="relative max-w-[90vw] max-h-[90vh]"
      >
        <img
          :src="lightboxImage"
          alt="Enlarged view of Blender render"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { Palette, X, ImageIcon, ChevronUp } from 'lucide-vue-next'

// Import components
import Section from './Section.vue'
import AnimatedSection from './AnimatedSection.vue'
import ProjectCard from './ProjectCard.vue'

/**
 * BlenderCreations Component: Showcases Blender 3D art projects with a lightbox.
 */

// State to control the visibility of ALL galleries at once
const areAllGalleriesOpen = ref(false)

// State for the lightbox image
const lightboxImage = ref(null)

// Blender project data with image names for dynamic loading
const blenderProjects = [
  {
    id: 1,
    title: "Abstract 3D Art",
    description: "Exploring forms, textures, and lighting...",
    artisticStatement: "Focus: Procedural generation...",
    mainImage: "blenderA",
    galleryImages: ["blenderA1", "blenderA2", "blenderA3"],
  },
  {
    id: 2,
    title: "Scientific Visualization",
    description: "Using Blender to create visualizations...",
    artisticStatement: "Goal: To accurately and beautifully convey...",
    mainImage: "blenderB",
    galleryImages: ["blenderB1", "blenderB2", "blenderB3", "blenderB4", "blenderB5"],
  },
  {
    id: 3,
    title: "Character/Concept Design",
    description: "Developing unique characters and concepts...",
    artisticStatement: "Exploration: Character storytelling...",
    mainImage: "blenderC",
    galleryImages: ["blenderC1", "blenderC2", "blenderC3"],
  },
]

// Function to toggle the state of all galleries
const toggleAllGalleries = () => {
  areAllGalleriesOpen.value = !areAllGalleriesOpen.value
}

// Function to open lightbox
const openLightbox = (imageUrl) => {
  lightboxImage.value = imageUrl
}

// Function to close lightbox
const closeLightbox = () => {
  lightboxImage.value = null
}
</script>