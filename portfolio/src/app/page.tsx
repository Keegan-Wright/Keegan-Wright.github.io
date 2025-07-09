import PortfolioHeader from "@/app/components/portfolio-header";
import AboutMeSection from "@/app/components/about-me-section";
import ExperienceSection from "@/app/components/experience-section";
import ProjectsSection from "@/app/components/projects-section";
import {ApplicationLink} from "@/app/components/application-link";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <PortfolioHeader />
        </header>
            <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
                <AboutMeSection/>
                <ExperienceSection/>
                <ProjectsSection />
                <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">

                    <p>
                        Coded in <ApplicationLink
                        title="WebStorm"
                        href="https://www.jetbrains.com/webstorm/"
                        target="_blank" ariaLabel="WebStorm"
                        /> built with <ApplicationLink
                        title="Next.js"
                        href="https://nextjs.org/"
                        target="_blank"
                        ariaLabel="Next JS"/> and <ApplicationLink
                        title="Tailwind CSS"
                        href="https://tailwindcss.com/"
                        target="_blank"
                        ariaLabel="Tailwind CSS"/>. Hosted with <ApplicationLink
                            title="Github" href="https://github.com/" target="_blank" ariaLabel="Github"/> and built by <ApplicationLink
                         title="Myself" href="https://github.com/Keegan-Wright" target="_blank" ariaLabel="Keegan Wright"/>
                    </p>
                </footer>
            </main>
    </div>
  );
}
