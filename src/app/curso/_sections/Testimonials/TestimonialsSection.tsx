import { type FC } from "react";
import { SectionWrapper } from "../../_components/SectionWrapper";

import TestimonialCarousel from "./TestimonialCarousel";
import TestimonialMasonry from "./TestimonialMasonry";

interface TextTestimonial {
  testimonial: string;
  studentName: string;
  studentDescription: string;
  imageSrc?: string;
  imageAlt: string;
}

interface ImageTestimonial {
  imageSrc: string;
  imageAlt: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: {
    textTestimonials: TextTestimonial[];
    imageTestimonials: ImageTestimonial[];
  };
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({
  title,
  description,
  testimonials: { textTestimonials, imageTestimonials },
}) => {
  return (
    <SectionWrapper className="my-0">
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
};

export default TestimonialsSection;
