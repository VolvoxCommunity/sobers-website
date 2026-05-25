"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";

const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
  </svg>
);

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" fill="currentColor" className={className}>
    <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z" />
  </svg>
);

export const APP_STORE_ID = "6755614815";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.volvox.sobers";

export default function Hero() {
  const [phase, setPhase] = useState<1 | 2>(1);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Snap to phase 2 when scrolled past 100px, snap back when below
          if (scrollY > 100 && phase === 1) {
            setPhase(2);
          } else if (scrollY <= 100 && phase === 2) {
            setPhase(1);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [phase]);

  return (
    <div className="relative w-full h-[175vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-background flex items-center justify-center perspective-[1500px]">
        <div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-50"></div>

      <AnimatePresence mode="popLayout">
        {phase === 2 && (
          <motion.div 
            key="cta-layer"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="gpu-accelerate absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 font-sans"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 tracking-tight text-silver-matte dark:drop-shadow-2xl">
              Start your recovery.
            </h2>
            <p className="text-muted-foreground text-base md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Join thousands of others in the 12-step program and take control of your timeline today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link 
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern-light flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-[1.25rem] group"
              >
                <AppleIcon className="w-7 h-7 md:w-8 md:h-8 transition-transform group-hover:scale-105 text-foreground" />
                <div className="text-left font-sans">
                  <div className="text-[9px] md:text-[10px] font-bold tracking-wider text-muted-foreground uppercase mb-[-2px]">Download on the</div>
                  <div className="text-lg md:text-xl font-bold leading-none tracking-tight">App Store</div>
                </div>
              </Link>
              <Link 
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern-dark flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-[1.25rem] group"
              >
                <GooglePlayIcon className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:scale-105 text-foreground" />
                <div className="text-left font-sans">
                  <div className="text-[9px] md:text-[10px] font-bold tracking-wider text-muted-foreground uppercase mb-[-2px]">Get it on</div>
                  <div className="text-lg md:text-xl font-bold leading-none tracking-tight">Google Play</div>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LAYER 2: HERO CONTENT */}
      <AnimatePresence mode="popLayout">
        {phase === 1 && (
          <motion.div 
            key="hero-layer"
            initial={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.25, filter: "blur(15px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="gpu-accelerate absolute inset-0 z-20 flex items-center justify-center transform-style-3d font-sans"
          >
            <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 items-center gap-3 md:gap-12 lg:gap-8 justify-items-center lg:justify-items-start">
              
              {/* Accountability Text */}
              <motion.div 
                initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="gpu-accelerate order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full"
              >
                <h3 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-silver-matte mb-0 md:mb-4">
                  Accountability, redefined.
                </h3>
                <p className="hidden md:block text-muted-foreground text-lg font-normal leading-relaxed">
                  <span className="text-foreground font-semibold">Sobers</span> empowers sponsors and sponsees in 12-step recovery programs with structured accountability, precise sobriety tracking, and visual timelines.
                </p>
              </motion.div>

              {/* Center Mockup */}
              <div className="order-1 lg:order-2 relative w-full h-[450px] md:h-[600px] flex items-center justify-center z-10 perspective-[1000px] mt-6 md:mt-0">
                <motion.div 
                  initial={{ opacity: 0, y: 150, z: -200, rotateX: 20, rotateY: -15, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, z: 0, rotateX: 0, rotateY: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="gpu-accelerate relative w-[210px] md:w-[280px] h-[430px] md:h-[580px] bg-card rounded-[2rem] md:rounded-[3rem] iphone-bezel flex flex-col overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 screen-glare z-40 pointer-events-none"></div>

                  {/* Hardware Buttons */}
                  <div className="absolute top-[80px] md:top-[120px] -left-[2px] w-[2px] h-[20px] md:h-[25px] hardware-btn rounded-l-md z-0"></div>
                  <div className="absolute top-[115px] md:top-[160px] -left-[2px] w-[2px] h-[35px] md:h-[45px] hardware-btn rounded-l-md z-0"></div>
                  <div className="absolute top-[165px] md:top-[220px] -left-[2px] w-[2px] h-[35px] md:h-[45px] hardware-btn rounded-l-md z-0"></div>
                  <div className="absolute top-[125px] md:top-[170px] -right-[2px] w-[2px] h-[50px] md:h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]"></div>

                  {/* Screen Content */}
                  <div className="relative w-[calc(100%-10px)] md:w-[calc(100%-14px)] h-[calc(100%-10px)] md:h-[calc(100%-14px)] m-[5px] md:m-[7px] bg-background rounded-[1.7rem] md:rounded-[2.5rem] text-foreground overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)]">
                    <Image
                      src={mounted && resolvedTheme === "light" ? "/app-screenshot-light.png" : "/app-screenshot-dark.png"}
                      alt="Sobers App Screenshot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              {/* Sobers Text */}
              <motion.div 
                initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="gpu-accelerate order-2 lg:order-3 flex justify-center lg:justify-end z-20 w-full"
              >
                <h2 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-black uppercase tracking-tighter sobers-glass-text dark:drop-shadow-2xl">
                  Sobers
                </h2>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
