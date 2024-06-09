import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { type FC } from "react";

interface TextTestimonial {
  testimonial: string;
  studentName: string;
  studentDescription: string;
  imageSrc: string;
  imageAlt: string;
}

const TestimonialCard: FC<TextTestimonial> = ({
  testimonial,
  studentName,
  studentDescription,
  imageSrc,
  imageAlt,
}) => (
  <div className="group mx-auto my-4 flex max-w-3xl flex-col items-center justify-center gap-y-4 text-center">
    <Quote className="size-12 fill-transparent transition-all duration-300 ease-in group-hover:fill-primary" />
    <h2 className="text-3xl font-bold">{testimonial}</h2>
    <div className="flex items-center justify-center gap-2 text-lg">
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
);

export default TestimonialCard;
