'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TrophyIcon, ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export function UsageTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 40%', 'end 80%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const titleVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)', y: 28, opacity: 1 },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
        ease: [0.87, 0, 0.13, 1] as const,
        y: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const },
      },
    },
  };

  const nodeVariantsLeft = {
    hidden: { opacity: 0, x: 50, scale: 0.9, rotateY: -10 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { type: 'spring' as const, bounce: 0.4, duration: 1, delay: 0.2 },
    },
  };

  const nodeVariantsRight = {
    hidden: { opacity: 0, x: -50, scale: 0.9, rotateY: 10 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { type: 'spring' as const, bounce: 0.4, duration: 1, delay: 0.2 },
    },
  };

  const dotVariants = (color: string) => ({
    hidden: {
      backgroundColor: 'var(--muted)',
      boxShadow:
        'inset 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 0 0 4px var(--background)',
    },
    visible: {
      backgroundColor: color,
      boxShadow: `0 0 10px ${color}, inset 0 2px 4px rgba(255,255,255,0.4), 0 0 0 4px var(--background)`,
      transition: { duration: 0.4 },
    },
  });

  return (
    <section
      id="timeline-section"
      className="relative w-full bg-background py-32 px-6 md:px-12 flex flex-col items-center"
      ref={containerRef}
    >
      {/* Section Header */}
      <div className="text-center mb-24 max-w-3xl mx-auto overflow-hidden z-10">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-silver-matte will-change-transform"
          style={{ willChange: 'clip-path, transform' }}
        >
          A Living Record.
        </motion.h1>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center pb-32 perspective-[1000px]">
        {/* Background Track */}
        <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-ml-[2px] w-[4px] bg-secondary rounded-full z-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_3px_rgba(0,0,0,1)]"></div>
        {/* Active Glowing Line */}
        <motion.div
          className="absolute top-0 left-[20px] md:left-1/2 md:-ml-[2px] w-[4px] timeline-line z-10"
          style={{ height: lineHeight }}
        ></motion.div>

        {/* Milestone 1: The Commitment (Left on Desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-20%' }}
          className="timeline-row relative w-full flex justify-start md:justify-end md:pr-[50%] mb-24"
        >
          <motion.div
            variants={dotVariants('var(--primary)')}
            className="absolute top-8 left-[16px] md:left-1/2 md:-ml-[6px] w-3 h-3 rounded-full timeline-dot z-20"
          ></motion.div>
          <motion.div
            variants={nodeVariantsLeft}
            className="w-[calc(100%-50px)] ml-[50px] md:ml-0 md:w-5/6 md:mr-10 timeline-node rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full led-blue flex items-center justify-center border border-white/20">
                <span className="text-primary-foreground text-sm font-bold">1</span>
              </div>
              <div>
                <p className="text-[10px] text-primary uppercase tracking-widest font-bold">
                  Day 1
                </p>
                <h3 className="text-foreground text-xl font-bold tracking-tight">The Commitment</h3>
              </div>
            </div>
            <p className="text-muted-foreground font-light text-sm">
              You took the first step. Sponsor connected and initial check-in completed.
            </p>
          </motion.div>
        </motion.div>

        {/* Milestone 2: First Milestone (Right on Desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-20%' }}
          className="timeline-row relative w-full flex justify-start md:justify-start md:pl-[50%] mb-24"
        >
          <motion.div
            variants={dotVariants('var(--success)')}
            className="absolute top-8 left-[16px] md:left-1/2 md:-ml-[6px] w-3 h-3 rounded-full timeline-dot z-20"
          ></motion.div>
          <motion.div
            variants={nodeVariantsRight}
            className="w-[calc(100%-50px)] ml-[50px] md:w-5/6 md:ml-10 timeline-node rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full led-emerald flex items-center justify-center border border-white/20">
                <TrophyIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-[10px] text-success uppercase tracking-widest font-bold">
                  Day 30
                </p>
                <h3 className="text-foreground text-xl font-bold tracking-tight">
                  First Milestone
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground font-light text-sm">
              One month strong. A glowing digital coin added to your vault.
            </p>
          </motion.div>
        </motion.div>

        {/* Milestone 3: Step 4 Completed (Left on Desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-20%' }}
          className="timeline-row relative w-full flex justify-start md:justify-end md:pr-[50%] mb-24"
        >
          <motion.div
            variants={dotVariants('var(--accent)')}
            className="absolute top-8 left-[16px] md:left-1/2 md:-ml-[6px] w-3 h-3 rounded-full timeline-dot z-20"
          ></motion.div>
          <motion.div
            variants={nodeVariantsLeft}
            className="w-[calc(100%-50px)] ml-[50px] md:ml-0 md:w-5/6 md:mr-10 timeline-node rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full led-purple flex items-center justify-center border border-white/20">
                <ShieldCheckIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-[10px] text-accent uppercase tracking-widest font-bold">
                  Step 4
                </p>
                <h3 className="text-foreground text-xl font-bold tracking-tight">
                  Moral Inventory
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground font-light text-sm">
              Task marked complete by your sponsor. Moving forward with courage.
            </p>
          </motion.div>
        </motion.div>

        {/* Milestone 4: Relapse & Support (Right on Desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-20%' }}
          className="timeline-row relative w-full flex justify-start md:justify-start md:pl-[50%]"
        >
          <motion.div
            variants={dotVariants('var(--warning)')}
            className="absolute top-8 left-[16px] md:left-1/2 md:-ml-[6px] w-3 h-3 rounded-full timeline-dot z-20"
          ></motion.div>
          <motion.div
            variants={nodeVariantsRight}
            className="w-[calc(100%-50px)] ml-[50px] md:w-5/6 md:ml-10 timeline-node rounded-3xl p-6 md:p-8 border border-warning/20 bg-gradient-to-b from-card to-background"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full led-amber flex items-center justify-center border border-white/20">
                <ExclamationTriangleIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-[10px] text-warning uppercase tracking-widest font-bold">
                  Day 112
                </p>
                <h3 className="text-foreground text-xl font-bold tracking-tight">
                  Support Activated
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground font-light text-sm">
              Relapse logged. Judgment-free notification sent to sponsor. The journey resets, but
              the experience remains.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
