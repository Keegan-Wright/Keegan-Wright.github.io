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

    const firstName = "Keegan";
    const lastName = "Wright";
    const jobTitle = "Senior Software Engineer";
    const personalIntro = "Creator of high performance, scalable cloud solutions, self hosting enthusiast and open source contributor.";
    const githubLink = "https://github.com/Keegan-Wright";
    const linkedInLink = "https://www.linkedin.com/in/keegan-wright-2a68aa168/";
    const dockerLink = "https://hub.docker.com/u/keeganwright12";

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
                <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-purple-400"
                                                         href={githubLink} target="_blank"
                                                         rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)"
                                                         title="GitHub"><span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6"
                         aria-hidden="true">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a>
                </li>
                <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-purple-400"
                                                         href={dockerLink} target="_blank"
                                                         rel="noreferrer noopener"
                                                         aria-label="Docker (opens in a new tab)"
                                                         title="Docker"><span className="sr-only">Docker</span>
                    <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="512" cy="512" r="512"></circle> <path d="M827.3 461.5c-1.6-1.3-16.1-12.2-46.7-12.2-8.1 0-16.2.6-24.2 2.1-5.9-40.7-39.5-60.5-41-61.4l-8.2-4.8-5.4 7.8c-6.8 10.5-11.7 22-14.6 34.2-5.5 23.2-2.2 45 9.6 63.6-14.2 7.9-37.1 9.9-41.7 10H277c-9.9 0-17.9 8-17.9 17.9-.4 33.1 5.2 66 16.5 97.1 13 34.2 32.4 59.3 57.6 74.7 28.2 17.3 74.1 27.2 126.2 27.2 23.5.1 47-2.1 70.1-6.4 32.1-5.9 63-17.1 91.4-33.2 23.4-13.6 44.5-30.8 62.4-51.1 29.9-33.9 47.8-71.7 61.1-105.2h5.3c32.8 0 53-13.1 64.1-24.1 7.4-7 13.2-15.5 16.9-25l2.3-6.9-5.7-4.3zM312 489.9h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5H312c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.5 2 4.4 4.4 4.4m69.9 0h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5h-50.7c-2.5 0-4.5 2-4.5 4.5v45.1c0 2.5 2 4.4 4.5 4.4m70.8.1h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 2 4.3 4.4 4.4m70.1 0h50.7c2.4 0 4.4-2 4.5-4.4v-45.1c0-2.5-2-4.5-4.5-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 1.9 4.4 4.4 4.4m-141-65h50.7c2.4 0 4.4-2 4.4-4.5v-45.1c0-2.4-2-4.4-4.4-4.4h-50.7c-2.5 0-4.4 2-4.5 4.4v45.1c.1 2.5 2.1 4.5 4.5 4.5m70.9 0h50.7c2.4 0 4.4-2 4.4-4.5v-45.1c0-2.4-2-4.4-4.4-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.1c0 2.5 2 4.5 4.4 4.5m70.1 0h50.7c2.5 0 4.4-2 4.5-4.5v-45.1c0-2.5-2-4.4-4.5-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.1c0 2.5 1.9 4.5 4.4 4.5m0-64.9h50.7c2.5 0 4.5-2 4.5-4.5v-45.2c0-2.4-2-4.4-4.5-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.5 1.9 4.5 4.4 4.5M593.4 490h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.5-2-4.4-4.4-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 2 4.4 4.4 4.4" className="fill-slate-950" ></path> </g></svg>
                </a>
                </li>
                <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-purple-400"
                                                         href={linkedInLink} target="_blank"
                                                         rel="noreferrer noopener"
                                                         aria-label="LinkedIn (opens in a new tab)"
                                                         title="LinkedIn"><span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"
                         aria-hidden="true">
                        <path
                            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                </a>
                </li>
            </motion.ul>
        </motion.div>
    );
    }


