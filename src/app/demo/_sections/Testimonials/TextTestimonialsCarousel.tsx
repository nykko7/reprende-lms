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
  imageSrc: string;
  imageAlt: string;
}

interface TextTestimonialsCarouselProps {
  testimonials: TextTestimonial[];
}

const TextTestimonialsCarousel: FC<TextTestimonialsCarouselProps> = ({
  testimonials,
}) => {
  return (
    <Carousel
      className="mx-auto mb-8 max-w-[90%]"
      autoplay={5000}
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
              <div className="group mx-auto flex h-full flex-col items-center justify-between gap-y-2">
                <div className="flex flex-col items-center gap-y-2">
                  <Quote className="size-12 fill-transparent transition-all duration-300 ease-in group-hover:fill-primary" />
                  <h2 className="text-center text-3xl font-bold">
                    {testimonial}
                  </h2>
                </div>
                <div className="flex items-center justify-center gap-2 border-b-2 py-2 text-center text-lg transition-all duration-300 ease-in group-hover:border-b-primary">
                  <Avatar className="border">
                    <AvatarFallback>
                      {studentName
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </AvatarFallback>
                    <AvatarImage src={imageSrc} alt={imageAlt} />
                  </Avatar>
                  <p>{studentName}</p>
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

export default TextTestimonialsCarousel;
