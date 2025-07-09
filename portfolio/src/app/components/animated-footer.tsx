"use client";

import { motion } from "framer-motion";
import { slideUpFadeIn } from "@/app/utils/animation-variants";
import { ApplicationLink } from "@/app/components/application-link";

export default function AnimatedFooter() {
  return (
    <motion.footer
      className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideUpFadeIn}
    >
      <p className="text-center">
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
    </motion.footer>
  );
}
