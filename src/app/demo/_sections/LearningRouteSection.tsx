import { cn } from "@/lib/utils";
import { Fragment, type FC } from "react";
import { SectionWrapper } from "../_components/SectionWrapper";

interface LearningRouteSectionProps {
  title: string;
  description: string;
  imagePath: string;
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

const CourseBgColors: Record<string, string> = {
  red: "bg-red-900/10",
  blue: "bg-blue-900/10",
  green: "bg-green-900/10",
  yellow: "bg-yellow-700/10",
};

const LearningRouteSection: FC<LearningRouteSectionProps> = ({
  title,
  description,
  steps,
}) => {
  return (
    <SectionWrapper className="mb-0">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto flex max-w-3xl justify-center">
        <div className="ml-4 ">
          <ol className="relative border-l-8">
            {steps.map((step, index) => (
              <li key={index} className="mb-10 ml-10">
                <span
                  className={cn(
                    "absolute -left-8 flex h-14 w-14 items-center justify-center rounded-full text-3xl font-extrabold text-accent-foreground transition-all",
                    CourseColors[step.color],
                  )}
                >
                  {index + 1}
                </span>
                <div
                  className={cn(
                    "rounded-lg border bg-red-900/20",
                    CourseBgColors[step.color],
                  )}
                >
                  <h3
                    className={cn(
                      "rounded-t-lg px-5 py-3 text-xl font-bold",
                      CourseColors[step.color],
                    )}
                  >
                    {step.title}
                  </h3>
                  <div className="px-5 py-3">
                    <p className="text-base font-medium text-muted-foreground">
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
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LearningRouteSection;
