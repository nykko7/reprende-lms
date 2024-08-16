"use client";

import { Button } from "@/components/ui/button";

import { handleScroll } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type CTAButtonProps = {
  children: React.ReactNode;
};

export default function CTAButton({ children }: CTAButtonProps) {
  return (
    <Button
      asChild
      size={"lg"}
      className="border-2 font-bold"
      // variant={"outline"}
    >
      <Link href="#inscripciones" onClick={handleScroll}>
        {children}
      </Link>
    </Button>
  );
}
