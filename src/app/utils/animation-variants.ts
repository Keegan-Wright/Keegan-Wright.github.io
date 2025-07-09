import {Easing, Variants} from 'framer-motion';


const smoothEase: Easing = [0.22, 1, 0.36, 1];


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


export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};


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


export const alreadyVisible: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 }
};
