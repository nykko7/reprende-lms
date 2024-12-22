import { cn } from "@/lib/utils";
import { Fragment, type FC } from "react";
import { SectionWrapper } from "../../../../../../components/landing/SectionWrapper";

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

const CourseStepColors: Record<string, string> = {
  red: "bg-red-900",
  blue: "bg-blue-900",
  green: "bg-green-900",
  yellow: "bg-yellow-700",
};

const CourseTitleColors: Record<string, string> = {
  red: "bg-red-900/30",
  blue: "bg-blue-900/30",
  green: "bg-green-900/30",
  yellow: "bg-yellow-700/30",
};

const CourseBgColors: Record<string, string> = {
  red: "bg-red-900/10",
  blue: "bg-blue-900/10",
  green: "bg-green-900/10",
  yellow: "bg-yellow-700/10",
};

const CourseBorderColors: Record<string, string> = {
  red: "border-red-900 group-hover:border-red-500",
  blue: "border-blue-900 group-hover:border-blue-500",
  green: "border-green-900 group-hover:border-green-500",
  yellow: "border-yellow-700 group-hover:border-yellow-500",
};

const LearningRouteSection: FC<LearningRouteSectionProps> = ({
  title,
  description,
  steps,
}) => {
  return (
    <SectionWrapper className="relative mb-0">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto flex max-w-3xl justify-center">
        <div className="ml-4 ">
          <ol className="relative">
            {steps.map((step, index) => (
              <li
                key={index}
                className="group mb-10 flex gap-4
              "
              >
                <div className="absolute bottom-0 left-5 top-0 -z-10 w-2 rounded-full bg-accent opacity-30"></div>

                <span
                  className={cn(
                    "sticky top-16 flex h-12 min-w-12 items-center justify-center rounded-full border-2 text-3xl font-extrabold text-accent-foreground transition-all duration-500",
                    CourseStepColors[step.color],
                    CourseBorderColors[step.color],
                  )}
                >
                  {index + 1}
                </span>
                <div
                  className={cn(
                    "w-full rounded-lg border-2 transition-all duration-500",
                    CourseBgColors[step.color],
                    CourseBorderColors[step.color],
                  )}
                >
                  <h3
                    className={cn(
                      "rounded-t-lg border-b px-5 py-3 text-xl font-bold transition-all duration-500",
                      CourseTitleColors[step.color],
                      CourseBorderColors[step.color],
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
