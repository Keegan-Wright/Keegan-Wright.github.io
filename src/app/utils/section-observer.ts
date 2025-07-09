"use client";

export function setupSectionObserver(callback: (sectionId: string) => void) {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
        return () => {
        }; // Return no-op cleanup function for SSR
    }

    // Function to determine which section should be active
    const determineActiveSection = (entries: IntersectionObserverEntry[]) => {
        // Get all entries that are currently intersecting
        const visibleSections = entries.filter(entry => entry.isIntersecting);

        if (visibleSections.length === 0) return;

        // Find the section closest to the top of the viewport
        let topSection = visibleSections[0];
        let minY = Math.abs(topSection.boundingClientRect.y);

        visibleSections.forEach(section => {
            const absY = Math.abs(section.boundingClientRect.y);
            if (absY < minY) {
                minY = absY;
                topSection = section;
            }
        });

        const id = topSection.target.getAttribute('id');
        if (id) {
            callback(id);
        }
    };

    // Create the observer
    const observer = new IntersectionObserver(determineActiveSection, {
        rootMargin: '-10% 0px -80% 0px', // Consider the top 10% of the viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
    });

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Return cleanup function
    return () => {
        sections.forEach(section => {
            observer.unobserve(section);
        });
    };
}
