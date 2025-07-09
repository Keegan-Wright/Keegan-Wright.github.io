"use client";

import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    // Function to check which section is currently active
    const determineActiveSection = () => {
      let currentSection = '';

      // Calculate the threshold for the top 15% of the viewport
      const topThreshold = window.innerHeight * 0.15;

      // Find the section that is in the top 15% of the viewport
      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        // Section is considered active if:
        // 1. Its top edge is between the top of viewport and the 15% threshold, OR
        // 2. Its top edge is above viewport but bottom edge is still visible
        if ((rect.top >= 0 && rect.top <= topThreshold) || (rect.top <= 0 && rect.bottom > 0)) {
          currentSection = section.id;
          break;
        }
      }

      // If no section has passed the top yet, use the first section
      if (!currentSection && sections.length > 0) {
        currentSection = sections[0].id;
      }

      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    // Initial check on mount
    determineActiveSection();

    // Setup scroll event listener
    window.addEventListener('scroll', determineActiveSection, { passive: true });

    // Also run on resize as section positions may change
    window.addEventListener('resize', determineActiveSection, { passive: true });

    return () => {
      // Clean up event listeners
      window.removeEventListener('scroll', determineActiveSection);
      window.removeEventListener('resize', determineActiveSection);
    };
  }, []);

  return activeSection;
}
