"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Sparkles, Code2, Globe } from "lucide-react";

export function InteractiveWindow() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate percentage from center of screen (-0.5 to 0.5)
      const xPct = (e.clientX / width) - 0.5;
      const yPct = (e.clientY / height) - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    const handleGlobalMouseLeave = (e: MouseEvent) => {
      if (e.relatedTarget === null) {
        // Mouse left the viewport completely
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseout", handleGlobalMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseout", handleGlobalMouseLeave);
    };
  }, [x, y]);

  return (
    <div className="[perspective:1000px] flex items-center justify-center p-4">
      <motion.div
        ref={ref}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-xl aspect-[16/10] rounded-2xl border border-white/20 bg-background/60 backdrop-blur-xl shadow-[0_20px_60px_-15px_var(--color-primary)] transition-[box-shadow] duration-500"
      >
        {/* Inner flat container for clipping background/header cleanly */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl z-0">
          {/* Browser Header */}
          <div className="absolute top-0 w-full h-12 border-b border-border/50 glass flex items-center px-4 gap-2 z-20">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="mx-auto flex items-center gap-2 bg-black/10 dark:bg-white/5 rounded-md px-4 py-1.5 text-xs text-muted-foreground mr-16">
              <Globe size={14} /> example.com
            </div>
          </div>
        </div>

        {/* Browser Content container popping out slightly in 3D */}
        <div className="absolute inset-0 pt-12 px-6 pb-6 flex flex-col gap-4 z-10 pointer-events-none" style={{ transform: "translateZ(40px)" }}>
            {/* Header Mockup */}
            <div className="w-full flex justify-between items-center mt-4">
                <div className="w-32 h-6 rounded-md bg-primary/20 animate-pulse" />
                <div className="flex gap-2">
                    <div className="w-10 h-6 rounded-full bg-primary/10" />
                    <div className="w-16 h-6 rounded-full bg-primary" />
                </div>
            </div>
            
            {/* Hero Mockup */}
            <div className="w-[80%] h-10 rounded-lg bg-foreground/10 mt-6" />
            <div className="w-[60%] h-10 rounded-lg bg-foreground/10 mb-4" />
            
            <div className="w-full flex-1 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)]" />
                <Code2 size={64} className="text-primary/50" />
            </div>
        </div>
        
        {/* Floating badge for extreme 3D effect */}
        <motion.div 
            style={{ transform: "translateZ(80px)" }}
            className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-6 bg-background/80 backdrop-blur-xl border border-primary/30 p-4 rounded-xl shadow-[0_30px_60px_-15px_var(--color-primary)] flex items-center gap-3 z-30 pointer-events-none"
        >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Sparkles size={24} />
            </div>
            <div>
                <p className="text-sm md:text-base font-bold text-foreground tracking-tight">Premium Impact</p>
                <p className="text-xs md:text-sm text-muted-foreground">+245% Conversion</p>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
