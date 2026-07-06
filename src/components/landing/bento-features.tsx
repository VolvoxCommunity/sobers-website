"use client";

import { motion } from "motion/react";
import { CheckIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

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

export function BentoFeatures() {
  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6, // Faster entrance
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2, // Faster start
        staggerChildren: 0.08, // Snappier stagger
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Faster individual card entrance
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section
      id="features-section"
      className="relative z-10 w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center bg-background"
    >
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-40"></div>

      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto overflow-hidden z-10">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-silver-matte will-change-transform"
          style={{ willChange: "clip-path, transform" }}
        >
          Own Recovery.
        </motion.h1>
      </div>

      {/* Bento Grid */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] z-10"
      >
        {/* 1. Sponsor-Sponsee Connection */}
        <motion.div
          variants={cardVariants}
          className="bento-card group lg:col-span-2 flex flex-col justify-between p-8"
        >
          <div className="relative w-full h-32 flex items-center justify-center mt-4">
            <div className="absolute w-full flex justify-center items-center">
              <div className="w-16 h-16 rounded-full glass-avatar bg-gradient-to-br from-primary to-primary/80 z-10 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">SP</span>
              </div>
              <svg width="200" height="40" className="mx-[-20px] z-0 overflow-visible">
                <path
                  d="M0,20 Q100,50 200,20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="glow-line text-primary"
                  strokeLinecap="round"
                />
              </svg>
              <div className="w-16 h-16 rounded-full glass-avatar bg-gradient-to-br from-accent to-accent/80 z-10 flex items-center justify-center relative">
                <div className="absolute inset-0 border-2 border-accent rounded-full animate-[pulse-ring_3s_infinite]"></div>
                <span className="text-accent-foreground font-bold text-xl">ME</span>
              </div>
            </div>
          </div>
          <div className="z-20">
            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Sponsor Connection</h3>
            <p className="text-muted-foreground font-light text-sm max-w-md">
              Secure pairing with unique invite codes. Connect instantly and establish accountability in seconds.
            </p>
          </div>
        </motion.div>

        {/* 2. 12-Step Progress (Tall Vertical) */}
        <motion.div
          variants={cardVariants}
          className="bento-card group lg:row-span-2 lg:col-span-1 flex flex-col justify-between p-8"
        >
          <div className="z-20 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">12-Step Progress</h3>
            <p className="text-muted-foreground font-light text-sm">Track your journey sequentially through all 12 steps.</p>
          </div>
          <div className="relative flex-1 flex flex-col justify-start ml-4 mt-4">
            <div className="absolute left-3.5 top-2 bottom-6 w-0.5 bg-secondary rounded-full"></div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-7 h-7 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)] flex items-center justify-center border-2 border-white/20">
                <CheckIcon className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
              </div>
              <span className="ml-4 text-foreground font-semibold text-sm">Step 1: Honesty</span>
            </div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-7 h-7 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)] flex items-center justify-center border-2 border-white/20">
                <CheckIcon className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
              </div>
              <span className="ml-4 text-foreground font-semibold text-sm">Step 2: Hope</span>
            </div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-7 h-7 rounded-full bg-card flex items-center justify-center border-2 border-primary shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              </div>
              <span className="ml-4 text-primary font-bold text-sm">Step 3: Surrender</span>
            </div>
            <div className="flex items-center relative z-10 opacity-40">
              <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center border-2 border-border"></div>
              <span className="ml-4 text-muted-foreground font-semibold text-sm">Step 4: Courage</span>
            </div>
          </div>
        </motion.div>

        {/* 3. Sobriety Tracking */}
        <motion.div
          variants={cardVariants}
          className="bento-card group lg:col-span-1 flex flex-col justify-between p-8"
        >
          <div className="relative w-full flex justify-center mt-2 mb-6 pointer-events-none">
            <div className="relative w-32 h-32 flex items-center justify-center bg-primary/10 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="54" fill="none" stroke="var(--border)" strokeWidth="8" />
                <circle
                  cx="64"
                  cy="64"
                  r="54"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="8"
                  strokeDasharray="339"
                  strokeDashoffset="80"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_8px_var(--primary)]"
                />
              </svg>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-foreground">365</span>
                <span className="text-[8px] uppercase tracking-widest text-muted-foreground font-bold">Days</span>
              </div>
            </div>
          </div>
          <div className="z-20">
            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Sobriety Tracking</h3>
            <p className="text-muted-foreground font-light text-sm">Transparent, honest day counting visualized beautifully.</p>
          </div>
        </motion.div>

        {/* 4. Task Management */}
        <motion.div
          variants={cardVariants}
          className="bento-card group lg:col-span-1 flex flex-col justify-between p-8 bg-gradient-to-br from-card to-background"
        >
          <div className="w-full space-y-3 mt-2 mb-6">
            <div className="widget-depth rounded-xl p-3 flex justify-between items-center group-hover:-translate-y-1 transition-transform">
              <span className="text-sm text-foreground font-medium">Daily Check-in</span>
              <div className="w-10 h-6 bg-primary rounded-full toggle-switch relative flex items-center px-1">
                <div className="w-4 h-4 bg-background rounded-full toggle-knob transform translate-x-4"></div>
              </div>
            </div>
            <div className="widget-depth rounded-xl p-3 flex justify-between items-center opacity-70 group-hover:-translate-y-1 transition-transform delay-75">
              <span className="text-sm text-muted-foreground font-medium">Read Literature</span>
              <div className="w-10 h-6 bg-secondary rounded-full toggle-switch relative flex items-center px-1 border border-border">
                <div className="w-4 h-4 bg-muted-foreground rounded-full toggle-knob"></div>
              </div>
            </div>
          </div>
          <div className="z-20">
            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Task Management</h3>
            <p className="text-muted-foreground font-light text-sm">Sponsors assign tasks. Sponsees complete and add notes.</p>
          </div>
        </motion.div>

        {/* 5. Journey Timeline */}
        <motion.div
          variants={cardVariants}
          className="bento-card group lg:col-span-2 flex flex-col justify-between p-8 overflow-hidden"
        >
          <div className="z-20">
            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Journey Timeline</h3>
            <p className="text-muted-foreground font-light text-sm max-w-md">
              Visualize milestones, relapses, and overall step progress over time.
            </p>
          </div>

          <div className="relative w-full h-32 mt-6 opacity-80 group-hover:opacity-100 transition-opacity">
            {/* Graph SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--success)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--success)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Filled area */}
              <path
                d="M0,90 C50,80 100,20 150,30 C200,40 250,80 300,50 C350,20 400,10 400,10 L400,100 L0,100 Z"
                fill="url(#graphGrad)"
              />
              {/* Stroke */}
              <path
                d="M0,90 C50,80 100,20 150,30 C200,40 250,80 300,50 C350,20 400,10 400,10"
                fill="none"
                stroke="var(--success)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 8px var(--success))" }}
              />
            </svg>

            {/* Dot 1 */}
            <div
              className="absolute w-3 h-3 bg-success rounded-full border-2 border-background"
              style={{
                left: "33.75%",
                top: "29%",
                transform: "translate(-50%,-50%)",
                boxShadow: "0 0 10px var(--success)",
              }}
            ></div>

            {/* Dot 2 */}
            <div
              className="absolute w-3 h-3 bg-success rounded-full border-2 border-background"
              style={{
                left: "56.25%",
                top: "55%",
                transform: "translate(-50%,-50%)",
                boxShadow: "0 0 10px var(--success)",
              }}
            ></div>

            {/* Dot 3 */}
            <div
              className="absolute w-3.5 h-3.5 bg-background rounded-full border-2 border-success"
              style={{
                left: "92.25%",
                top: "19%",
                transform: "translate(-50%,-50%)",
                boxShadow: "0 0 15px var(--foreground)",
              }}
            ></div>
          </div>
        </motion.div>

        {/* 6. Cross-Platform */}
        <motion.div
          variants={cardVariants}
          className="bento-card group lg:col-span-1 flex flex-col justify-between p-8"
        >
          <div className="relative w-full h-24 flex items-center justify-center gap-4 mt-4">
            <div className="w-14 h-14 rounded-2xl widget-depth flex items-center justify-center bg-foreground/5 transform -rotate-6 group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-300">
              <AppleIcon className="w-6 h-6 text-foreground" />
            </div>
            <div className="w-16 h-16 rounded-2xl widget-depth flex items-center justify-center bg-foreground/10 z-10 group-hover:-translate-y-3 transition-all duration-300 shadow-2xl">
              <GooglePlayIcon className="w-8 h-8 text-foreground" />
            </div>
            <div className="w-14 h-14 rounded-2xl widget-depth flex items-center justify-center bg-foreground/5 transform rotate-6 group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-300">
              <ComputerDesktopIcon className="w-6 h-6 text-foreground" />
            </div>
          </div>
          <div className="z-20">
            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Cross-Platform</h3>
            <p className="text-muted-foreground font-light text-sm">Available on iOS, Android, and Web. Syncs everywhere.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
