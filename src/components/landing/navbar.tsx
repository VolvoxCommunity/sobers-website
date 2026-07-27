'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { APP_STORE_URL, PLAY_STORE_URL } from './hero';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [storeUrl, setStoreUrl] = useState(APP_STORE_URL);
  const storeUrlRef = useRef(APP_STORE_URL);

  useEffect(() => {
    // Detect OS for dynamic store routing
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    const isApple =
      /mac|iphone|ipad|ipod/.test(platform) ||
      /mac|iphone|ipad|ipod/.test(userAgent) ||
      (navigator.maxTouchPoints > 1 && /macintosh/.test(userAgent)); // iPadOS

    const detectedUrl = !isApple ? PLAY_STORE_URL : APP_STORE_URL;
    storeUrlRef.current = detectedUrl;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStoreUrl(detectedUrl);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Check if scrolled past top
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide navbar on scroll down, show on scroll up (after a threshold)
    if (latest > 300) {
      if (latest > lastY) {
        setIsHidden(true); // scrolling down
      } else {
        setIsHidden(false); // scrolling up
      }
    } else {
      setIsHidden(false);
    }

    setLastY(latest);
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHidden ? -100 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <motion.nav
          animate={{
            backgroundColor: isScrolled ? 'var(--card-nav-scrolled)' : 'var(--card-nav-idle)',
            backdropFilter: isScrolled ? 'blur(16px)' : 'blur(8px)',
            padding: isScrolled ? '0.5rem 0.5rem 0.5rem 1rem' : '0.75rem 0.75rem 0.75rem 1.5rem',
            boxShadow: isScrolled
              ? '0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 1px var(--border-light), inset 0 -1px 1px rgba(0,0,0,0.4)'
              : '0 0px 0px rgba(0,0,0,0), inset 0 1px 1px var(--border-light), inset 0 -1px 1px rgba(0,0,0,0.2)',
            borderColor: isScrolled ? 'var(--border)' : 'var(--border-muted)',
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between gap-8 rounded-full border border-border"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <div className="relative w-6 h-6 md:w-7 md:h-7 overflow-hidden flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 group-active:scale-95 shadow-sm">
              <Image src="/logo.png" alt="Sobers Logo" fill className="object-contain" />
            </div>
            <span className="text-foreground font-black tracking-tighter uppercase text-lg md:text-xl group-hover:text-muted-foreground transition-colors">
              Sobers
            </span>
          </Link>

          {/* Links & CTA */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-6 mr-4 text-sm font-medium text-muted-foreground">
              <Link href="#features" className="hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#timeline" className="hover:text-foreground transition-colors">
                Timeline
              </Link>
              <Link href="/support" className="hover:text-foreground transition-colors">
                Support
              </Link>
            </div>

            <Link
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-bold tracking-wide transition-transform hover:scale-105 active:scale-95"
            >
              Get App
            </Link>
          </div>
        </motion.nav>
      </motion.div>
    </AnimatePresence>
  );
}
