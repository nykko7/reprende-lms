import { type FC } from "react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Icon from "./Icon";

export interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature: FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <HoverBorderGradient
      duration={0.5}
      as="div"
      className="flex flex-col items-center p-5"
    >
      {/* <div className="flex flex-col items-center border p-5"> */}
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
          <Icon name={icon} className="size-8" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-medium text-foreground">{title}</h3>
        <p className="mt-2 text-base text-muted-foreground">{description}</p>
      </div>
      {/* </div> */}
    </HoverBorderGradient>
  );
};

export default Feature;
