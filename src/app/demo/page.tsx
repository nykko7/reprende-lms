import {
  HeroSection,
  LearningRouteSection,
  MethodologySection,
  StepsSection,
  TargetAudienceSection,
} from "./_sections";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import texts from "./_config/texts.json";

export default async function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection {...texts.heroSection} />

      {/* Dashboard Video and/or Image: */}
      {/* <DashboardPreviewSection {...texts.dashboardPreviewSection} /> */}

      {/* Target Audience section */}
      <TargetAudienceSection {...texts.targetAudienceSection} />

      {/* Learning route section*/}
      <LearningRouteSection {...texts.learningRouteSection} />

      {/* TODO: Cambiar por banner final*/}
      <div className="align center my-0 flex flex-col justify-center gap-4 bg-primary/60 py-8 text-center text-primary-foreground">
        <h2 className="text-3xl font-bold">
          ¡Inscríbete ahora y comienza a{" "}
          <span
            className="text-secondary"
            // style={
            //   {
            //     // textShadow: "0 0 1px #000, 0 0 2px #000, 0 0 3px #000",
            //   }
            // }
          >
            reaprender
          </span>
          !
        </h2>
        <div className="flex justify-center">
          <Button asChild size={"lg"} variant={"outline"}>
            <Link href="#inscripciones">¡Quiero reaprender!</Link>
          </Button>
        </div>
      </div>

      {/* Methodology section */}
      <MethodologySection {...texts.methodologySection} />

      {/* TODO: Testimonials */}

      {/* TODO: Modalities */}

      {/* Steps section */}
      <StepsSection {...texts.stepsSection} />

      {/* TODO: Pricing section*/}

      {/* TODO: Who am i section*/}
    </main>
  );
}
