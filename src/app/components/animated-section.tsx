"use client";

import {motion, Variants} from 'framer-motion';
import {ReactNode, useEffect, useState} from 'react';
import {slideUpFadeIn} from '@/app/utils/animation-variants';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    variants?: Variants;
    delay?: number;
    id?: string;
    ariaLabel?: string;
}

export default function AnimatedSection({
                                            children,
                                            className = '',
                                            variants = slideUpFadeIn,
                                            delay = 0,
                                            id,
                                            ariaLabel
                                        }: AnimatedSectionProps) {
    // Client-side only code - all useState calls must be in the same order on every render
    const [isMounted, setIsMounted] = useState(false);
    const [initiallyInView, setInitiallyInView] = useState(false);

    // All useEffect hooks after all useState hooks
    useEffect(() => {
        setIsMounted(true);

        // On mount, check if this section is in view or above the viewport
        if (id && typeof window !== 'undefined') {
            // Use a timeout to ensure the DOM is fully rendered
            setTimeout(() => {
                const sectionEl = document.getElementById(id);
                if (sectionEl) {
                    const rect = sectionEl.getBoundingClientRect();
                    // If section is visible or above viewport on initial load
                    if (rect.bottom <= window.innerHeight * 1.2) {
                        setInitiallyInView(true);
                    }
                }
            }, 100);
        }
    }, [id]);

    // Don't animate on first render to prevent layout shifts during hydration
    if (!isMounted) {
        return (
            <section id={id} className={className} aria-label={ariaLabel}>
                {children}
            </section>
        );
    }

    return (
        <motion.section
            id={id}
            className={`${className} section-${id}`} // Add unique class for easier selection
            aria-label={ariaLabel}
            initial="hidden"
            // If initially in view or above viewport, always animate
            animate={initiallyInView ? "visible" : undefined}
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
            variants={variants}
            transition={{delay}}
            data-section-id={id} // Add data attribute for better identification
        >
            {children}
        </motion.section>
    );
}
