"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { PLAY_STORE_URL } from "./hero";

export function AndroidSmartBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on Android
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = /android/.test(userAgent);
    
    // Check if user previously dismissed
    const dismissed = sessionStorage.getItem("sobers-banner-dismissed");

    if (isAndroid && !dismissed) {
      // Small delay so it pops up after initial render
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("sobers-banner-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-card border-b border-border p-3 flex items-center shadow-2xl"
        >
          <button 
            onClick={handleDismiss}
            className="p-2 mr-2 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1l12 12m0-12L1 13" />
            </svg>
          </button>
          
          <Image src="/logo.png" alt="Sobers" width={40} height={40} className="w-10 h-10 rounded-lg shadow-sm" />
          
          <div className="ml-3 flex-1">
            <div className="text-foreground font-bold text-sm leading-tight">Sobers</div>
            <div className="text-muted-foreground text-xs">Volvox</div>
            <div className="text-muted-foreground text-[10px] mt-0.5">FREE - In Google Play</div>
          </div>
          
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold text-sm px-4 py-1.5"
            onClick={handleDismiss}
          >
            VIEW
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
