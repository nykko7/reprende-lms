import { cn } from "@/lib/utils";

export const SectionWrapper = ({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className={cn(
        "container mx-auto my-20 max-w-screen-xl px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </section>
  );
};
