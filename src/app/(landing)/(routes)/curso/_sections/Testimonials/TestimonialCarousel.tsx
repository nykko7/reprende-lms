import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { type FC } from "react";

interface TextTestimonial {
  testimonial: string;
  studentName: string;
  studentDescription: string;
  imageSrc?: string;
  imageAlt: string;
}

interface TextTestimonialsCarouselProps {
  testimonials: TextTestimonial[];
}

const TestimonialCarousel: FC<TextTestimonialsCarouselProps> = ({
  testimonials,
}) => {
  return (
    <Carousel
      className="mx-auto mb-6 max-w-[90%]"
      autoplay={6000}
      opts={{
        loop: true,
        slidesToScroll: 1,
      }}
    >
      <CarouselContent>
        {testimonials.map(
          (
            {
              testimonial,
              studentName,
              studentDescription,
              imageSrc,
              imageAlt,
            },
            index,
          ) => (
            <CarouselItem key={index}>
              <div className="group mx-auto flex h-full flex-col items-center justify-between gap-y-2 py-4  transition-all duration-300 ease-in ">
                <div className="flex flex-col items-center gap-y-2">
                  <Quote className="size-12 fill-primary transition-all duration-300 ease-in group-hover:fill-primary lg:fill-transparent" />
                  <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
                    {testimonial}
                  </h2>
                </div>
                <div className="flex items-center justify-center gap-2 border-b-2 border-b-primary/50 py-3 text-center  text-lg transition-all duration-300 ease-in group-hover:border-b-primary/50 lg:border-transparent">
                  <Avatar className="border">
                    <AvatarFallback>
                      {studentName
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </AvatarFallback>
                    <AvatarImage src={imageSrc} alt={imageAlt} />
                  </Avatar>
                  <p className="font-bold">{studentName}</p>
                  <p className="border-l-2 pl-2 text-muted-foreground">
                    {studentDescription}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ),
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestimonialCarousel;
