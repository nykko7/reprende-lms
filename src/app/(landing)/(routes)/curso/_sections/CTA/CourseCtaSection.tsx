"use client";

import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { Button } from "@/components/ui/button";
import { courseTexts } from "@/config/content/course";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { formatText } from "@/lib/text";
import Link from "next/link";

export default function CourseCtaSection() {
  const { courseCTASection } = courseTexts;

  return (
    <SectionWrapper className="relative my-0 max-w-none bg-primary/5 py-24">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-dot-white/[0.03]" />

      {/* Accent border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-10"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              {courseCTASection.title}
            </h2>
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              {courseCTASection.subtitle}
            </p>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {formatText(courseCTASection.description)}
          </p>

          <Button asChild size="xl">
            <Link href={courseCTASection.ctaLink}>
              {courseCTASection.ctaText}
            </Link>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
