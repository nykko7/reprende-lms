"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import DiscountMessage from "./DiscountMessage";
import ImageTestimonialCard from "./ImageTestimonialCard";
import LoadMoreButton from "./LoadMoreButton";

type TestimonialMasonryPros = {
  testimonials: {
    imageSrc: string;
    imageAlt: string;
  }[];
};

function TestimonialMasonry({ testimonials }: TestimonialMasonryPros) {
  const [visibleImagesCount, setVisibleImagesCount] = useState(6);
  const [showDiscount, setShowDiscount] = useState(false);

  const handleLoadMore = () => {
    if (visibleImagesCount >= testimonials.length) {
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
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="-ml-8 flex w-auto gap-8"
        columnClassName="pl-8 bg-clip-padding"
      >
        {testimonials.slice(0, visibleImagesCount).map((testimonial, index) => (
          <ImageTestimonialCard
            key={testimonial.imageSrc}
            {...testimonial}
            priority={index < visibleImagesCount} // Prioritize images within the visible count
          />
        ))}
        {/* {testimonials
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
        <LoadMoreButton onClick={handleLoadMore} showDiscount={showDiscount} />
        {showDiscount && <DiscountMessage />}
      </div>
    </>
  );
}

export default TestimonialMasonry;
