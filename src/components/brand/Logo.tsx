"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  showTitle?: boolean;
}

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Logo = ({ showTitle = true, className }: LogoProps) => {
  const pathname = usePathname();

  const href = pathname.startsWith("/dashboard") ? "/dashboard" : "/";

  return (
    <Link
      className={cn(
        "flex items-center gap-2.5 font-bold transition-transform duration-300 hover:scale-105",
        className,
      )}
      href={href}
    >
      <Image
        src="/shared/logo.png"
        width={40}
        height={40}
        alt={"Logo Reaprende"}
      />
      {/* Make h2 logo title with beautiful font style*/}
      <h2
        className={cn(
          !showTitle && "hidden",
          "font text-xl md:text-2xl",
          // "font text-xl font-bold md:text-2xl",
          montserrat.className,
        )}
      >
        Reaprende
      </h2>
    </Link>
  );
};

export default Logo;
