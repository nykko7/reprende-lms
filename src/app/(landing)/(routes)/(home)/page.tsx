import HeroSection from "./_sections/Hero/HeroSection";
import LiveCourseSection from "./_sections/LiveCourse/LiveCourseSection";
import ProductsSection from "./_sections/Products/ProductsSection";
import TestimonialsSection from "./_sections/Testimonials/TestimonialsSection";
import WhoAmISection from "./_sections/WhoAmI/WhoAmISection";
import FAQSection from "./_sections/FAQ/FAQSection";
import SocialProofBannerSection from "./_sections/SocialProofBanner/SocialProofBannerSection";

export default function LandingPage() {
  return (
    <main className="overflow-clip">
      <HeroSection />
      <SocialProofBannerSection />
      <LiveCourseSection />
      <ProductsSection />
      <TestimonialsSection />
      <WhoAmISection />
      <FAQSection />
    </main>
  );
}
