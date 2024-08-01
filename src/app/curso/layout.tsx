import { CTAButtonRefProvider } from "@/components/providers/CTAButttonProvider";
import React from "react";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CTAButtonRefProvider>
      <div className="h-full selection:bg-primary selection:text-primary-foreground">
        <div className="bg-yellow-500 p-2 text-center text-sm text-black xs:p-3 xs:text-base">
          La proxima generación del curso <strong> en vivo</strong> comienza el{" "}
          <strong>Sábado 03 de Agosto</strong>. Quedan los{" "}
          <strong>últimos cupos</strong>
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
