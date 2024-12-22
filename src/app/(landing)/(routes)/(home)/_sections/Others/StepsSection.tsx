import { type FC } from "react";
import { SectionWrapper } from "../../../../../../components/landing/SectionWrapper";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface StepsSectionProps {
  title: string;
  description: string;
  steps: Step[];
}

const StepsSection: FC<StepsSectionProps> = ({ title, description, steps }) => {
  return (
    <SectionWrapper className="mx-auto mb-32 mt-32">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
      <ol className="mx-6 my-8 items-start space-y-4 pt-8 sm:mx-24 md:flex md:space-x-12 md:space-y-0">
        {steps.map((step, index) => (
          <li key={index} className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-base font-medium text-primary">
                {step.step}
              </span>
              <span className="text-xl font-semibold">{step.title}</span>
              <span className="mt-2 text-muted-foreground">
                {step.description}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
};

export default StepsSection;
