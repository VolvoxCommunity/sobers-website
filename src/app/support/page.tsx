import { LegalLayout } from "@/components/legal/legal-layout";
import { SUPPORT_EMAIL } from "@/components/landing/footer";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="group">
      <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight flex items-center gap-3">
        <span className="w-8 h-[1px] bg-primary/50 group-hover:w-12 transition-all duration-500"></span>
        {title}
      </h3>
      <div className="text-muted-foreground leading-relaxed text-lg space-y-4 pl-11">
        {children}
      </div>
    </section>
  );
}

function HelpCard({ title, description, link, linkText }: { title: string; description: string; link: string; linkText: string }) {
  return (
    <div className="p-6 bg-card border border-border rounded-2xl transition-all hover:bg-muted group">
      <h4 className="text-foreground font-bold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <a 
        href={link} 
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-primary/80 transition-colors flex items-center gap-1"
      >
        {linkText} <span className="text-[10px]">→</span>
      </a>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="space-y-2">
      <h4 className="text-foreground font-bold text-lg">{question}</h4>
      <p className="text-muted-foreground text-base">{answer}</p>
    </div>
  );
}

export default function SupportPage() {
  return (
    <LegalLayout title="Support Center" lastUpdated="April 2026">
      <Section title="Quick Help">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <HelpCard 
            title="FAQ" 
            description="Find quick answers to the most commonly asked questions about Sobers." 
            link="#faq" 
            linkText="View FAQ" 
          />
          <HelpCard 
            title="Email Support" 
            description="Can't find what you're looking for? Send us an email and we'll get back to you." 
            link={`mailto:${SUPPORT_EMAIL}`} 
            linkText="Email Us" 
          />
          <HelpCard 
            title="Discord Community" 
            description="Join our Discord server to connect with other users and get real-time help." 
            link="https://discord.gg/8ahXACdamN" 
            linkText="Join Discord" 
          />
          <HelpCard 
            title="GitHub" 
            description="Report bugs, request features, or contribute to the project on GitHub." 
            link="https://github.com/VolvoxCommunity/sobers" 
            linkText="View on GitHub" 
          />
        </div>
      </Section>

      <Section title="Common Issues">
        <div id="faq" className="space-y-12 mt-8">
          <FAQItem 
            question="I can't connect to my sponsor" 
            answer="Make sure you're entering the exact 8-character invite code provided by your sponsor. Codes are case-sensitive. If the code isn't working, ask your sponsor to generate a new one from their profile settings." 
          />
          <FAQItem 
            question="My sobriety counter is wrong" 
            answer="You can update your sobriety start date from your profile settings. Go to Profile → Settings → Edit Sobriety Date. This will recalculate your day count." 
          />
          <FAQItem 
            question="How do I reset my account?" 
            answer="If you need to start fresh, you can delete your account from Settings → Account → Delete Account. Note that this action is permanent and will remove all your data, including your journey history." 
          />
          <FAQItem 
            question="Can I have multiple sponsors?" 
            answer="Currently, Sobers supports one sponsor-sponsee connection at a time. You can disconnect from your current sponsor and connect to a new one at any time from your profile settings." 
          />
        </div>
      </Section>

      <Section title="Still need help?">
        <div className="p-8 bg-primary/5 border border-primary/10 rounded-3xl text-center">
          <p className="text-xl text-foreground font-medium mb-6">
            Our team typically responds within 24 hours. We&apos;re here to help you succeed in your recovery journey.
          </p>
          <a 
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-block bg-foreground text-background font-bold px-8 py-4 rounded-2xl hover:bg-foreground/80 transition-colors tracking-tight"
          >
            Contact Support
          </a>
        </div>
      </Section>
    </LegalLayout>
  );
}
