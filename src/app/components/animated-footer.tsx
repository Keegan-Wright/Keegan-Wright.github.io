"use client";

import {motion} from "framer-motion";
import {slideUpFadeIn} from "@/app/utils/animation-variants";
import {ApplicationLink} from "@/app/components/application-link";

export default function AnimatedFooter() {
    return (
        <motion.footer
            className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={slideUpFadeIn}
        >
            <p className="text-center">
                Want to get in touch? <br/>
                <ApplicationLink
                  title="Send me an email"
                  href="mailto:keeganwright12@gmail.com"
                  target="_blank" ariaLabel="WebStorm"
              />
            </p>
        </motion.footer>
    );
}
