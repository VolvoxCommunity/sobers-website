import Hero from '@/components/landing/hero';
import { AppShowcase } from '@/components/landing/app-showcase';
import { BentoFeatures } from '@/components/landing/bento-features';
import { UsageTimeline } from '@/components/landing/usage-timeline';
import { FAQ } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { Navbar } from '@/components/landing/navbar';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="features">
        <BentoFeatures />
      </div>
      <div id="timeline">
        <UsageTimeline />
      </div>
      <AppShowcase />
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
