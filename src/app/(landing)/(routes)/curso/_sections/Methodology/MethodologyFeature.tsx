"use client";

import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
// import dynamic from "next/dynamic";
import Icon from "@/components/landing/Icon";

type MethodologyFeatureProps = {
  title: string;
  description: string;
  icon: string;
};

export function MethodologyFeature({
  title,
  description,
  icon,
}: MethodologyFeatureProps) {
  // const Icon = dynamic(() =>
  //   import("lucide-react").then((mod) => mod[icon] as LucideIcon),
  // );

  return (
    <div className="flex h-full flex-col space-y-4 p-6">
      <div className="flex items-center space-x-4">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon name={icon} className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="flex-grow text-muted-foreground">{description}</p>
    </div>
  );
}
