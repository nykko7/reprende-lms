"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { courseTexts } from "@/config/content/course";
import { type CourseColor, courseColorVariants } from "@/lib/course-colors";

import { Inter, Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function CourseSyllabusSection() {
  const { title, description, steps } = courseTexts.courseSyllabusSection;
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  return (
    <SectionWrapper className={cn("relative my-0 max-w-none")}>
      {/* Grid background */}
      <div className="absolute inset-0 bg-dot-white/20" />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Decorative module-colored lights */}
      <div className="absolute right-0 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/40 blur-[150px]" />
      <div className="absolute left-0 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-green-500/20 blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-yellow-500/[0.30] blur-[150px]" />
      <div className="absolute bottom-20 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-red-500/[0.40] blur-[150px]" />

      {/* Content */}
      <div className={cn("relative py-20")}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={cn(
            "relative mx-auto flex max-w-3xl justify-center font-inter",
            inter.variable,
          )}
        >
          <ol className="relative space-y-12">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="group relative flex gap-4"
              >
                {/* Timeline line with tapered end */}
                {index !== steps.length - 1 && (
                  // <div className="relative">
                  <div className="absolute left-6 top-10 -z-10 flex flex-col items-center">
                    {/* Main line */}
                    {/* <div className="h-full w-2 bg-gradient-to-b from-foreground/60 to-transparent" /> */}
                    {/* Tapered end */}
                    <div
                      className="absolute h-96 w-2 bg-gradient-to-b from-transparent via-foreground/30 to-transparent"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 50% 100%, 50% 100%)",
                      }}
                    />
                  </div>
                  // </div>
                )}

                {/* Step number */}
                <div
                  className={cn(
                    "sticky top-16 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-foreground shadow-lg transition-transform duration-300 group-hover:scale-110",
                    courseColorVariants[step.color as CourseColor].number,
                  )}
                >
                  {index + 1}
                </div>

                {/* Content card - Enhanced borders and hover effects */}
                <div
                  className={cn(
                    "w-full overflow-hidden rounded-lg border-2 shadow-lg transition-all duration-300 group-hover:shadow-xl",
                    courseColorVariants[step.color as CourseColor].border,
                  )}
                >
                  {/* Card header - Enhanced gradient */}
                  <div
                    className={cn(
                      "bg-gradient-to-r px-5 py-4",
                      courseColorVariants[step.color as CourseColor].secondary,
                    )}
                  >
                    <h3 className="text-xl font-bold text-foreground drop-shadow-sm">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-white/70">{step.description}</p>
                  </div>

                  {/* Card content - Enhanced background */}
                  <div
                    className={cn(
                      "space-y-3 px-5 py-4 transition-colors duration-300",
                      courseColorVariants[step.color as CourseColor].background,
                    )}
                  >
                    {step.details.map((detail, detailIndex) => (
                      <Fragment key={detailIndex}>
                        {detail.type === "paragraph" && (
                          <p className="text-sm">{detail.content}</p>
                        )}
                        {detail.type === "list" && (
                          <ul className="ml-4 space-y-1">
                            {detail.items?.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="text-sm before:mr-2 before:content-['•']"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
