"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { courseTexts } from "@/config/content/course";
import { MethodologyFeature } from "./MethodologyFeature";

export default function MethodologySection() {
  const { title, description, features } = courseTexts.courseMethodologySection;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <SectionWrapper className="relative my-0 max-w-none ">
      {/* Remove the gradient background and adjust decorative elements */}
      <div className="absolute inset-0 bg-grid-purple-500/[0.3]" />

      {/* Decorative Elements - make them more subtle */}
      <div className="absolute left-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-purple-500/[0.15] blur-3xl" />
      <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-blue-500/[0.15] blur-3xl" />

      {/* Add a subtle mask to blend with adjacent sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Content wrapper with padding */}
      <div className="relative py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-16 max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl p-4 lg:p-6">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-background via-transparent to-background opacity-20" />
          {/* Grid Background */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute -inset-1.5  bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 blur transition duration-300 group-hover:opacity-100" />
                <div className="relative h-full rounded-lg border border-border bg-card shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <MethodologyFeature
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
