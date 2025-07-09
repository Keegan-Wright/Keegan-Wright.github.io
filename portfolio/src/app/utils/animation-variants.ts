import { Variants } from 'framer-motion';

// Smooth ease curve for all animations
const smoothEase = [0.22, 1, 0.36, 1];

// Slide up and fade in animation
export const slideUpFadeIn: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: smoothEase
    }
  }
};

// Slide in from left with fade
export const slideInFromLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: smoothEase
    }
  }
};

// Slide in from right with fade
export const slideInFromRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: smoothEase
    }
  }
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },  // Start at full opacity to prevent container flash
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Slightly faster stagger for smoother appearance
      delayChildren: 0.1,    // Shorter initial delay
      when: "beforeChildren" // Ensure container is visible before animating children
    }
  }
};

// Scale up animation with fade
export const scaleUp: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase
    }
  }
};

// Special variant for already visible content
export const alreadyVisible: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 }
};
