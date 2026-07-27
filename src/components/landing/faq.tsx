'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Is Sobers free?',
    answer:
      'Completely free. No ads, no premium tiers, no paywalls. Recovery tools should be accessible to everyone.',
  },
  {
    question: 'How do I connect with my sponsor?',
    answer:
      'Your sponsor generates a unique 8-character invite code from their profile. Enter it in your app to connect instantly.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Your sobriety data and personal notes are only visible to you and your connected sponsor. We use bank-level encryption and never share your information.',
  },
  {
    question: 'Can I be both a sponsor and a sponsee?',
    answer:
      'Absolutely. No role restrictions—you can guide others while receiving guidance yourself.',
  },
  {
    question: 'What happens if I relapse?',
    answer:
      "Recovery isn't a straight line. Document relapses honestly—your counter resets but your entire journey history is preserved. No shame, no judgment.",
  },
  {
    question: 'What 12-step programs does the app support?',
    answer:
      "All of them. AA, NA, CA, OA, GA—if it has 12 steps and accountability partners, we've got you covered.",
  },
];

function FAQItem({
  item,
  index,
  isOpen,
  toggleOpen,
}: {
  item: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div
        className={`w-full overflow-hidden transition-colors duration-300 rounded-3xl border border-border bg-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] hover:bg-muted ${isOpen ? 'bg-muted' : ''}`}
      >
        <button
          onClick={toggleOpen}
          className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none"
        >
          <span className="text-base md:text-lg font-medium text-foreground tracking-wide">
            {item.question}
          </span>
          <div className="flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center rounded-full bg-background border border-border">
            <motion.svg
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-muted-foreground"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-32 px-6 md:px-12 flex flex-col items-center justify-center bg-background z-10">
      {/* Background ambient glow matching the aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary)_0%,transparent_50%)] opacity-[0.03] pointer-events-none"></div>

      <div className="text-center mb-16 max-w-3xl mx-auto z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-silver-matte"
        >
          Questions?
        </motion.h2>
      </div>

      <div className="w-full max-w-3xl mx-auto space-y-4 z-10">
        {faqs.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
