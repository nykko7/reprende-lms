import { Badge } from "@/components/ui/badge";
import CTAButton from "@/components/landing/CTAButton";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import {
  ArrowRight,
  Blocks,
  Check,
  CheckCheck,
  CheckCircle,
  CheckSquare,
} from "lucide-react";
import { homeTexts } from "@/config/content/home";
import { formatText } from "@/lib/text";

export default function HeroSection() {
  const {
    badgeText,
    titleAccent,
    titleNormal,
    description,
    mainCTA,
    features,
    // secondaryCTA,
  } = homeTexts.heroSection;

  return (
    <SectionWrapper className="my-0 flex h-[calc(100svh-56px)] flex-col justify-center py-20">
      {/* <div className="h-1/6"></div> */}
      <div className="relative flex flex-col items-center justify-between text-center">
        <div className="flex  flex-col items-center  gap-y-4 ">
          {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center  bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div> */}
          <div className="z-1 absolute -top-52 right-0 h-1/4 w-1/4 animate-spin-slow opacity-50 blur-[120px] filter">
            <div className="relative">
              <div className="h-64 w-full rounded-full bg-blue-600"></div>
              <div className="absolute -left-24 bottom-24 h-5/6 w-full rounded-full bg-blue-700"></div>
              <div className="absolute left-24 top-24 h-5/6 w-full rounded-full bg-purple-600"></div>
            </div>
          </div>
          <div className="z-1 absolute -bottom-48 left-0 h-1/4 w-1/4 animate-spin-slow opacity-40 blur-[120px] filter">
            <div className="relative">
              <div className="h-64 w-full rounded-full bg-purple-800"></div>
              <div className="absolute -left-24 bottom-24 h-5/6 w-full rounded-full bg-red-800"></div>
              <div className="absolute left-24 top-24 h-5/6 w-full rounded-full bg-purple-600"></div>
            </div>
          </div>

          <div className="relative">
            <div className="z-1 absolute inset-0 rounded-full bg-white opacity-25 blur-sm filter"></div>
            <Badge variant={"animated"} className="relative z-20 h-10 text-sm">
              {badgeText}
            </Badge>
          </div>

          {/* add text white border */}
          <h1 className="z-20 max-w-4xl text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text">
              {titleAccent}
            </span>
            <span className="bg-gradient-to-b from-neutral-100 to-neutral-400 bg-clip-text">
              {titleNormal}
            </span>
          </h1>

          <p className="z-20 max-w-xl text-lg text-foreground">
            {formatText(description)}
          </p>
          <div className="flex flex-col justify-center gap-2">
            {features.map((feature) => (
              <p
                key={feature}
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <Check className="h-5 w-5 text-green-500" />
                {feature}
              </p>
            ))}
            <div className="mt-4">
              <CTAButton
                className="z-20 w-full"
                // variant={"outline"}

                isHero
              >
                {mainCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {/* <Button
              size={"lg"}
              variant={"outline"}
              className="z-20 w-full font-bold sm:w-fit"
              asChild
            >
              <Link href={"#otros-productos"}>
                <Library className="mr-2 h-5 w-5 " />
                {secondaryCTA}
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
