import React from "react";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {/* <Snowflakes numberOfSnowflakes={30} /> */}
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
