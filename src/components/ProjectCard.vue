<template>
  <Article>
    <!-- Main image for Blender projects -->
    <div 
      v-if="type === 'blender' && mainImage"
      class="overflow-hidden rounded-md mb-5 shadow-sm"
    >
      <LazyImage
        :imageName="mainImage"
        :alt="`Main image for ${title} - ${type} project`"
        className="w-full h-52 md:h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
        @error="imageErrorHandler"
        @click="onImageClick"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        :priority="true"
      />
    </div>
    
    <!-- Placeholder for non-Blender or missing image -->
    <div 
      v-else
      :class="`w-full h-52 md:h-60 rounded-md flex items-center justify-center text-white dark:text-slate-300 text-xl font-semibold mb-5 ${imagePlaceholderColor || 'bg-gray-300 dark:bg-slate-700'}`"
      role="img"
      :aria-label="`${title} project placeholder image`"
    >
      <Palette 
        v-if="type === 'blender'"
        :size="52" 
        :stroke-width="1.5" 
        aria-hidden="true" 
      />
      <Code 
        v-else
        :size="52" 
        :stroke-width="1.5" 
        aria-hidden="true" 
      />
    </div>

    <!-- Project title -->
    <TextPrimary 
      as="h3" 
      class="text-xl md:text-2xl font-medium text-emerald-800 dark:text-emerald-300 mb-3"
    >
      {{ title }}
    </TextPrimary>

    <!-- Project description -->
    <div class="flex-grow">
      <TextSecondary 
        as="p"
        :class="`text-sm md:text-base mb-2 ${isDescriptionExpanded || !artisticStatement ? '' : 'line-clamp-3'}`"
      >
        {{ description }}
      </TextSecondary>
      
      <p
        v-if="artisticStatement"
        :class="`text-emerald-700/80 dark:text-emerald-400/80 text-xs italic mt-1 mb-4 ${isDescriptionExpanded ? '' : 'line-clamp-2'}`"
      >
        {{ artisticStatement }}
      </p>
    </div>

    <!-- Expand/collapse button -->
    <Button
      v-if="(description.length > 100) || (artisticStatement && artisticStatement.length > 50)"
      @click="toggleDescription"
      variant="outline"
      size="sm"
      class="mb-4 self-start"
      :aria-expanded="isDescriptionExpanded"
    >
      {{ isDescriptionExpanded ? 'Show Less' : 'Show More' }}
      <ChevronUp 
        v-if="isDescriptionExpanded"
        :size="18" 
        class="ml-1" 
        aria-hidden="true" 
      />
      <ChevronDown 
        v-else
        :size="18" 
        class="ml-1" 
        aria-hidden="true" 
      />
    </Button>

    <!-- External link -->
    <div class="mt-auto">
      <Link
        v-if="link"
        :href="link"
        :external="true"
        variant="button"
        class="self-start"
      >
        View Project <ExternalLink :size="16" class="ml-1.5" />
      </Link>
    </div>

    <!-- Gallery for Blender projects -->
    <div
      v-if="type === 'blender' && isGalleryOpen && galleryImages && galleryImages.length > 0"
      :id="`${title.replace(/\s+/g, '-').toLowerCase()}-gallery`"
      class="mt-4 pt-4 border-t border-emerald-200 dark:border-slate-700"
    >
      <div class="relative mb-2">
        <div class="overflow-hidden rounded-md">
          <LazyImage
            :imageName="galleryImages[currentImageIndex]"
            :alt="`${title} - Gallery Image ${currentImageIndex + 1} of ${galleryImages.length}`"
            className="w-full h-60 md:h-72 object-cover shadow-inner bg-gray-100 dark:bg-slate-700 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            @error="imageErrorHandler"
            @click="onImageClick"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            :shouldLoad="isGalleryOpen"
          />
        </div>
        
        <!-- Navigation arrows -->
        <template v-if="galleryImages.length > 1">
          <IconButton
            @click="prevImage"
            variant="ghost"
            size="sm"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-opacity"
            aria-label="Previous Image"
            :icon="ArrowLeftCircle"
          />
          <IconButton
            @click="nextImage"
            variant="ghost"
            size="sm"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-opacity"
            aria-label="Next Image"
            :icon="ArrowRightCircle"
          />
        </template>
      </div>
      
      <!-- Image counter -->
      <TextSecondary 
        v-if="galleryImages.length > 1"
        as="p" 
        class="text-center text-xs"
      >
        Image {{ currentImageIndex + 1 }} of {{ galleryImages.length }}
      </TextSecondary>
    </div>
  </Article>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { 
  Palette, 
  Code, 
  ChevronUp, 
  ChevronDown, 
  ArrowLeftCircle, 
  ArrowRightCircle, 
  ExternalLink 
} from 'lucide-vue-next'
import LazyImage from './LazyImage.vue'
import { Article, Button, IconButton, Link, TextPrimary, TextSecondary } from './UI'

/**
 * ProjectCard Component: Displays details for a single project.
 */

const props = defineProps({
  /** Project title */
  title: {
    type: String,
    required: true
  },
  /** Project description */
  description: {
    type: String,
    required: true
  },
  /** Optional artistic statement */
  artisticStatement: {
    type: String,
    default: null
  },
  /** Name of the main project image */
  mainImage: {
    type: String,
    default: null
  },
  /** Array of image names for gallery images */
  galleryImages: {
    type: Array,
    default: () => []
  },
  /** Background for image placeholder */
  imagePlaceholderColor: {
    type: String,
    default: null
  },
  /** Optional external link */
  link: {
    type: String,
    default: null
  },
  /** Type of project (e.g., "blender", "code") */
  type: {
    type: String,
    required: true
  },
  /** State if gallery is expanded */
  isGalleryOpen: {
    type: Boolean,
    default: false
  },
  /** Callback to open an image in the lightbox */
  onImageClick: {
    type: Function,
    default: null
  }
})

// State for expanding/collapsing the description text
const isDescriptionExpanded = ref(false)

// State for the currently displayed image index in the gallery
const currentImageIndex = ref(0)

// Toggles the 'isDescriptionExpanded' state
const toggleDescription = () => {
  isDescriptionExpanded.value = !isDescriptionExpanded.value
}

// Moves to the next image in the gallery
const nextImage = (e) => {
  e.stopPropagation()
  if (props.galleryImages && props.galleryImages.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.galleryImages.length
  }
}

// Moves to the previous image in the gallery
const prevImage = (e) => {
  e.stopPropagation()
  if (props.galleryImages && props.galleryImages.length > 0) {
    currentImageIndex.value = (currentImageIndex.value - 1 + props.galleryImages.length) % props.galleryImages.length
  }
}

// Effect to reset gallery to first image when closed
watchEffect(() => {
  if (props.type === 'blender' && !props.isGalleryOpen) {
    currentImageIndex.value = 0
  }
})

// Error handler for images
const imageErrorHandler = (e) => {
  e.target.onerror = null
  e.target.src = `https://placehold.co/600x400/E0E0E0/BDBDBD?text=Image+Not+Found`
}
</script>