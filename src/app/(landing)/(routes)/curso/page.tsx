import { CourseHeroSection } from "./_sections/Hero/CourseHeroSection";
import CourseSyllabusSection from "./_sections/Syllabus/CourseSyllabusSection";
import TestimonialsSection from "./_sections/Testimonials/TestimonialsSection";
import WhoAmISection from "./_sections/WhoAmI/WhoAmISection";
import MethodologySection from "./_sections/Methodology/MethodologySection";
import FAQSection from "./_sections/FAQ/FAQSection";
import RegistrationSection from "./_sections/Registration/RegistrationSection";
import TargetAudienceSection from "./_sections/TargetAudience/TargetAudienceSection";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function CourseInfoPage() {
  return (
    <main
      className={`overflow-clip ${montserrat.variable} pt-10 font-montserrat`}
    >
      <CourseHeroSection />
      <TargetAudienceSection />
      <MethodologySection />
      <CourseSyllabusSection />
      <TestimonialsSection />
      <WhoAmISection />
      <RegistrationSection />
      <FAQSection />
    </main>
  );
}
