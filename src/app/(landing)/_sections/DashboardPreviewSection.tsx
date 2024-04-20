import Image from "next/image";
import { type FC } from "react";
import BackgroundDecorator from "../_components/BackgroundDecorator";

interface DashboardSectionProps {
  imagePath: string;
  imageAlt: string;
}

const DashboardPreviewSection: FC<DashboardSectionProps> = ({
  imagePath,
  imageAlt,
}) => {
  return (
    <BackgroundDecorator>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-slate-300/5 p-2 ring-1 ring-inset ring-slate-300/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src={imagePath}
              alt={imageAlt}
              width={1364}
              height={866}
              quality={100}
              className="rounded-md bg-background p-2 shadow-2xl ring-1 ring-slate-300/10 sm:p-8 md:p-20"
            />
          </div>
        </div>
      </div>
    </BackgroundDecorator>
  );
};

export default DashboardPreviewSection;
