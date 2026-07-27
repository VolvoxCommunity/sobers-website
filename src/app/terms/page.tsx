import { LegalLayout } from '@/components/legal/legal-layout';

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

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="December 2025">
      <Section title="Agreement to Terms">
        <p>
          By downloading, installing, or using Sobers (&ldquo;the App&rdquo;), you agree to be bound
          by these Terms of Service (&ldquo;Terms&rdquo;). If you disagree with any part of these
          terms, you may not access or use the App.
        </p>
      </Section>

      <Section title="Medical Disclaimer">
        <div className="p-8 bg-warning/5 border border-warning/20 rounded-3xl">
          <p className="text-warning font-bold mb-4 uppercase tracking-widest text-xs">
            Critical Information
          </p>
          <p className="text-xl text-foreground font-medium mb-4 italic">
            &ldquo;Sobers is a support tool, NOT a substitute for professional medical advice,
            treatment, diagnosis, or therapy.&rdquo;
          </p>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="text-warning mt-1.5 w-1 h-1 rounded-full bg-current shrink-0"></span>
              The App does not provide medical, psychiatric, or psychological treatment.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-warning mt-1.5 w-1 h-1 rounded-full bg-current shrink-0"></span>
              If you are experiencing a medical emergency, call emergency services immediately.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="User Accounts">
        <p>
          When you create an account, you agree to provide accurate and complete information. You
          are solely responsible for maintaining the security of your account credentials and for
          all activities that occur under your account.
        </p>
      </Section>

      <Section title="Acceptable Use">
        <div className="bg-card border border-border rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive/50"></span> No harassment or
            abuse
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive/50"></span> No unlawful
            purposes
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive/50"></span> No unauthorized
            access
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive/50"></span> No scraping or
            harvesting
          </div>
        </div>
      </Section>

      <Section title="Relationships">
        <p>
          Sobers facilitates connections between sponsors and sponsees. We do not verify
          qualifications or identities. These relationships are independent of the App, and we are
          not liable for any advice or actions taken within them.
        </p>
      </Section>

      <Section title="Account Deletion">
        <p>
          Account deletion is immediate and irreversible. All your data including sobriety history,
          tasks, messages, and personal notes will be permanently removed from our systems.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold mb-4">
          Legal Notice
        </p>
        <p className="text-muted-foreground">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, VOLVOX SHALL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE APP. OUR TOTAL LIABILITY
          SHALL NOT EXCEED ZERO.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have any questions about these Terms, please contact us at:
          <a
            href="mailto:support@volvox.dev"
            className="text-primary hover:text-primary/80 ml-2 underline underline-offset-4 font-medium"
          >
            support@volvox.dev
          </a>
        </p>
      </Section>
    </LegalLayout>
  );
}
