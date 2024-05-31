import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { type FC } from "react";
import { SectionWrapper } from "../_components/SectionWrapper";

interface TestimonialBannerSectionProps {
  testimonial: string;
  studentName: string;
  studentDescription: string;
  imageSrc: string;
  imageAlt: string;
}

const TestimonialBannerSection: FC<TestimonialBannerSectionProps> = ({
  testimonial,
  studentName,
  studentDescription,
  imageSrc,
  imageAlt,
}) => {
  return (
    <SectionWrapper className="group my-0 border-b-2 py-12 transition-all duration-300 ease-in hover:border-primary">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-4 text-center">
        <Quote className="size-12 fill-transparent transition-all duration-300 ease-in group-hover:fill-primary" />
        <h2 className="text-3xl font-bold sm:text-5xl">{testimonial}</h2>
        <div className="flex items-center justify-center gap-2 text-lg">
          <Avatar className="border">
            <AvatarFallback></AvatarFallback>
            <AvatarImage src={imageSrc} alt={imageAlt} />
          </Avatar>
          <p>{studentName}</p>

          <p className="border-l-2 pl-2  text-muted-foreground ">
            {studentDescription}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialBannerSection;
