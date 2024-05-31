import { Button } from "@/components/ui/button";
import Link from "next/link";

export const InscriptionBannerSection = () => {
  return (
    <section className="align center group my-0 flex flex-col justify-center gap-4 bg-primary/60 py-12 text-center text-primary-foreground">
      <h2 className="text-3xl font-bold">
        ¡Inscríbete ahora y comienza a{" "}
        <span className="relative z-10 text-primary-foreground">
          reaprender
          <div className="absolute inset-x-0 bottom-[2px] -z-10 h-[3.5px] w-full origin-left scale-x-0 rounded bg-gradient-to-r from-transparent via-secondary/80 to-secondary opacity-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-80" />
          <div className="absolute inset-x-0 -bottom-[4px] h-1.5 origin-left scale-x-0 rounded bg-gradient-to-r from-transparent via-secondary/80 to-secondary opacity-0 blur-sm transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-80" />
        </span>
        !
      </h2>

      <div className="flex justify-center">
        <Button asChild size={"lg"} variant={"outline"}>
          <Link href="#inscripciones">¡Quiero reaprender!</Link>
        </Button>
      </div>
    </section>
  );
};
