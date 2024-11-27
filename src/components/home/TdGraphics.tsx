"use client";
import { cn } from "@/lib/utils";
import React, { useRef, VideoHTMLAttributes } from "react";

const TdGraphics = () => {
  return (
    <>
      <HeroVideoBackground
        videoSrc="/hero-animation.mp4"
        className="z-0"
        controls={false}
      />
    </>
  );
};

interface HeroVideoBackgroundProps
  extends VideoHTMLAttributes<HTMLVideoElement> {
  videoSrc: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
}

const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({
  videoSrc,
  className = "",
  muted = true,
  loop = false,
  ...videoProps
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <video
      ref={videoRef}
      className={cn(
        "absolute top-0 left-0 w-full h-full object-cover",
        className
      )}
      src={videoSrc}
      muted={muted}
      playsInline
      autoPlay
      loop={loop}
      {...videoProps}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default TdGraphics;
