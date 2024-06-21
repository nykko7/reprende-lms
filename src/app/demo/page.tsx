import {
  HeroSection,
  LearningRouteSection,
  MethodologySection,
  TargetAudienceSection,
} from "./_sections";

import texts from "./_config/texts.json";
import { InscriptionBannerSection } from "./_sections/InscriptionBannerSection";
import ModalitiesSection from "./_sections/ModalitiesSection";
import TestimonialsSection from "./_sections/Testimonials/TestimonialsSection";
import WhoAmISection from "./_sections/WhoAmI";
import { SocialProofBannerSection } from "./_sections/SocialProofBannerSection";

export default async function Home() {
  return (
    <main className="overflow-hidden">
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
