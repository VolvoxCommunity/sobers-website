'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground/10">
      <Navbar />

      <div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-20"></div>

      <main className="relative z-10 w-full px-6 md:px-12 max-w-4xl mx-auto pb-24 mt-32 md:mt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-12">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group mb-8 w-fit"
            >
              <ChevronLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{title}</h1>
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs md:text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="max-w-none space-y-12">{children}</div>
        </motion.div>
      </main>

      <div className="relative mt-24">
        <Footer />
      </div>
    </div>
  );
}
