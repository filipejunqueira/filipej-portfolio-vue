import { defineAsyncComponent } from "vue";

// Site configuration - single source of truth for sections and navigation
export const siteConfig = {
  sections: [
    {
      id: "about",
      label: "About",
      component: "AboutMeSection",
      animation: "fadeIn",
      delay: 0.1,
    },
    {
      id: "skills",
      label: "Skills",
      component: "SkillsSection",
      animation: "fadeIn",
      delay: 0.15,
    },
    {
      id: "scientist",
      label: "Career & Education",
      component: "ScientistCareer",
      animation: "slideInLeft",
      delay: 0.2,
    },
    {
      id: "publications",
      label: "Publications",
      component: "PublicationsSection",
      animation: "fadeIn",
      delay: 0.25,
    },
    {
      id: "blender",
      label: "Blender Art",
      component: "BlenderCreations",
      animation: "slideInRight",
      delay: 0.3,
    },
    {
      id: "cli",
      label: "CLI Tools",
      component: "CLIToolsSection",
      animation: "fadeIn",
      delay: 0.35,
    },
    {
      id: "teaching",
      label: "Teaching",
      component: "TeachingSection",
      animation: "fadeIn",
      delay: 0.4,
    },
    {
      id: "contact",
      label: "Contact",
      component: "ContactSection",
      animation: "slideInLeft",
      delay: 0.45,
    },
  ],
};

// Component mapping with lazy loading for performance
export const componentMap = {
  AboutMeSection: defineAsyncComponent(
    () => import("@/components/AboutMeSection.vue"),
  ),
  SkillsSection: defineAsyncComponent(
    () => import("@/components/SkillsSection.vue"),
  ),
  TeachingSection: defineAsyncComponent(
    () => import("@/components/TeachingSection.vue"),
  ),
  ScientistCareer: defineAsyncComponent(
    () => import("@/components/ScientistCareer.vue"),
  ),
  PublicationsSection: defineAsyncComponent(
    () => import("@/components/PublicationsSection.vue"),
  ),
  BlenderCreations: defineAsyncComponent(
    () => import("@/components/BlenderCreations.vue"),
  ),
  CLIToolsSection: defineAsyncComponent(
    () => import("@/components/CLIToolsSection.vue"),
  ),
  ContactSection: defineAsyncComponent(
    () => import("@/components/ContactSection.vue"),
  ),
};
