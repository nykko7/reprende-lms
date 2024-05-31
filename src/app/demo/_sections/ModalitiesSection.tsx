import { type FC } from "react";
import { SectionWrapper } from "../_components/SectionWrapper";

interface ModalitiesSectionProps {
  title: string;
  description: string;
  modalities: {
    name: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
  }[];
}

const ModalitiesSection: FC<ModalitiesSectionProps> = ({
  title,
  modalities,
  description,
}) => {
  return (
    <SectionWrapper className="">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-2 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className=""></div>
      </div>
    </SectionWrapper>
  );
};

export default ModalitiesSection;
