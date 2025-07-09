"use client";

import {motion, Variants} from 'framer-motion';
import {ReactNode, useEffect, useState} from 'react';
import {slideUpFadeIn} from '@/app/utils/animation-variants';

interface AnimatedListItemProps {
    children: ReactNode;
    className?: string;
    variants?: Variants;
    index?: number;
}

export default function AnimatedListItem({
                                             children,
                                             className = '',
                                             variants = slideUpFadeIn,
                                             index = 0
                                         }: AnimatedListItemProps) {
    // Always declare all state variables first, in the same order
    const [isMounted, setIsMounted] = useState(false);
    const [shouldForceAnimate, setShouldForceAnimate] = useState(false);

    // Then declare all effects
    useEffect(() => {
        setIsMounted(true);

        // Check if this element is already in view on page load
        if (typeof window !== 'undefined') {
            // Use a timeout instead of requestAnimationFrame for more reliability
            setTimeout(() => {
                try {
                    // Use a safer class selector approach
                    const safeClassName = className.split(' ')[0]; // Use first class if multiple classes
                    if (safeClassName) {
                        const elements = document.getElementsByClassName(safeClassName);
                        if (elements.length > 0) {
                            const rect = elements[0].getBoundingClientRect();
                            if (rect.top < window.innerHeight) {
                                setShouldForceAnimate(true);
                            }
                        }
                    }
                } catch (e) {
                    console.error('Error checking element visibility:', e);
                }
            }, 100);
        }
    }, []); // Remove className dependency to avoid re-running effect

    // Don't animate on first render to prevent layout shifts during hydration
    if (!isMounted) {
        return <li className={className}>{children}</li>;
    }

    return (
        <motion.li
            className={className}
            variants={variants}
            // This creates a staggered effect when combined with a parent container
            // that has a staggerChildren transition
            custom={index}
            // If already in view on load, animate immediately
            animate={shouldForceAnimate ? "visible" : undefined}
            // These are applied if the item isn't a child of a parent with variants
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-50px"}}
        >
            {children}
        </motion.li>
    );
}
