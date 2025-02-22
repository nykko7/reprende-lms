import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, PenBox, Calendar } from "lucide-react";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { formatText } from "@/lib/text";
import { YouTubePlayer } from "./YouTubePlayer";
import { courseTexts } from "@/config/content/course";

export function CourseHeroSection() {
  const {
    badgeText,
    title,
    subtitle,
    videoUrl,
    ctaText,
    ctaLink,
    rating,
    nextBatch,
  } = courseTexts.courseHeroSection;

  return (
    <SectionWrapper className="my-0 flex max-w-screen-lg flex-col justify-center">
      <div className="relative flex flex-col items-center justify-between text-center">
        <div className="flex flex-col items-center gap-y-6">
          <h3 className="bg-primary text-lg font-bold text-primary-foreground md:text-xl">
            {badgeText}
          </h3>

          <h1 className="whitespace-pre-wrap text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {formatText(title)}
          </h1>

          <YouTubePlayer videoUrl={videoUrl} />

          <p className="whitespace-pre-wrap text-sm leading-normal text-foreground md:text-base">
            {formatText(subtitle)}
          </p>

          <div className="flex items-center justify-center space-x-1">
            <span className="ml-2 text-xl font-bold">{rating.toFixed(1)}</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-sm text-muted-foreground">
              El <span className="font-bold">curso en vivo</span> estará
              disponible únicamente{" "}
              <span className="font-bold">un par de veces en el año.</span>
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="size-8" />
              <span className="text-xl font-bold uppercase sm:text-2xl md:text-3xl">
                Proxima fecha: {nextBatch}
              </span>
            </div>
          </div>

          <Button asChild size="xl" className="z-20">
            <Link href={ctaLink}>
              <PenBox className="mr-2 h-6 w-6" />
              {ctaText}
            </Link>
          </Button>

          {/* <div className="flex w-full items-center justify-center rounded-md border-2 border-yellow-500 bg-yellow-700/70 p-2 text-sm font-semibold text-primary-foreground">
            <TriangleAlert className="mr-2 h-10 w-10" />
            <span>
              Oferta de lanzamiento válida por tiempo limitado.
              <br />
              ¡Aprovecha antes de que suba el precio!
            </span>
          </div> */}
        </div>
      </div>
    </SectionWrapper>
  );
}
