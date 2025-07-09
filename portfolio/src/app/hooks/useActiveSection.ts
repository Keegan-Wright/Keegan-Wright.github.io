"use client";

import { useState, useEffect } from 'react';
import { setupSectionObserver } from '@/app/utils/section-observer';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const determineActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
      if (sections.length === 0) return;

      const viewportHeight = window.innerHeight;

      let maxVisibleSection: Element | null = null;
      let maxVisibleArea = 0;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          maxVisibleSection = section;
        }

        else if (visibleHeight === maxVisibleArea && maxVisibleSection) {
          const currentTop = Math.abs(rect.top);
          const prevTop = Math.abs(maxVisibleSection.getBoundingClientRect().top);
          if (currentTop < prevTop) {
            maxVisibleSection = section;
          }
        }
      });


      if(maxVisibleSection != null){
        if (maxVisibleSection && maxVisibleArea > 0) {
          setActiveSection(`#${(maxVisibleSection as Element).id}`);
        } else if (sections.length > 0) {
          setActiveSection(`#${sections[0].id}`);
        }
      }
    };


    if (typeof window !== 'undefined') {

      setTimeout(determineActiveSection, 300);

      window.addEventListener('scroll', determineActiveSection, { passive: true });
      window.addEventListener('resize', determineActiveSection, { passive: true });

      return () => {
        window.removeEventListener('scroll', determineActiveSection);
        window.removeEventListener('resize', determineActiveSection);
      };
    }

    return undefined;
  }, []);

  return activeSection;
}
