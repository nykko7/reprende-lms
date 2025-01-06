import LiveCoursePreview from "./LiveCoursePreview";
import { courseTexts } from "@/config/content/course";

export default function RegistrationSection() {
  const { nextBatch, price } = courseTexts.courseRegistrationSection;

  return (
    <section className="group" id="registro">
      <div className="align center my-0 flex flex-col justify-center gap-4  border-y-2 bg-primary/25 py-24 text-center text-accent-foreground transition duration-700 ease-out">
        <h2 className="text-4xl">
          ¿Te convenciste ya de{" "}
          <span className="relative z-10 font-bold text-primary-foreground">
            reaprender
            <svg
              className="absolute inset-x-0 -bottom-[5px] -z-10 h-[10px] w-full opacity-100 transition-opacity delay-100 duration-300 ease-out group-hover:opacity-100 lg:opacity-0"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                className="group-hover:dasharray-0 lg:dasharray-100 dasharray-0 stroke-[6px] transition-all duration-700 ease-out"
                d="M0,5 Q50,0 100,5"
                fill="transparent"
                stroke="url(#gradient)"
                strokeDasharray="100"
                strokeDashoffset="100"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          ?
        </h2>
      </div>
      <div className="align-center flex justify-center py-10">
        <LiveCoursePreview nextBatch={nextBatch} price={price} />
      </div>
    </section>
  );
}
