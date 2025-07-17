<template>
  <Section title="Get In Touch" :icon="Users" id="contact">
    <TextSecondary 
      as="p" 
      class="text-center text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed"
    >
      I'm always open to discussing new projects, collaborations, or just
      connecting with like-minded individuals. Send me a message using the
      form below, or connect via social media!
    </TextSecondary>

    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 500, delay: 100 }
      }"
      class="max-w-xl mx-auto mb-12"
    >
      <Card class="p-6 sm:p-8">
        <!-- Display thank you message on successful submission -->
        <p 
          v-if="isSubmissionSuccessful"
          class="text-center text-lg font-medium text-green-600 dark:text-green-400 py-10"
        >
          Thanks for your message! I'll get back to you soon. 😊
        </p>
        
        <!-- Contact form -->
        <form 
          v-else
          @submit.prevent="onSubmit" 
          class="space-y-6"
        >
          <!-- Name field -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
            >
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              v-model="name"
              :class="errors.name ? 'border-red-500' : ''"
            />
            <span 
              v-if="errors.name"
              class="text-red-500 dark:text-red-400 text-xs mt-1 block"
            >
              {{ errors.name }}
            </span>
          </div>

          <!-- Email field -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
            >
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              v-model="email"
              :class="errors.email ? 'border-red-500' : ''"
            />
            <span 
              v-if="errors.email"
              class="text-red-500 dark:text-red-400 text-xs mt-1 block"
            >
              {{ errors.email }}
            </span>
          </div>

          <!-- Message field -->
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message..."
              v-model="message"
              :class="errors.message ? 'border-red-500' : ''"
            />
            <span 
              v-if="errors.message"
              class="text-red-500 dark:text-red-400 text-xs mt-1 block"
            >
              {{ errors.message }}
            </span>
          </div>

          <!-- Submit button -->
          <div>
            <Button
              type="submit"
              :disabled="isSubmitting"
              variant="primary"
              class="w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <template v-if="isSubmitting">
                <Loader2 :size="20" class="animate-spin" />
                Sending...
              </template>
              <template v-else>
                <Send :size="18" />
                Send Message
              </template>
            </Button>
            
            <!-- Display general submission errors -->
            <p 
              v-if="submissionError"
              class="text-red-500 dark:text-red-400 text-sm mt-2 text-center"
            >
              Oops! There was a problem submitting your form. Please try again.
            </p>
          </div>
        </form>
      </Card>
    </div>

    <!-- Social Contact Buttons -->
    <TextSecondary as="p" class="text-center text-base mb-6 md:mb-8">
      Or connect with me on social media:
    </TextSecondary>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
      <AnimatedSection
        v-for="(button, index) in socialContactButtons"
        :key="index"
        :delay="index * 0.1"
        :threshold="0.1"
      >
        <HoverFlipButton v-bind="button" />
      </AnimatedSection>
    </div>
  </Section>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import {
  Users,
  Linkedin,
  Github,
  Twitter,
  Send,
  Loader2,
} from 'lucide-vue-next'
import Section from './Section.vue'
import AnimatedSection from './AnimatedSection.vue'
import HoverFlipButton from './HoverFlipButton.vue'
import { Card, Button, Input, Textarea, TextSecondary } from './UI'

/**
 * ContactSection Component: Displays contact information and contact form.
 */

// Form submission state
const isSubmitting = ref(false)
const isSubmissionSuccessful = ref(false)
const submissionError = ref(false)

// Form validation schema
const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
})

// Initialize form with vee-validate
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema
})

// Form fields
const [name] = defineField('name')
const [email] = defineField('email')
const [message] = defineField('message')

// Submit handler
const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true
  submissionError.value = false
  
  try {
    // Submit to Formspree
    const response = await fetch('https://formspree.io/f/xwpbkqew', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    })
    
    if (response.ok) {
      isSubmissionSuccessful.value = true
    } else {
      submissionError.value = true
    }
  } catch (error) {
    console.error('Form submission error:', error)
    submissionError.value = true
  } finally {
    isSubmitting.value = false
  }
})

// Social contact buttons data
const socialContactButtons = [
  {
    href: "https://linkedin.com/in/filipelqjunqueira",
    IconInitial: Linkedin,
    textInitial: "LinkedIn",
    textHover: "View Profile",
    bgColorInitial: "bg-sky-600 dark:bg-sky-700",
    bgColorHover: "hover:bg-sky-700 dark:hover:bg-sky-800",
    ariaLabel: "Filipe Junqueira on LinkedIn",
  },
  {
    href: "https://github.com/filipejunqueira",
    IconInitial: Github,
    textInitial: "GitHub",
    textHover: "View Repos",
    bgColorInitial: "bg-gray-700 dark:bg-slate-700",
    bgColorHover: "hover:bg-gray-800 dark:hover:bg-slate-600",
    ariaLabel: "Filipe Junqueira on GitHub",
  },
  {
    href: "https://x.com/CaptBroccoli",
    IconInitial: Twitter,
    textInitial: "Twitter / X",
    textHover: "@CaptBroccoli",
    bgColorInitial: "bg-sky-500 dark:bg-sky-600",
    bgColorHover: "hover:bg-sky-600 dark:hover:bg-sky-700",
    ariaLabel: "Filipe Junqueira (Captain Broccoli) on Twitter/X",
  },
]
</script>
