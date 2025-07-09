    "use client";

    import { useActiveSection } from "@/app/hooks/useActiveSection";
    import { motion } from "framer-motion";
    import { slideInFromLeft, staggerContainer } from "@/app/utils/animation-variants";
    import { useEffect, useState } from "react";

    export default function PortfolioHeader() {
    const activeSection = useActiveSection();
    const [currentActiveSection, setCurrentActiveSection] = useState('');

    // Update current active section when activeSection changes
    useEffect(() => {
      if (activeSection) {
        setCurrentActiveSection(activeSection);
      }
    }, [activeSection]);

    // Debug log to check active section changes
    useEffect(() => {
      console.log('Active section:', currentActiveSection);
    }, [currentActiveSection]);

    const firstName = "Keegan";
    const lastName = "Wright";
    const jobTitle = "Senior Software Engineer";
    const personalIntro = "Creator of high performance, scalable cloud solutions, self hosting enthusiast and open source contributor.";
    const githubLink = "https://github.com/Keegan-Wright";

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            transition={{ duration: 0.5 }}
        >
            <motion.div variants={slideInFromLeft}><motion.h1 className="text-4xl font-bold tracking-tight text-slate-300 sm:text-5xl"><a href="/">{firstName} {lastName}</a>
            </motion.h1><motion.h2 variants={slideInFromLeft} className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl">{jobTitle}</motion.h2><motion.p variants={slideInFromLeft}
                className="mt-4 max-w-xs leading-normal">{personalIntro}</motion.p>
                                    <motion.nav variants={slideInFromLeft} className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <li><a className={`group flex items-center py-3 ${currentActiveSection === '#about' ? 'active' : ''}`} href="#about"><span
                            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-purple-400 group-focus-visible:w-16 group-focus-visible:bg-purple-400 motion-reduce:transition-none"></span><span
                            className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-400 group-focus-visible:text-purple-400">About</span></a>
                        </li>
                        <li><a className={`group flex items-center py-3 ${currentActiveSection === '#experience' ? 'active' : ''}`} href="#experience"><span
                            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-purple-400 group-focus-visible:w-16 group-focus-visible:bg-purple-400 motion-reduce:transition-none"></span><span
                            className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-400 group-focus-visible:text-purple-400">Experience</span></a>
                        </li>
                        <li><a className={`group flex items-center py-3 ${currentActiveSection === '#personal-projects' ? 'active' : ''}`} href="#personal-projects"><span
                            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-purple-400 group-focus-visible:w-16 group-focus-visible:bg-purple-400 motion-reduce:transition-none"></span><span
                            className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-400 group-focus-visible:text-purple-400">Projects</span></a>
                        </li>
                    </ul>
                </motion.nav>
            </motion.div>
            <motion.ul variants={slideInFromLeft} className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-slate-200"
                                                         href={githubLink} target="_blank"
                                                         rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)"
                                                         title="GitHub"><span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6"
                         aria-hidden="true">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a></li>

            </motion.ul>
        </motion.div>
    );
}


