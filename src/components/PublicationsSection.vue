<template>
  <Section title="Selected Publications" :icon="BookOpen" id="publications">
    <p class="text-center text-base md:text-lg text-gray-700 dark:text-slate-300 mb-12 md:mb-16 max-w-2.5xl mx-auto leading-relaxed">
      Contributing to the body of scientific knowledge through peer-reviewed
      research. These works explore topics from machine learning in microscopy
      to fundamental studies of molecular interactions.
    </p>
    
    <div class="space-y-6">
      <AnimatedSection
        v-for="(pub, index) in publications"
        :key="pub.id"
        :delay="index * 0.1"
        :threshold="0.05"
      >
        <PublicationItem :pub="pub" />
      </AnimatedSection>
    </div>
  </Section>
</template>

<script setup>
import { BookOpen } from 'lucide-vue-next'

// Import components
import Section from './Section.vue'
import AnimatedSection from './AnimatedSection.vue'
import PublicationItem from './PublicationItem.vue'

/**
 * PublicationsSection Component: Lists selected scientific publications.
 */

// Publication data
const publications = [
  {
    id: 1,
    title:
      "Timing the escape of a photoexcited electron from a molecular cage",
    authors: "Connor Fields, Aleksandra Foerster, Sadegh Ghaderzadeh, Ilya Popov, Bang Huynh, Filipe Junqueira, Tyler James, Sofia Alonso Perez, David A Duncan, Tien-Lin Lee, Yitao Wang, Sally Bloodworth, Gabriela Hoffman, Mark Walkey, Richard J Whitby, Malcolm H Levitt, Brian Kiraly, James N O’Shea, Elena Besley, Philip Moriarty",
    journal: "NATURE COMMUNICATIONS",
    year: "2025",
    doi: "10.1038/s41467-025-60260-z",
    link: "https://doi.org/10.1038/s41467-025-60260-z",
  },
  {
    id: 2,
    title:
      "Embedding human heuristics in machine-learning-enabled probe microscopy",
    authors: "Oliver M Gordon and Filipe LQ Junqueira and Philip J Moriarty.",
    journal: "MACHINE LEARNING: SCIENCE AND TECHNOLOGY-IOP PUBLISHING",
    year: "2020",
    doi: "10.1088/2632-2153/AB42EC",
    link: "https://doi.org/10.1088/2632-2153/AB42EC",
  },
  {
    id: 3,
    title:
      "Scanning tunneling state recognition with multi-class neural network ensembles",
    authors:
      "O. Gordon and P. D'Hondt and L. Knijff and S. E. Freeney and F. Junqueira and P. Moriarty and I. Swart.",
    journal: "REVIEW OF SCIENTIFIC INSTRUMENTS - AIP PUBLISHING",
    year: "2019",
    doi: "10.1063/1.5099590",
    link: "https://doi.org/10.1063/1.5099590",
  },
  {
    id: 4,
    title: "Chemical shielding of H2O and HF encapsulated inside a C60 cage",
    authors:
      "Samuel P. Jarvis, Filipe Junqueira, Alex Saywell, Philipp Rahe, Salvatore Mamone, Simon Taylor, Adam Sweetman, Jeremy Leaf, Hongqian Sang, Lev Kantorovich, David Duncan, Tien-Lin Lee, Pardeep Kumar, Richard Whitby, Philip Moriarty, and Robert G Jones.",
    journal: "NATURE COMMUNICATIONS CHEMISTRY",
    year: "2021",
    doi: "10.1038/s42004-021-00569-0",
    link: "https://doi.org/10.1038/s42004-021-00569-0",
    note: "An STM and XWS study. XWS performed at 109 hut at Diamond Light Source.",
  },
  {
    id: 5,
    title: "Atomic cranes for cyclic single vertical atom manipulations",
    authors:
      "David Abbasi-Pérez, Hongqian Sang, Filipe Junqueira, Adam Sweetman, J. Manuel Recio, Philip Moriarty and Lev Kantorovich.",
    journal: "THE JOURNAL OF PHYSICAL CHEMISTRY LETTERS",
    year: "2021",
    doi: "10.1021/acs.jpclett.1c02271",
    link: "https://doi.org/10.1021/acs.jpclett.1c02271",
    note: "A DFT study. Cyclical single atom manipulations on GaAs(110). ",
  },
]
</script>
