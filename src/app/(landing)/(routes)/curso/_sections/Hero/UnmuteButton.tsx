"use client";

import { Button } from "@/components/ui/button";
import { VolumeX } from "lucide-react";

type UnmuteButtonProps = {
  onUnmute: () => void;
};

export function UnmuteButton({ onUnmute }: UnmuteButtonProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity hover:bg-black/40"
      onClick={(e) => {
        onUnmute();
        e.currentTarget.style.display = "none";
      }}
    >
      <Button className="p-4" size="lg">
        <VolumeX className="mr-2 h-5 w-5" />
        Presiona para activar el audio
      </Button>
    </div>
  );
}
