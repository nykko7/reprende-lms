import { cn } from "@/lib/utils";

export const SectionWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto my-20 w-full max-w-screen-xl px-4 sm:px-6  lg:px-8 ",
        className,
      )}
    >
      {children}
    </div>
  );
};
