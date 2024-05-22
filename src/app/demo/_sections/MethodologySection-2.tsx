import Image from "next/image";
import { type FC } from "react";
import { SectionWrapper } from "../_components/SectionWrapper";

interface MethodologyStep {
  title: string;
  description: string;
}

interface MethodologySectionProps {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  steps: MethodologyStep[];
}

const MethodologySection: FC<MethodologySectionProps> = ({
  title,
  description,
  steps,
  imagePath,
  imageAlt,
}) => {
  return (
    <SectionWrapper className="mb-32 mt-32">
      <div className="mx-auto mb-12 max-w-2xl sm:text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="md:gap:32 mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src={imagePath}
            alt={imageAlt}
            width={600}
            height={400}
            quality={100}
            className="rounded-md bg-background shadow-2xl ring-1"
          />
        </div>
        <div className="ml-10">
          <ol className="relative border-l-4">
            {steps.map((step, index) => (
              <li key={index} className="mb-10 ml-10">
                <span className="absolute -left-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground transition-all">
                  {step.title[0]}
                </span>
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-base text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MethodologySection;
