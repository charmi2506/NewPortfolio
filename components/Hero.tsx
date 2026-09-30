"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 64;
const CHARACTER_X = 0.51;
const CHARACTER_Y = 0.51;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetFrame = useRef(0);
  const currentFrame = useRef(0);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [framesReady, setFramesReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const images: HTMLImageElement[] = [];
    let raf = 0;
    let mounted = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFallback = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.fillStyle = "#ed0d07";
      ctx.fillRect(0, 0, w, h);
    };

    const loadFrames = async () => {
      const promises = Array.from({ length: FRAME_COUNT }, (_, i) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.decoding = "async";
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = `/frames/frame-${String(i).padStart(2, "0")}.webp`;
        })
      );

      try {
        const result = await Promise.all(promises);
        if (!mounted) return;
        images.push(...result);
        setFramesReady(true);
      } catch {
        if (mounted) setFramesReady(false);
      }
    };

    const drawFrame = (img: HTMLImageElement) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.fillStyle = "#ed0d07";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    };

    const animate = () => {
      const delta = targetFrame.current - currentFrame.current;
      currentFrame.current += delta * 0.24;

      if (images.length === FRAME_COUNT) {
        const index = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(currentFrame.current)));
        drawFrame(images[index]);
      } else {
        drawFallback();
      }

      raf = requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      const dot = cursorDotRef.current;
      const ring = cursorRingRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      if (ring) {
        ring.style.setProperty("--cursor-x", `${event.clientX}px`);
        ring.style.setProperty("--cursor-y", `${event.clientY}px`);
      }

      const cx = window.innerWidth * CHARACTER_X;
      const cy = window.innerHeight * CHARACTER_Y;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const distance = Math.hypot(dx, dy);
      const deadzone = Math.min(window.innerWidth, window.innerHeight) * 0.11;

      if (distance < deadzone) {
        targetFrame.current = 0;
        return;
      }

      // Convert screen coordinates to clockwise angle from the UP direction.
      const angle = (Math.atan2(dx, -dy) + Math.PI * 2) % (Math.PI * 2);
      // Frame 0 is the neutral pose; frames 1–63 follow the circular direction sequence.
      targetFrame.current = 1 + (angle / (Math.PI * 2)) * (FRAME_COUNT - 2);
    };

    const onPointerLeave = () => {
      targetFrame.current = 0;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    drawFallback();
    loadFrames();
    animate();

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-overlay" />
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={cursorRingRef} className="cursor-ring" aria-hidden="true" />

      <nav className="nav-pill" aria-label="Main navigation">
        <a href="#projects">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <div className="hero-copy">
        <p className="eyebrow">AI &amp; ML STUDENT · FULL-STACK DEVELOPER</p>
        <h1>
          Hi, I&apos;m
          <span>Charmi</span>
        </h1>
        <p className="hero-bio">
          I build polished web experiences, real-time systems and practical AI-powered
          applications with modern frontend and backend technologies.
        </p>
        <div className="hero-actions">
          <a className="btn btn-light" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume <span>↗</span>
          </a>
          <a className="btn btn-glass" href="#contact">Let&apos;s Talk</a>
        </div>
      </div>

      <div className="scroll-note">
        {framesReady ? "MOVE YOUR CURSOR · SHE&apos;LL FOLLOW" : "LOADING · MOVE YOUR CURSOR"}
      </div>
    </section>
  );
}
