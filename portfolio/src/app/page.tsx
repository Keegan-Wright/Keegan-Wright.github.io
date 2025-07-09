"use client";

import PortfolioHeader from "@/app/components/portfolio-header";
import AboutMeSection from "@/app/components/about-me-section";
import ExperienceSection from "@/app/components/experience-section";
import ProjectsSection from "@/app/components/projects-section";
import AnimatedFooter from "@/app/components/animated-footer";
import {useEffect} from "react";


export default function Home() {
  // Force recalculation of active section when page loads
  useEffect(() => {
    const handleNavigation = () => {
      // Get all sections
      const sections = document.querySelectorAll('section[id]');

      // Manually fire a scroll event to force recalculation of active section
      window.dispatchEvent(new Event('scroll'));
    };

    // Run after a delay to ensure DOM is fully loaded
    const timer = setTimeout(handleNavigation, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <PortfolioHeader />
        </header>
            <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
                <AboutMeSection/>
                <ExperienceSection/>
                <ProjectsSection />
                <AnimatedFooter />
            </main>
    </div>
  );
}
