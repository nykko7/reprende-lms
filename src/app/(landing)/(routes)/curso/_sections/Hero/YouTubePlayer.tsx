"use client";

import { useState } from "react";
import { UnmuteButton } from "./UnmuteButton";

type YouTubePlayerProps = {
  videoUrl: string;
};

export function YouTubePlayer({ videoUrl }: YouTubePlayerProps) {
  const [isMuted, setIsMuted] = useState(true);

  // Extract video ID from URL
  const videoId = videoUrl.split("/").pop()?.split("?")[0] ?? "";

  const handleUnmute = () => {
    setIsMuted(false);
  };

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&cc_load_policy=0"`;

  return (
    <div className="relative aspect-video w-full max-w-screen-lg overflow-hidden rounded-3xl shadow-[0px_0px_40px_0px] shadow-primary">
      <iframe
        className="h-full w-full"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {isMuted && <UnmuteButton onUnmute={handleUnmute} />}
    </div>
  );
}
