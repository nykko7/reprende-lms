import { SectionWrapper } from "@/components/landing/SectionWrapper";
import TestimonialCarousel from "./TestimonialCarousel";
import TestimonialMasonry from "./TestimonialMasonry";
import { courseTexts } from "@/config/content/course";

export default function TestimonialsSection() {
  const { title, description, textTestimonials, imageTestimonials } =
    courseTexts.courseTestimonialsSection;

  return (
    <SectionWrapper className="relative mt-0 max-w-none bg-background py-20">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-2 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-y-3 px-6 lg:px-8">
        <TestimonialCarousel testimonials={textTestimonials} />
        <TestimonialMasonry testimonials={imageTestimonials} />
      </div>
    </SectionWrapper>
  );
}
