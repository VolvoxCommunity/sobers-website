"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL } from "./hero";

export const VOLVOX_URL = "https://volvox.dev";
export const SUPPORT_EMAIL = "support@volvox.dev";

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

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

function MagneticButton({ children, className, href, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Giant text animations
  const textY = useTransform(scrollYProgress, [0.8, 1], ["10vh", "0vh"]);
  const textScale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // Content animations
  const contentY = useTransform(scrollYProgress, [0.4, 1], [50, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative z-10 w-full h-8 bg-background rounded-b-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-b border-border -mb-8"></div>

      <div 
        ref={containerRef}
        className="relative h-[100vh] w-full" 
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 w-full h-[100vh] bg-background flex flex-col justify-between overflow-hidden font-sans">
          
          <div className="absolute top-1/2 left-1/2 w-[80vw] h-[60vh] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,var(--primary)_0%,var(--accent)_40%,transparent_70%)] opacity-15 blur-[80px] pointer-events-none z-0 animate-[breathe_8s_ease-in-out_infinite_alternate]"></div>
          <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"></div>

          <motion.div 
            style={{ y: textY, scale: textScale, opacity: textOpacity }}
            className="absolute bottom-[-5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none text-[26vw] leading-[0.75] font-black tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_var(--border)] bg-[linear-gradient(180deg,var(--muted)_0%,transparent_60%)] bg-clip-text"
          >
            SOBERS
          </motion.div>

          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-border bg-background py-4 z-10 -rotate-2 scale-110 shadow-lg dark:shadow-2xl">
            <div className="flex w-max animate-[scroll-marquee_40s_linear_infinite] text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase">
              <div className="flex items-center space-x-12 px-6">
                <span>Accountability Redefined</span> <span className="text-primary/50">✦</span>
                <span>Transparent Tracking</span> <span className="text-accent/50">✦</span>
                <span>12-Step Progress</span> <span className="text-primary/50">✦</span>
                <span>Sponsor Connection</span> <span className="text-accent/50">✦</span>
                <span>Absolute Privacy</span> <span className="text-primary/50">✦</span>
              </div>
              <div className="flex items-center space-x-12 px-6">
                <span>Accountability Redefined</span> <span className="text-primary/50">✦</span>
                <span>Transparent Tracking</span> <span className="text-accent/50">✦</span>
                <span>12-Step Progress</span> <span className="text-primary/50">✦</span>
                <span>Sponsor Connection</span> <span className="text-accent/50">✦</span>
                <span>Absolute Privacy</span> <span className="text-primary/50">✦</span>
              </div>
            </div>
          </div>

          <motion.div 
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 text-center">
              Ready to begin?
            </h2>

            <div className="flex flex-col items-center gap-6 w-full">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton 
                  href={APP_STORE_URL} 
                  className="glass-pill bg-card px-10 py-5 rounded-full text-foreground font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <AppleIcon className="w-7 h-8 transition-transform group-hover:scale-105 text-muted-foreground group-hover:text-foreground" />
                  <div className="text-left font-sans">
                    <div className="text-[9px] md:text-[10px] font-bold tracking-wider text-muted-foreground uppercase mb-[-2px]">Download on the</div>
                    <div className="text-lg md:text-xl font-bold leading-none tracking-tight">App Store</div>
                  </div>
                </MagneticButton>
                <MagneticButton 
                  href={PLAY_STORE_URL} 
                  className="glass-pill bg-card px-10 py-5 rounded-full text-foreground font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <GooglePlayIcon className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:scale-105 text-foreground" />
                  <div className="text-left font-sans">
                    <div className="text-[9px] md:text-[10px] font-bold tracking-wider text-muted-foreground uppercase mb-[-2px]">Get it on</div>
                    <div className="text-lg md:text-xl font-bold leading-none tracking-tight">Google Play</div>
                  </div>
                </MagneticButton>
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
                <MagneticButton href="/privacy" className="glass-pill bg-card px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground">Privacy Policy</MagneticButton>
                <MagneticButton href="/terms" className="glass-pill bg-card px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground">Terms of Service</MagneticButton>
                <MagneticButton href="/support" className="glass-pill bg-card px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground">Support</MagneticButton>
                <MagneticButton href="https://discord.gg/8ahXACdamN" className="glass-pill bg-card px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground flex items-center gap-2 group">
                  <svg className="w-4 h-4 transition-colors group-hover:text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
                  </svg>
                  Discord
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-muted-foreground text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © 2026 Volvox. All rights reserved.
            </div>

            <Link 
              href={VOLVOX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 group border-border bg-card hover:bg-muted transition-colors"
            >
              <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">Crafted with</span>
              <span className="text-[#ef4444] animate-[heartbeat_2s_cubic-bezier(0.25,1,0.5,1)_infinite] text-sm md:text-base inline-block">❤</span>
              <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">by</span>
              <span className="text-foreground font-black text-xs md:text-sm tracking-normal ml-1">Volvox</span>
            </Link>

            <MagneticButton 
              onClick={scrollToTop} 
              className="w-12 h-12 rounded-full glass-pill bg-card flex items-center justify-center text-muted-foreground hover:text-foreground group order-3 cursor-pointer"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
