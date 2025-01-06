"use client";

import { motion } from "framer-motion";
import Icon from "@/components/landing/Icon";

export interface MethodologyFeatureProps {
  title: string;
  description: string;
  icon: string;
}

export function MethodologyFeature({
  title,
  description,
  icon,
}: MethodologyFeatureProps) {
  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 p-3">
        <Icon name={icon} className="h-8 w-8 text-white" />
      </div>
      <div className="flex flex-grow flex-col justify-center text-center">
        <h3 className="text-xl font-medium text-foreground">{title}</h3>
        <p className="mt-2 text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
