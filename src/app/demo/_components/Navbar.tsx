// import { UserAvatar } from "@/components/auth/user-avatar";

"use client";

import Logo from "@/components/brand/Logo";
import { CTAButtonRefContext } from "@/components/providers/CTAButttonProvider";
import { Button } from "@/components/ui/button";
import { cn, handleScroll } from "@/lib/utils";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { SocialLinks } from "./SocialLinks";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ctaRef = useContext(CTAButtonRefContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }, // Adjust the threshold as needed
    );

    const currentRef = ctaRef?.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ctaRef]);

  return (
    <header id="navbar" className="sticky inset-y-0 top-0 z-50 w-full border-b">
      <div className="flex items-center justify-between bg-background px-6 py-2 sm:px-8">
        <nav className="flex">
          {/* <MobileSidebar /> */}

          <Logo showTitle={false} className="sm:hidden" />
          <Logo showTitle={true} className="hidden sm:flex" />
        </nav>
        {/* <nav className="xs:flex xs:flex-1 hidden justify-center">
          <NavbarRoutes />
        </nav> */}

        <nav>
          <Button
            asChild
            ref={buttonRef}
            className={cn(isVisible ? "block" : "hidden")}
          >
            <Link href="#inscripciones" onClick={handleScroll}>
              {typeof window !== "undefined" && window?.innerWidth >= 768
                ? "Inscribirme al curso"
                : "Inscripción"}
            </Link>
          </Button>
        </nav>

        <nav className="flex justify-end gap-1 sm:gap-2">
          <SocialLinks />
          {/* <UserAvatar /> */}
        </nav>
      </div>
    </header>
  );
};
