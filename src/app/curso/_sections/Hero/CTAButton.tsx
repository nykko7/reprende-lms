"use client";

import { CTAButtonRefContext } from "@/components/providers/CTAButttonProvider";
import { Button } from "@/components/ui/button";

import { handleScroll } from "@/lib/utils";
import Link from "next/link";
import React, { useContext } from "react";

type CTAButtonProps = {
  children: React.ReactNode;
};

export default function CTAButton({ children }: CTAButtonProps) {
  const ctaRef = useContext(CTAButtonRefContext);
  return (
    <Button asChild size={"lg"} className="z-20 font-bold" variant={"outline"}>
      <Link
        // href="https://wa.me/56944768853?text=Hola!%20Vengo%20desde%20www.reaprende.cl%20y%20me%20gustaría%20consultar%20sobre%20..."
        href="#inscripciones"
        onClick={handleScroll}
        target="_blank"
        ref={ctaRef}
      >
        {children}
      </Link>
    </Button>
  );
}
