import {
  HeroSection,
  LearningRouteSection,
  MethodologySection,
  TargetAudienceSection,
} from "./_sections";

import texts from "./_config/texts.json";
import { InscriptionBannerSection } from "./_sections/InscriptionBannerSection";
import ModalitiesSection from "./_sections/ModalitiesSection";
import { SocialProofBannerSection } from "./_sections/SocialProofBannerSection";
import TestimonialBannerSection from "./_sections/TestimonialBanner";
import TestimonialsSection from "./_sections/TestimonialsSection";
import WhoAmISection from "./_sections/WhoAmI";

export default async function Home() {
  return (
    <main>
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
      <TestimonialBannerSection {...texts.testimonialBannerSection} />

      <TestimonialsSection {...texts.testimonialsSection} />

      <ModalitiesSection {...texts.modalitiesSection} />

      {/* TODO: Pricing section*/}

      <WhoAmISection {...texts.whoAmISection} />
    </main>
  );
}
