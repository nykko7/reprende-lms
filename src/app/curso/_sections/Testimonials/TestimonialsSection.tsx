"use client";

import { type FC, useState } from "react";
import Masonry from "react-masonry-css";
import { SectionWrapper } from "../../_components/SectionWrapper";
import DiscountMessage from "./DiscountMessage";
import ImageTestimonialCard from "./ImageTestimonialCard";
import LoadMoreButton from "./LoadMoreButton";
import TextTestimonialsCarousel from "./TextTestimonialsCarousel";

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
  const [visibleImagesCount, setVisibleImagesCount] = useState(3);
  const [showDiscount, setShowDiscount] = useState(false);

  const handleLoadMore = () => {
    if (visibleImagesCount >= imageTestimonials.length) {
      setShowDiscount(true);
    } else {
      setVisibleImagesCount((prevCount) => prevCount + 3);
    }
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <SectionWrapper className="my-0">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-2 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-y-3 px-6 lg:px-8">
        <TextTestimonialsCarousel testimonials={textTestimonials} />

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="-ml-8 flex w-auto gap-8"
          columnClassName="pl-8 bg-clip-padding"
        >
          {imageTestimonials
            .slice(0, visibleImagesCount)
            .map((testimonial, index) => (
              <ImageTestimonialCard
                key={testimonial.imageSrc}
                {...testimonial}
                priority={index < visibleImagesCount} // Prioritize images within the visible count
              />
            ))}
          {/* {imageTestimonials
            .slice(visibleImagesCount, visibleImagesCount + 3)
            .map((testimonial) => (
              <ImageTestimonialCard
                key={testimonial.imageSrc}
                {...testimonial}
                priority={false} // Ensure next images are loaded eagerly
              />
            ))} */}
        </Masonry>
        <div className="text-center">
          <LoadMoreButton
            onClick={handleLoadMore}
            showDiscount={showDiscount}
          />
          {showDiscount && <DiscountMessage />}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
