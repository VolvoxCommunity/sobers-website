import { LegalLayout } from "@/components/legal/legal-layout";

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

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="December 2025">
      <Section title="Introduction">
        <p>
          Sobers (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operated by Volvox, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the &ldquo;Service&rdquo;).
        </p>
        <p className="p-6 bg-card border border-border rounded-2xl italic text-muted-foreground">
          &ldquo;We understand that recovery is a deeply personal journey. That&apos;s why we&apos;ve built Sobers with privacy as a foundational principle. Your sobriety data, personal reflections, and recovery progress are treated with the highest level of care and protection.&rdquo;
        </p>
      </Section>

      <Section title="Information We Collect">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-foreground font-bold text-sm uppercase tracking-widest">Account Information</h4>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Email address <span className="text-[10px] bg-muted px-2 py-0.5 rounded uppercase">Required</span></li>
              <li>Display name (2-30 chars)</li>
              <li>Profile picture</li>
              <li>Timezone preference</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-foreground font-bold text-sm uppercase tracking-widest">Recovery Data</h4>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Sobriety start date</li>
              <li>Slip-up records</li>
              <li>12-step progress</li>
              <li>Personal reflections</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Third-Party Services">
        <div className="space-y-6">
          <div className="p-6 bg-card border border-border rounded-2xl transition-colors hover:bg-muted">
            <h4 className="text-foreground font-bold mb-2">Supabase (Database)</h4>
            <p className="text-sm text-muted-foreground">Stores your account data, recovery progress, tasks, and messages securely with row-level security policies.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl transition-colors hover:bg-muted">
            <h4 className="text-foreground font-bold mb-2">Sentry (Error Monitoring)</h4>
            <p className="text-sm text-muted-foreground">Helps us identify and fix crashes. All sensitive data is automatically scrubbed before any report is sent.</p>
          </div>
        </div>
      </Section>

      <Section title="Data Sharing">
        <p className="text-foreground font-medium">We never sell your data.</p>
        <p>
          Your sobriety information, notes, and personal details are only shared with your connected sponsor or sponsee (milestones and tasks only) and trusted service providers.
        </p>
      </Section>

      <Section title="Data Retention">
        <div className="p-6 bg-destructive/5 border border-destructive/10 rounded-2xl">
          <p className="text-muted-foreground">
            Your data is retained as long as your account is active. When you delete your account, all your personal data is <strong>permanently and irreversibly deleted</strong>.
          </p>
        </div>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us at: 
          <a href="mailto:support@volvox.dev" className="text-primary hover:text-primary/80 ml-2 underline underline-offset-4 font-medium">support@volvox.dev</a>
        </p>
      </Section>
    </LegalLayout>
  );
}
