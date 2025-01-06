import { SectionWrapper } from "@/components/landing/SectionWrapper";
import LiveCoursePreview from "./LiveCoursePreview";
import { homeTexts } from "@/config/content/home";

export default function LiveCourseSection() {
  const { nextBatch, price, spots } = homeTexts.liveCourseSection;

  return (
    <SectionWrapper className="my-0 max-w-none py-16" id="curso-en-vivo">
      <LiveCoursePreview nextBatch={nextBatch} price={price} />
    </SectionWrapper>
  );
}
