import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type FC } from "react";
import { SectionWrapper } from "../_components/SectionWrapper";

interface HeroSectionProps {
  badgeText: string;
  titleAccent: string;
  titleNormal: string;
  description: string;
  buttonText: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  badgeText,
  titleAccent,
  titleNormal,
  description,
  buttonText,
}) => {
  return (
    <SectionWrapper className="relative flex flex-col items-center justify-center gap-y-3 text-center">
      <Badge variant={"animated"} className="h-8 ">
        {badgeText}
      </Badge>
      <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-6xl lg:text-7xl ">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {titleAccent}
        </span>
        {titleNormal}
      </h1>
      <p className="max-w-xl text-lg text-foreground">{description}</p>
      <Button asChild size={"lg"} className="font-bold">
        <Link href="/#inscripciones">
          {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </SectionWrapper>
  );
};

export default HeroSection;
