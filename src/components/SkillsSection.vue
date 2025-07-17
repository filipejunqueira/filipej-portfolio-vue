<template>
  <Section title="Core Competencies & Skills" :icon="Lightbulb" id="skills">
    <div class="grid md:grid-cols-3 gap-10">
      <!-- Computer Skills -->
      <div>
        <h3 class="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-4 flex items-center">
          <HardDrive
            class="w-6 h-6 mr-2 text-emerald-500 dark:text-emerald-400"
            aria-hidden="true"
          />
          Computer Skills
        </h3>
        <ul class="space-y-3">
          <AnimatedSection
            v-for="(skill, index) in skillsData.computerSkills"
            :key="index"
            :delay="index * 0.05"
            :threshold="0.1"
          >
            <SkillItem :name="skill.name" :icon="skill.icon" />
          </AnimatedSection>
        </ul>
      </div>

      <!-- Scientific Software & Tools -->
      <div>
        <h3 class="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-4 flex items-center">
          <Atom
            class="w-6 h-6 mr-2 text-emerald-500 dark:text-emerald-400"
            aria-hidden="true"
          />
          Scientific Software & Tools
        </h3>
        <ul class="space-y-3">
          <AnimatedSection
            v-for="(skill, index) in skillsData.scientificTools"
            :key="index"
            :delay="index * 0.05"
            :threshold="0.1"
          >
            <SkillItem :name="skill.name" :icon="skill.icon" />
          </AnimatedSection>
        </ul>
      </div>

      <!-- Languages -->
      <div>
        <h3 class="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-4 flex items-center">
          <Globe
            class="w-6 h-6 mr-2 text-emerald-500 dark:text-emerald-400"
            aria-hidden="true"
          />
          Languages
        </h3>
        <ul class="space-y-3">
          <AnimatedSection
            v-for="(lang, index) in skillsData.languages"
            :key="index"
            :delay="index * 0.05"
            :threshold="0.1"
          >
            <SkillItem
              :name="lang.name"
              :proficiency="lang.proficiency"
              :icon="MessageSquare"
            />
          </AnimatedSection>
        </ul>
      </div>
    </div>
  </Section>
</template>

<script setup>
import {
  Code,
  Github,
  Terminal,
  HardDrive,
  Atom,
  BarChart3,
  FileCode,
  Brain,
  Palette,
  Globe,
  MessageSquare,
  Lightbulb,
  BrainCog,
} from 'lucide-vue-next'
import Section from './Section.vue'
import AnimatedSection from './AnimatedSection.vue'
import SkillItem from './SkillItem.vue'

/**
 * SkillsSection Component: Displays various skills.
 */

// Skills data
const skillsData = {
  computerSkills: [
    { name: "Python & Fortran", icon: Code },
    { name: "C & Odin", icon: Code },
    { name: "SQL", icon: HardDrive },
    { name: "Lua", icon: Code },
    { name: "Bash/Shell Scripting", icon: Terminal },
    { name: "JavaScript, HTML, CSS (Vue, Node.js, Tailwind CSS) (Basic) ", icon: Code },
    { name: "Git & Github & CI/CD", icon: Github },
    { name: "Linux", icon: HardDrive },
    { name: "Docker (Basic)", icon: HardDrive },
  ],
  scientificTools: [
    { name: "DFT (VASP, CP2K, Tetr, Lev00)", icon: Atom },
    {
      name: "Machine Learning (Scikit-learn, TensorFlow/Keras Basics, PyTorch Basics)",
      icon: Brain,
    },
 { name: "SPM (AFM/STM) Analysis", icon: BarChart3 },
    { name: "Pymatgen, ASE (Atomic Simulation Environment)", icon: Atom },
    {
      name: "Prompt/Context 'Engineering', Antropic Claude Code, ChatGPT Codex, Gemini CLI",
      icon: BrainCog,
    },
    {
      name: "Data Visualization (Matplotlib, Seaborn, Plotly etc)",
      icon: BarChart3,
    },
    { name: "Blender (3D Modeling & Visualization)", icon: Palette },
  ],
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Portuguese", proficiency: "Native" },
    { name: "Spanish", proficiency: "Conversational" },
    { name: "French", proficiency: "Beginner" },
    { name: "Italian", proficiency: "Beginner" },
  ],
}
</script>
