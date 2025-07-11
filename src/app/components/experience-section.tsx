import {WorkingExperience} from "@/app/components/working-experience";
import {WorkExperience} from "@/app/content/WorkExperience";
import AnimatedSection from "@/app/components/animated-section";
import AnimatedListItem from "@/app/components/animated-list-item";
import {motion} from "framer-motion";
import {staggerContainer} from "@/app/utils/animation-variants";

export default function ExperienceSection() {

    var workingExperienceEnumValues = Object.values(WorkExperience) as WorkExperience[];

    return (
        <AnimatedSection id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                         aria-label="Professional Experience">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <motion.ol
                className="group/list experience-list"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, margin: "-100px"}}
            >
                {workingExperienceEnumValues.toReversed().map((key, index) => (
                    <AnimatedListItem className="mb-12" key={key} index={index}>
                        <WorkingExperience workExperienceKey={key}/>
                    </AnimatedListItem>
                ))}
            </motion.ol>
        </AnimatedSection>
    )
}