"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useTheme } from "next-themes";

const screenshots = [
  { id: "dashboard", title: "Dashboard" },
  { id: "steps", title: "12 Steps" },
  { id: "timeline", title: "Timeline" },
  { id: "tasks", title: "Tasks" },
];

function PhoneItem({
  item,
  index,
  progress,
  theme,
}: {
  item: typeof screenshots[0];
  index: number;
  progress: any;
  theme: string;
}) {
  const rotateY = useTransform(
    progress,
    [index - 1, index, index + 1],
    [-45, 0, 45]
  );
  
  const scale = useTransform(
    progress,
    [index - 1, index, index + 1],
    [0.85, 1, 0.85]
  );
  
  const z = useTransform(
    progress,
    [index - 1, index, index + 1],
    [-100, 0, -100]
  );
  
  const opacity = useTransform(
    progress,
    [index - 1, index, index + 1],
    [0.3, 1, 0.3]
  );
  
  const blur = useTransform(
    progress,
    [index - 1, index, index + 1],
    [8, 0, 8]
  );

  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  const src = `/screenshots/${item.id}-${theme}.png`;

  return (
    <motion.div
      style={{
        rotateY,
        scale,
        z,
        opacity,
        filter,
        WebkitBoxReflect: "below 10px linear-gradient(transparent 65%, rgba(255,255,255,0.15))",
      }}
      className="relative w-[250px] h-[520px] transform-style-3d will-change-[transform,opacity,filter]"
    >
      <div className="absolute w-full h-full rounded-[2.8rem] bg-card shadow-[inset_0_0_0_2px_var(--muted-foreground),inset_0_0_0_6px_#000,0_15px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_2px_var(--muted-foreground),inset_0_0_0_6px_#000,0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[84px] h-[24px] bg-black rounded-[100px] z-50 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]"></div>
        <div className="absolute inset-0 z-40 pointer-events-none bg-gradient-to-br from-white/10 to-transparent via-transparent opacity-80 mix-blend-overlay"></div>
        <div className="relative w-[calc(100%-12px)] h-[calc(100%-12px)] m-[6px] rounded-[2.3rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_15px_rgba(0,0,0,1)] bg-background">
          <Image
            src={src}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = mounted && resolvedTheme === "light" ? "light" : "dark";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const stepProgress = useTransform(scrollYProgress, [0, 1], [0, screenshots.length - 1]);
  
  const activeIndex = useTransform(stepProgress, (v) => Math.round(v));
  const springProgress = useSpring(activeIndex, {
    stiffness: 260,
    damping: 32,
    mass: 1,
  });

  // Track position (350px per step: 250 width + 100 gap)
  const trackX = useTransform(springProgress, (v) => -v * 350);


  return (
    <section className="relative w-full bg-background z-10 font-sans">
      <div ref={containerRef} className="relative w-full h-[400vh] snap-y snap-mandatory">
        <div className="absolute inset-0 pointer-events-none">
          {screenshots.map((_, i) => (
            <div key={i} className="h-screen w-full snap-start snap-always" />
          ))}
        </div>

        <div className="sticky top-0 w-full h-screen overflow-hidden bg-background flex flex-col justify-center perspective-[2000px]">
          <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none z-0" />

          <div className="w-full text-center z-30 px-4 mt-16 mb-8 flex-shrink-0">
            <div className="relative h-16 w-full max-w-2xl mx-auto flex justify-center items-center">
              {screenshots.map((item, i) => {
                const opacity = useTransform(springProgress, [i - 0.5, i, i + 0.5], [0, 1, 0]);
                const y = useTransform(springProgress, [i - 0.5, i, i + 0.5], [20, 0, -20]);
                return (
                  <motion.div key={item.id} style={{ opacity, y }} className="absolute w-full text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-silver-matte">
                      {item.title}
                    </h2>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 mb-10 w-full overflow-visible">
            <motion.div
              style={{ x: trackX }}
              className="flex items-center gap-[100px] w-max px-[calc(50vw-125px)] h-full transform-style-3d will-change-transform"
            >
              {screenshots.map((item, i) => (
                <PhoneItem key={item.id} item={item} index={i} progress={springProgress} theme={theme} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

