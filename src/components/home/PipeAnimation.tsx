"use client";
import React, { useEffect, useRef, useState } from "react";

interface CanvasAnimationProps {
  // Optional configuration props
  pipeCount?: number;
  baseSpeed?: number;
  baseHue?: number;
  rangeHue?: number;
  backgroundColor?: string;

  // Control props
  isPlaying?: boolean;
}

const CanvasAnimation: React.FC<CanvasAnimationProps> = ({
  pipeCount = 5,
  baseSpeed = 0.1,
  baseHue = 184,
  rangeHue = 80,
  backgroundColor = "hsla(0,0%,0%,1)",
  isPlaying = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasARef = useRef<HTMLCanvasElement>(null);
  const canvasBRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  const resetAnimation = () => {
    if (!canvasARef.current || !canvasBRef.current) return;

    // Cancel any existing animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Reset canvas
    const canvasA = canvasARef.current;
    const canvasB = canvasBRef.current;
    const ctxA = canvasA.getContext("2d")!;
    const ctxB = canvasB.getContext("2d")!;

    ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
    ctxB.clearRect(0, 0, canvasB.width, canvasB.height);

    // Math constants and utility functions
    const { PI, cos, sin, abs, round, random } = Math;
    const HALF_PI = 0.5 * PI;
    const TAU = 2 * PI;
    const TO_RAD = PI / 90;
    const rand = (n: number) => n * random();
    const fadeInOut = (t: number, m: number) => {
      let hm = 0.5 * m;
      return abs(((t + hm) % m) - hm) / hm;
    };

    const pipePropCount = 40;
    const pipePropsLength = pipeCount * pipePropCount;
    const turnCount = 2;
    const turnAmount = (90 / turnCount) * TO_RAD;
    const turnChanceRange = 50;
    const rangeSpeed = 5;
    const baseTTL = 100;
    const rangeTTL = 400;
    const baseWidth = 4;
    const rangeWidth = 4;

    let tick = 0;
    let pipeProps: Float32Array;
    let center: number[] = [];

    function initPipes() {
      pipeProps = new Float32Array(pipePropsLength);

      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        initPipe(i);
      }
    }

    function initPipe(i: number) {
      const x = rand(canvasA.width);
      const y = center[1];
      const direction = round(rand(1)) ? HALF_PI : TAU - HALF_PI;
      const speed = baseSpeed + rand(rangeSpeed);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const width = baseWidth + rand(rangeWidth);
      const hue = baseHue + rand(rangeHue);

      pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
    }

    function updatePipes() {
      tick++;

      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        updatePipe(i);
      }
    }

    function updatePipe(i: number) {
      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i;

      let x = pipeProps[i];
      let y = pipeProps[i2];
      let direction = pipeProps[i3];
      const speed = pipeProps[i4];
      let life = pipeProps[i5];
      const ttl = pipeProps[i6];
      const width = pipeProps[i7];
      const hue = pipeProps[i8];

      drawPipe(ctxA, x, y, life, ttl, width, hue);

      life++;
      x += cos(direction) * speed;
      y += sin(direction) * speed;
      const turnChance =
        !(tick % round(rand(turnChanceRange))) &&
        (!(round(x) % 6) || !(round(y) % 6));
      const turnBias = round(rand(1)) ? -1 : 1;
      direction += turnChance ? turnAmount * turnBias : 0;

      pipeProps[i] = x;
      pipeProps[i2] = y;
      pipeProps[i3] = direction;
      pipeProps[i5] = life;

      checkBounds(x, y, canvasA.width, canvasA.height);

      // Reset pipe if life exceeds TTL
      if (life > ttl) {
        initPipe(i);
      }
    }

    function drawPipe(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      life: number,
      ttl: number,
      width: number,
      hue: number
    ) {
      ctx.save();
      ctx.strokeStyle = `hsla(${hue},100%,50%,${fadeInOut(life, ttl) * 0.125})`;
      ctx.beginPath();
      ctx.arc(x, y, width, 0, TAU);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }

    function checkBounds(x: number, y: number, width: number, height: number) {
      if (x > width) x = 0;
      if (x < 0) x = width;
      if (y > height) y = 0;
      if (y < 0) y = height;
    }

    function resize() {
      const { innerWidth, innerHeight } = window;

      canvasA.width = innerWidth;
      canvasA.height = innerHeight;

      ctxA.drawImage(canvasB, 0, 0);

      canvasB.width = innerWidth;
      canvasB.height = innerHeight;

      ctxB.drawImage(canvasA, 0, 0);
      //drawing position
      center[0] = 0.5 * canvasA.width;
      center[1] = 0.5 * canvasA.height;
    }

    function render() {
      ctxB.save();
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasB.width, canvasB.height);
      ctxB.restore();

      ctxB.save();
      ctxB.filter = "blur(12px)";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();

      ctxB.save();
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    }

    function draw() {
      if (!isPlaying) return;

      updatePipes();
      render();
      animationFrameRef.current = requestAnimationFrame(draw);
    }

    // Initial setup
    resize();
    initPipes();
    draw();

    // Add resize event listener
    window.addEventListener("resize", resize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  };

  useEffect(() => {
    const cleanup = resetAnimation();
    return cleanup;
  }, [pipeCount, baseSpeed, baseHue, rangeHue, backgroundColor, isPlaying]);

  // Optional method to manually reset or restart animation
  const restartAnimation = () => {
    setIsAnimating(true);
    resetAnimation();
  };

  // Optional method to pause animation
  // const pauseAnimation = () => {
  //   setIsAnimating(false);
  //   if (animationFrameRef.current) {
  //     cancelAnimationFrame(animationFrameRef.current);
  //   }
  // };
  window.addEventListener("resize", () => {
    if (isAnimating) {
      resetAnimation();
    }
  });
  useEffect(() => {
    // Initial setup and start of animation
    restartAnimation();

    const intervalId = setInterval(() => {
      restartAnimation();
    }, 30000); // Reset every 15 seconds

    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [pipeCount, baseSpeed, baseHue, rangeHue, backgroundColor, isPlaying]);
  return (
    <div ref={containerRef} className="w-full h-full absolute">
      <canvas
        ref={canvasARef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        }}
      />
      <canvas
        ref={canvasBRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
};

export default CanvasAnimation;
