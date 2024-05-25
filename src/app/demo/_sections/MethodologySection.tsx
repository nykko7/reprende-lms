import { type FC } from "react";
import Feature, { type FeatureProps } from "../_components/Feature";
import { SectionWrapper } from "../_components/SectionWrapper";

interface MethodologySectionProps {
  title: string;
  description: string;
  features: FeatureProps[];
}

const MethodologySection: FC<MethodologySectionProps> = ({
  title,
  description,
  features,
}) => {
  return (
    <SectionWrapper className="my-0 max-w-none py-16 bg-dot-purple-500/[0.50]">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MethodologySection;
