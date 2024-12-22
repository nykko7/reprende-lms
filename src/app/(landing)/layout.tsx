import { CTAButtonRefProvider } from "@/components/providers/CTAButttonProvider";
import React from "react";
import { Footer } from "../../components/landing/Footer";
import { Navbar } from "../../components/landing/Navbar";
import Snowflakes from "@/components/landing/SnowFlakes";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CTAButtonRefProvider>
      <div className="h-full selection:bg-primary selection:text-primary-foreground">
        <div className="bg-yellow-500 p-2 text-center text-sm text-black xs:p-3 xs:text-base">
          La próxima generación del curso <strong> en vivo</strong> comienza el
          <strong> 05 de febrero</strong>.
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
