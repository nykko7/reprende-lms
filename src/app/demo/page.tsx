import {
  HeroSection,
  LearningRouteSection,
  MethodologySection,
  StepsSection,
  TargetAudienceSection,
} from "./_sections";

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
