import { CTAButtonRefProvider } from "@/components/providers/CTAButttonProvider";
import React from "react";
import { Footer } from "../../components/landing/Footer";
import { Navbar } from "../../components/landing/Navbar";
// import Snowflakes from "@/components/landing/SnowFlakes";
import Link from "next/link";
import { ROUTES } from "../../config/routes";
import { CalendarIcon } from "lucide-react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CTAButtonRefProvider>
      <div className="h-full scroll-smooth selection:bg-primary selection:text-primary-foreground">
        <div className="flex items-center justify-center gap-2 bg-yellow-500 p-2 text-center text-sm text-black xs:p-3 xs:text-base">
          <CalendarIcon className="h-5 w-5" />
          <Link href={ROUTES.LIVE_COURSE} className="hover:underline">
            La próxima generación del curso <strong> en vivo</strong> comienza
            el
            <strong> 05 de febrero 2025</strong>
          </Link>
        </div>
        <Navbar />
        {/* <Snowflakes numberOfSnowflakes={30} /> */}
        {children}
        <Footer />
      </div>
    </CTAButtonRefProvider>
  );
};

export default LandingLayout;
