import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment, type FC } from "react";
import { SectionWrapper } from "../_components/SectionWrapper";

interface LearningRouteSectionProps {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  steps: {
    title: string;
    description: string;
    color: string;
    details: {
      type: string;
      content?: string;
      items?: string[];
    }[];
  }[];
}

const CourseColors: Record<string, string> = {
  red: "bg-red-900",
  blue: "bg-blue-900",
  green: "bg-green-900",
  yellow: "bg-yellow-700",
};

const LearningRouteSection: FC<LearningRouteSectionProps> = ({
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
        <div className="ml-10 ">
          <ol className="relative border-l-4">
            {steps.map((step, index) => (
              <li key={index} className="mb-10 ml-10">
                <span
                  className={cn(
                    "absolute -left-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold text-accent-foreground transition-all",
                    CourseColors[step.color],
                  )}
                >
                  {index + 1}
                </span>
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-base text-muted-foreground">
                  {step.description}
                </p>
                <div className="my-2 flex flex-col gap-y-2 text-sm">
                  {step.details.map((detail, index) => (
                    <Fragment key={index}>
                      {detail.type === "paragraph" && (
                        <p className="">{detail.content}</p>
                      )}
                      {detail.type === "list" && (
                        <ul className="ml-4 list-inside list-disc text-sm">
                          {detail.items?.map((item, subIndex) => (
                            <li key={subIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </Fragment>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>

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
      </div>
    </SectionWrapper>
  );
};

export default LearningRouteSection;
