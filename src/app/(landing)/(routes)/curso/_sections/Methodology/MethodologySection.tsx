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
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-purple-800/[0.3]" />
      <div className="absolute left-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" />

      {/* Add a subtle mask to blend with adjacent sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      {/* Content */}
      <div className="relative py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-xl border bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/50 to-primary-foreground/50 opacity-0 blur transition duration-300 group-hover:opacity-100" />
              <div className="relative h-full rounded-xl border bg-card">
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
    </SectionWrapper>
  );
}
