import {
  FeaturesSection,
  HeroSection,
  LearningRouteSection,
  MethodologySection,
  StepsSection,
} from "./_sections";

import texts from "./config/texts.json";

export default async function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection {...texts.heroSection} />

      {/* Dashboard Video and/or Image: */}
      {/* <DashboardPreviewSection {...texts.dashboardPreviewSection} /> */}

      {/* Learning route section*/}
      <LearningRouteSection {...texts.learningRouteSection} />

      {/* Features section */}
      <FeaturesSection {...texts.featuresSection} />

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
