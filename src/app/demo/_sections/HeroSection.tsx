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
  socialProofs: {
    number: string;
    description: string;
  }[];
}

const HeroSection: FC<HeroSectionProps> = ({
  badgeText,
  titleAccent,
  titleNormal,
  description,
  buttonText,
  socialProofs,
}) => {
  return (
    // h-[calc(100vh-250px)] is a utility class that sets the height of the element to the viewport height minus 250px
    <SectionWrapper className="my-0 flex h-svh flex-col justify-center">
      <div className="h-1/6"></div>
      <div className="relative flex h-5/6  flex-col items-center justify-between text-center">
        <div className="flex  flex-col items-center  gap-y-3 ">
          {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center  bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div> */}
          <div className="absolute right-0 top-0 h-1/4 w-1/4 animate-spin-slow opacity-50 blur-[120px] filter">
            <div className="relative">
              <div className="h-64 w-full rounded-full bg-blue-600"></div>
              <div className="absolute -left-24 bottom-24 h-full w-full rounded-full bg-blue-700"></div>
              <div className="absolute left-24 top-24 h-full w-full rounded-full bg-purple-600"></div>
            </div>
          </div>
          <div className="absolute bottom-32 left-0 h-1/4 w-1/4 animate-spin-slow opacity-50 blur-[120px] filter">
            <div className="relative">
              <div className="h-64 w-full rounded-full bg-purple-800"></div>
              <div className="absolute -left-24 bottom-24 h-full w-full rounded-full bg-red-800"></div>
              <div className="absolute left-24 top-24 h-full w-full rounded-full bg-purple-600"></div>
            </div>
          </div>

          <div className="relative">
            <div className="z-1 absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-purple-700 opacity-50 blur-lg filter"></div>
            <Badge variant={"animated"} className="relative z-20 h-8">
              {badgeText}
            </Badge>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text">
              {titleAccent}
            </span>
            <span className="bg-gradient-to-b from-neutral-100 to-neutral-400 bg-clip-text">
              {titleNormal}
            </span>
          </h1>

          <p className="max-w-xl text-lg text-foreground">{description}</p>
          <Button asChild size={"lg"} className="font-bold">
            <Link href="#inscripciones">
              {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="align center bg-gradient from-bg-primary/60 group my-0 flex flex-col justify-center gap-4 to-secondary/60 py-8 text-center text-primary-foreground ">
          <dl className="mx-auto grid gap-16 sm:grid-cols-3">
            {socialProofs?.map((socialProof, index) => (
              <div
                key={index}
                className="flex max-w-40 flex-col items-center  "
              >
                <dt className="mb-2 text-4xl font-extrabold drop-shadow-[0_1.5px_1.5px_rgba(8,8,8,0.8)]">
                  {socialProof.number}
                </dt>
                <dd className="text-lg font-medium text-muted-foreground drop-shadow-lg">
                  {socialProof.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
