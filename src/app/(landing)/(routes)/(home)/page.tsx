import HeroSection from "./_sections/Hero/HeroSection";
import ChooseYourProductSection from "./_sections/ChooseYourProduct/ChooseYourProductSection";
import MethodologySection from "./_sections/Methodology/MethodologySection";
import WhoAmISection from "./_sections/WhoAmI/WhoAmISection";
import TestimonialsSection from "./_sections/Testimonials/TestimonialsSection";
import FAQSection from "./_sections/FAQ/FAQSection";

import { landingTexts } from "../../_config/home";

export default function LandingPage() {
  return (
    <main className="overflow-clip">
      <HeroSection {...landingTexts.heroSection} />
      <ChooseYourProductSection {...landingTexts.chooseYourProductSection} />
      <MethodologySection {...landingTexts.methodologySection} />
      <TestimonialsSection {...landingTexts.testimonialsSection} />
      <WhoAmISection {...landingTexts.whoAmISection} />
      <FAQSection {...landingTexts.faqSection} />
    </main>
  );
}
