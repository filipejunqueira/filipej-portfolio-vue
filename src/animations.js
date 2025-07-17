// animations.js
// Centralized animation variants for consistent motion design
// Adapted for @vueuse/motion from Framer Motion

export const defaultVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  leave: { opacity: 0, y: 20 }
}

export const fadeInFromLeft = {
  initial: { opacity: 0, x: -50 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  },
  leave: { opacity: 0, x: -50 }
}

export const fadeInFromRight = {
  initial: { opacity: 0, x: 50 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  },
  leave: { opacity: 0, x: 50 }
}

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 }
  },
  leave: { opacity: 0, y: 30 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  leave: { opacity: 0, scale: 0.8 }
}

// Stagger animations for lists
export const staggerContainer = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  leave: { opacity: 0 }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  },
  leave: { opacity: 0, y: 20 }
}

// Hero section specific animations
export const heroProfileImage = {
  initial: { opacity: 0, scale: 0.5 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 500,
      delay: 200,
      type: "spring",
      stiffness: 120
    }
  },
  leave: { opacity: 0, scale: 0.5 }
}

// Hover animations (for use with @vueuse/motion hover variants)
export const buttonHover = {
  scale: 1.05,
  rotate: [0, -1, 1, -1, 1, 0],
  transition: { 
    rotate: { duration: 300 },
    scale: { duration: 200 }
  }
}

export const cardHover = {
  y: -6,
  scale: 1.02,
  transition: { duration: 200 }
}

export const subtleHover = {
  y: -3,
  transition: { duration: 200 }
}

export const profileRotateHover = {
  scale: 1.1,
  rotate: 15,
  transition: { type: "spring", stiffness: 300, duration: 300 }
}

// Utility function to create @vueuse/motion compatible variants
export const createMotionVariants = (variants) => {
  return {
    initial: variants.initial || variants.hidden,
    enter: variants.enter || variants.visible,
    leave: variants.leave || variants.exit || variants.initial || variants.hidden
  }
}

// Pre-configured variants for common use cases
export const motionPresets = {
  fadeIn: createMotionVariants(defaultVariants),
  slideInLeft: createMotionVariants(fadeInFromLeft),
  slideInRight: createMotionVariants(fadeInFromRight),
  slideInUp: createMotionVariants(fadeInUp),
  scaleIn: createMotionVariants(scaleIn),
  staggerContainer: createMotionVariants(staggerContainer),
  staggerItem: createMotionVariants(staggerItem),
  heroProfileImage: createMotionVariants(heroProfileImage),
  // Hover animations
  buttonHover,
  cardHover,
  subtleHover,
  profileRotateHover
}