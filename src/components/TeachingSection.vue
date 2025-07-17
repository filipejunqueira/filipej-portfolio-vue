<template>
  <Section title="Teaching & Tutoring" :icon="Presentation" id="teaching">
    <div class="max-w-3xl mx-auto space-y-6">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 500, delay: 100 }
        }"
        class="text-center text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed"
      >
        Beyond my research and creative projects, I am deeply committed to
        education and mentorship. I have a rewarding side-venture in tutoring,
        primarily focused on preparing students for high-level mathematics
        competitions and rigorous academic programs.
      </p>

      <ul 
        class="space-y-4 list-disc list-inside text-gray-700 dark:text-slate-300 text-base md:text-lg"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 600, delay: 200 }
        }"
      >
        <li
          v-for="(point, index) in teachingPoints"
          :key="index"
          class="ml-4 leading-relaxed mb-3"
        >
          {{ point }}
        </li>
      </ul>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 500, 
            delay: 300 + teachingPoints.length * 100 
          }
        }"
        class="text-center mt-8"
      >
        <a
          href="http://filipej.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-emerald-500 dark:bg-emerald-600 text-white font-medium py-2.5 px-6 rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 transition-colors duration-300 shadow-sm hover:shadow-md text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 focus:ring-offset-white dark:focus:ring-offset-slate-800"
        >
          Visit My Tutoring Site <ExternalLink :size="18" aria-hidden="true" />
        </a>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { Presentation, ExternalLink } from 'lucide-vue-next'
import Section from './Section.vue'

/**
 * TeachingSection Component: Details teaching and tutoring experience.
 */

// Teaching experience points
const teachingPoints = [
  "Extensive experience tutoring students for Mathematics Olympiads (including IMO), focusing on advanced problem-solving techniques in Number Theory, Combinatorics, Algebra, and Geometry.",
  "Provided tailored coaching for IB (International Baccalaureate) Mathematics (HL/SL) and Physics (HL/SL), helping students achieve top grades and develop a deep understanding of core concepts.",
  "Developed custom learning materials and practice sets to address individual student needs and learning styles.",
  "Passionate about fostering critical thinking and a love for mathematics and physics in young minds."
]
</script>