<template>
  <div class="font-sans bg-emerald-50/50 dark:bg-slate-900 text-gray-800 dark:text-slate-200 min-h-screen transition-colors duration-300">
    <Navbar
      :setActiveSection="setActiveSection"
      :toggleDarkMode="toggleDarkMode"
      :isDarkMode="isDarkMode"
    />
    <HeroSection />

    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <AnimatedSection
        v-for="section in siteConfig.sections"
        :key="section.id"
        :id="`${section.id}-animated-wrapper`"
        :variants="motionPresets[section.animation]"
        :delay="section.delay"
      >
        <Suspense>
          <component :is="componentMap[section.component]" />
          <template #fallback>
            <SkeletonLoader />
          </template>
        </Suspense>
      </AnimatedSection>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, watch, onMounted, defineAsyncComponent } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode.js'
import { motionPresets } from '@/animations.js'

// Import critical components (above the fold) - import normally
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import Footer from '@/components/Footer.vue'
import AnimatedSection from '@/components/AnimatedSection.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'

// Import site configuration from centralized config file
import { siteConfig, componentMap } from '@/config/sections.js'

// Dark mode management
const { isDarkMode, toggleDarkMode } = useDarkMode()

// Active section state for navigation
const activeSection = ref('home')
const router = useRouter()

// Set active section function
const setActiveSection = (section) => {
  activeSection.value = section
}

// SEO: Structured Data
const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Filipe L. Q. Junqueira",
  url: "https://filipej.dev",
  image: "https://filipej.dev/og-image.png",
  jobTitle: "Research Associate",
  worksFor: {
    "@type": "Organization",
    name: "University of Nottingham",
    sameAs: "https://www.nottingham.ac.uk/physics/",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Nottingham" },
    { "@type": "CollegeOrUniversity", name: "King's College London" },
    {
      "@type": "CollegeOrUniversity",
      name: "Polytechnic School of Engineering, University of São Paulo",
    },
  ],
  knowsAbout: [
    "Nanoscience",
    "3D printing with atoms",
    "NC-AFM",
    "STM",
    "DFT",
    "Machine Learning",
    "Blender 3D Art",
    "Python",
    "Scientific Visualization",
    "Physics",
    "Computational Physics",
  ],
  sameAs: [
    "https://www.linkedin.com/in/filipejunqueira/",
    "https://github.com/filipejunqueira",
    "https://x.com/CaptBroccoli",
  ],
  description:
    "Portfolio showcasing research in nanoscience, 3D atomic printing, microscopy, DFT, machine learning, plus Blender 3D art and software development projects.",
  nationality: { "@type": "Country", name: "Brazilian" },
}

// SEO: Website Structured Data
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Filipe L. Q. Junqueira's Portfolio",
  url: "https://filipej.dev",
  description: personStructuredData.description,
  author: {
    "@type": "Person",
    name: "Filipe L. Q. Junqueira",
  },
  inLanguage: "en-US",
}

// Set up SEO metadata
useHead({
  title: 'Filipe L. Q. Junqueira | Research, Nanoscience, 3D Art & Development',
  meta: [
    { name: 'description', content: personStructuredData.description },
    
    // Open Graph Meta Tags
    { property: 'og:title', content: 'Filipe L. Q. Junqueira | Research, Nanoscience, 3D Art & Development' },
    { property: 'og:description', content: personStructuredData.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://filipej.dev' },
    { property: 'og:image', content: 'https://filipej.dev/og-image.png' },
    { property: 'og:image:alt', content: 'Filipe L. Q. Junqueira - Research Portfolio Preview' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:site_name', content: "Filipe L. Q. Junqueira's Portfolio" },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter Card Meta Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@CaptBroccoli' },
    { name: 'twitter:creator', content: '@CaptBroccoli' },
    { name: 'twitter:title', content: 'Filipe L. Q. Junqueira | Research, Nanoscience, 3D Art & Development' },
    { name: 'twitter:description', content: personStructuredData.description },
    { name: 'twitter:image', content: 'https://filipej.dev/twitter-image.png' },
    { name: 'twitter:image:alt', content: 'Filipe L. Q. Junqueira - Research Portfolio Preview' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(personStructuredData)
    },
    {
      type: 'application/ld+json', 
      children: JSON.stringify(websiteStructuredData)
    }
  ]
})

// Section Scrolling Effect
watch(activeSection, (newSection) => {
  const hash = window.location.hash.substring(1)
  const sectionIdToScroll = hash || (newSection !== 'home' ? newSection : null)

  if (sectionIdToScroll) {
    const element = document.getElementById(sectionIdToScroll)
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight - 24
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  } else if (newSection === 'home' && !hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

// Handle hash changes on mount
onMounted(() => {
  const hash = window.location.hash.substring(1)
  if (hash && hash !== activeSection.value) {
    setActiveSection(hash)
  }
})
</script>
