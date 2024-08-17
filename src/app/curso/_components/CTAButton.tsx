"use client";

import { CTAButtonRefContext } from "@/components/providers/CTAButttonProvider";
import { Button, type ButtonProps } from "@/components/ui/button";

import { cn, handleScroll } from "@/lib/utils";
import Link from "next/link";
import React, { useContext } from "react";

export default function CTAButton({
  children,
  className,
  variant,
  isHero,
}: ButtonProps & { isHero?: boolean }) {
  const ctaRef = useContext(CTAButtonRefContext);
  return (
    <Button
      asChild
      size={"lg"}
      className={cn("font-bold", className)}
      variant={variant}
    >
      <Link
        // href="https://wa.me/56944768853?text=Hola!%20Vengo%20desde%20www.reaprende.cl%20y%20me%20gustaría%20consultar%20sobre%20..."
        href="#inscripciones"
        onClick={handleScroll}
        target="_blank"
        ref={isHero ? ctaRef : undefined}
      >
        {children}
      </Link>
    </Button>
  );
}
