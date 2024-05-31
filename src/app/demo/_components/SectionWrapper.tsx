import { cn } from "@/lib/utils";

export const SectionWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        "mx-auto my-20 w-full max-w-screen-xl px-4 sm:px-6  lg:px-8 ",
        className,
      )}
    >
      {children}
    </section>
  );
};
