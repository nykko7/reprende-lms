import {
  HeroSection,
  InscriptionBannerSection,
  LearningRouteSection,
  MethodologySection,
  ModalitiesSection,
  SocialProofBannerSection,
  TargetAudienceSection,
  TestimonialsSection,
  WhoAmISection,
} from "./_sections";

import texts from "./_config/texts.json";

export default async function Home() {
  return (
    <main className="overflow-clip">
      {/* Hero Section */}
      <HeroSection {...texts.heroSection} />

      {/* Dashboard Video and/or Image: */}
      {/* <DashboardPreviewSection {...texts.dashboardPreviewSection} /> */}

      <SocialProofBannerSection {...texts.socialProofSection} />

      <TargetAudienceSection {...texts.targetAudienceSection} />

      {/* Learning route section*/}
      <LearningRouteSection {...texts.learningRouteSection} />

      <InscriptionBannerSection />

      <MethodologySection {...texts.methodologySection} />
      {/* <TestimonialBannerSection {...texts.testimonialBannerSection} /> */}

      <TestimonialsSection {...texts.testimonialsSection} />

      <ModalitiesSection {...texts.modalitiesSection} />

      {/* TODO: Pricing section*/}

      <WhoAmISection {...texts.whoAmISection} />
    </main>
  );
}
