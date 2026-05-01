"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import { Footer } from "@/components/landing/footer";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground/10">
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-20"></div>
      
      {/* Ambient background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none z-0"></div>

      <nav className="relative z-50 w-full px-6 py-8 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ChevronLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium tracking-wide uppercase">Back to Home</span>
        </Link>
        <Link href="/" className="text-xl font-black tracking-tighter uppercase text-foreground">Sobers</Link>
      </nav>

      <main className="relative z-10 w-full px-6 md:px-12 max-w-4xl mx-auto pb-24 mt-12 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-glow">{title}</h1>
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs md:text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="max-w-none space-y-12">
            {children}
          </div>
        </motion.div>
      </main>

      <div className="relative mt-24">
        <Footer />
      </div>
    </div>
  );
}
