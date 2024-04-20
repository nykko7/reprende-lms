"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();

  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    (href !== "/dashboard" && pathname?.startsWith(`${href}/`));

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button
      variant={isActive ? "accent" : "ghost"}
      onClick={handleClick}
      type="button"
      className="w-full"
    >
      <div className="flex items-center gap-x-2">
        <Icon
          size={22}
          className={cn("text-muted-foreground", isActive && "text-primary")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto h-full border-2 border-primary opacity-0 transition-all",
          isActive && "opacity-100",
        )}
      />
    </Button>
  );
};

export default SidebarItem;
