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
  imageSrc: string;
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
  const [visibleImagesCount, setVisibleImagesCount] = useState(6);
  const [showDiscount, setShowDiscount] = useState(false);

  const handleLoadMore = () => {
    if (visibleImagesCount >= imageTestimonials.length) {
      setShowDiscount(true);
    } else {
      setVisibleImagesCount(
        (prevCount) => prevCount + Math.floor(Math.random() * 3 + 1),
      );
    }
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <SectionWrapper className="">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-2 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <TextTestimonialsCarousel testimonials={textTestimonials} />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-8"
          // columnClassName="flex justify-center flex-wrap items-center"
        >
          {imageTestimonials.slice(0, visibleImagesCount).map((testimonial) => (
            <ImageTestimonialCard key={testimonial.imageSrc} {...testimonial} />
          ))}
        </Masonry>
        <div className="mt-8 text-center">
          {!showDiscount && (
            <LoadMoreButton
              onClick={handleLoadMore}
              hasMore={visibleImagesCount < imageTestimonials.length}
            />
          )}
          {showDiscount && <DiscountMessage />}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
