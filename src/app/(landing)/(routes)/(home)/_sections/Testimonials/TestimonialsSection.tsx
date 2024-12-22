import { type FC } from "react";
import { SectionWrapper } from "../../../../../../components/landing/SectionWrapper";

import TestimonialCarousel from "./TestimonialCarousel";
import TestimonialMasonry from "./TestimonialMasonry";

interface TextTestimonial {
  type: "text";
  testimonial: string;
  studentName: string;
  studentDescription: string;
  imageSrc?: string;
  imageAlt: string;
}

interface ImageTestimonial {
  type: "image";
  imageSrc: string;
  imageAlt: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: (TextTestimonial | ImageTestimonial)[];
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({
  title,
  description,
  testimonials,
}) => {
  return (
    <SectionWrapper className="my-0">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-2 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-y-3 px-6 lg:px-8">
        <TestimonialCarousel
          testimonials={
            testimonials.filter(
              (testimonial) => testimonial.type === "text",
            ) as TextTestimonial[]
          }
        />
        <TestimonialMasonry
          testimonials={
            testimonials.filter(
              (testimonial) => testimonial.type === "image",
            ) as ImageTestimonial[]
          }
        />
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
