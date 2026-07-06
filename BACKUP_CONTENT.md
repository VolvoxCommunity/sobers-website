# Backup of Content Before Next.js Migration

## LICENSE (MIT)

MIT License

Copyright (c) 2025 Volvox

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## URLs Constants (src/constants/urls.ts)

```typescript
export const SITE_URL = "https://sobers.app";
export const WEB_APP_URL = "https://app.sobers.app";
export const VOLVOX_URL = "https://volvox.dev";
export const APP_STORE_ID = "6755614815";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.volvox.sobers";
export const GITHUB_URL = "https://github.com/VolvoxCommunity/sobers";
export const DISCORD_URL = "https://discord.gg/8ahXACdamN";
export const SUPPORT_EMAIL = "support@volvox.dev";
```

---

## Privacy Policy

Last updated: December 2025

### Introduction
Sobers ("we," "our," or "us"), operated by Volvox, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").

We understand that recovery is a deeply personal journey. That's why we've built Sobers with privacy as a foundational principle. Your sobriety data, personal reflections, and recovery progress are treated with the highest level of care and protection.

### Information We Collect

**Account Information**
- Email address (required for account creation)
- Display name (2-30 characters)
- Profile picture (optional)
- Phone number (optional)
- Bio/description (optional)
- Timezone preference

**Recovery Data**
- Sobriety start date
- Slip-up records (dates and optional personal notes)
- 12-step progress and completion dates
- Personal reflections and step notes

**Activity Data**
- Tasks assigned to or by you
- Task completion notes and status
- Messages exchanged with sponsors/sponsees
- Connection invitations and relationship history

**Automatically Collected Information**
- Device type and operating system
- App version and usage patterns (anonymized)
- Crash reports and error logs (with sensitive data automatically removed)
- General engagement metrics (e.g., features used, session duration)

**What We Don't Collect**
- Location data - we never track your whereabouts
- Health app data - no HealthKit or similar integrations
- Biometric data - no fingerprint or facial recognition data stored
- Payment information - the app is completely free

### Authentication Methods
You can create an account using:
- Email and password
- Google Sign-In
- Apple Sign-In (iOS)

When using third-party sign-in, we only receive your email address and, if you permit, your name. We never receive or store your third-party account password.

### How We Use Your Information
- To provide and maintain the Service
- To enable sponsor-sponsee connections via invite codes
- To sync your data securely across devices
- To track your sobriety milestones and progress
- To facilitate task assignments and messaging
- To improve app stability and fix bugs
- To understand general usage patterns (using privacy-preserving analytics that bucket data rather than expose exact values)

### Third-Party Services
We use trusted third-party services to operate Sobers. These providers are bound by confidentiality agreements and only process data as necessary:

**Supabase (Database)** - Stores your account data, recovery progress, tasks, and messages securely with row-level security policies ensuring you can only access your own data.

**Firebase Analytics (Usage Analytics)** - Helps us understand how the app is used. We use privacy-preserving practices such as bucketed values (e.g., "30-90 days sober" rather than exact dates) to protect your sensitive information.

**Sentry (Error Monitoring)** - Helps us identify and fix crashes. All sensitive data (sobriety dates, messages, notes, email addresses, names) is automatically scrubbed before any error report is sent.

**Expo (App Updates)** - Enables us to deliver bug fixes and improvements without requiring app store updates.

### Data Sharing
**We never sell your data.** Your sobriety information, notes, and personal details are only shared with:
- **Your connected sponsor or sponsee:** Only task assignments, messages you send them, and your sobriety milestone information
- **Service providers:** As described above, under strict data processing agreements
- **Legal requirements:** Only when required by law, such as a valid court order

Your personal notes, step reflections, and slip-up details remain private and are never shared with anyone, including your sponsor.

### Data Security
We implement robust security measures including:
- HTTPS encryption for all data transmission
- Secure token storage using platform-native secure storage (iOS Keychain, Android Keystore)
- Row-level security policies ensuring users can only access their own data
- Automatic scrubbing of sensitive data from error reports and analytics
- Regular security updates and monitoring

### Data Retention
Your data is retained as long as your account is active. When you delete your account:
- All your personal data is permanently deleted
- Your recovery journey, tasks, messages, and connections are removed
- This deletion is irreversible and cannot be undone
- Anonymized analytics data may be retained for service improvement

### Your Rights
You have the right to:
- **Access:** View all your personal data within the app
- **Correction:** Update your profile information at any time
- **Deletion:** Permanently delete your account and all associated data via Settings
- **Disconnect:** End any sponsor/sponsee relationship at any time

To exercise these rights or for any privacy-related requests, contact us at: support@volvox.dev

### Children's Privacy
Sobers is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.

### International Users
If you are accessing the Service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using the Service, you consent to this transfer.

### Changes to This Policy
We may update this Privacy Policy from time to time. We will notify you of significant changes through the App or by other means. The "Last updated" date at the top of this policy indicates when it was last revised. Continued use of the Service after changes constitutes acceptance of the updated policy.

### Contact Us
If you have any questions about this Privacy Policy or our data practices, please contact us at: support@volvox.dev

---

## Terms of Service

Last updated: December 2025

### Agreement to Terms
By downloading, installing, or using Sobers ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access or use the App.

These Terms constitute a legally binding agreement between you and Volvox ("we," "us," or "our") regarding your use of the App.

### Description of Service
Sobers is a free mobile application designed to support individuals in recovery by providing tools for:
- Sobriety date tracking and milestone visualization
- Sponsor-sponsee connections via secure invite codes
- Task assignment and progress tracking
- 12-step program progress and reflections
- Direct messaging between connected users
- Slip-up tracking with recovery restart support

### Important Medical Disclaimer
**Sobers is a support tool, NOT a substitute for professional medical advice, treatment, diagnosis, or therapy.**

- The App does not provide medical, psychiatric, or psychological treatment
- Always seek guidance from qualified health providers for your recovery
- If you are experiencing a medical emergency, call emergency services immediately
- The App is not intended to replace attendance at 12-step meetings, professional counseling, or medical care
- We make no claims about the effectiveness of the App for treating addiction or any medical condition

### User Accounts
When you create an account, you agree to:
- Provide accurate and complete information
- Maintain the security of your account credentials
- Accept responsibility for all activities under your account
- Notify us immediately of any unauthorized access
- Not share your account credentials with others

You may authenticate using email/password, Google Sign-In, or Apple Sign-In. You are responsible for maintaining the security of your chosen authentication method.

### Acceptable Use
You agree NOT to:
- Use the App for any unlawful purpose
- Harass, abuse, threaten, or harm other users
- Impersonate others or provide false information
- Attempt to gain unauthorized access to the App or its systems
- Interfere with or disrupt the App's functionality
- Share explicit, harmful, abusive, or inappropriate content
- Use the App to exploit or harm vulnerable individuals
- Scrape, harvest, or collect user data without authorization
- Reverse engineer, decompile, or disassemble the App
- Use automated systems or bots to access the App

### Sponsor-Sponsee Relationships
Sobers facilitates connections between sponsors and sponsees through invite codes. Please understand:
- **No verification:** We do not verify sponsor qualifications, sobriety claims, or user identities
- **Independent relationships:** Sponsor-sponsee relationships are established independently of the App; we merely provide tools to support existing or new connections
- **No liability:** We are not responsible for advice, guidance, or actions of sponsors or sponsees
- **User responsibility:** You are responsible for your own recovery decisions
- **Disconnection:** Either party may disconnect the relationship at any time through the App
- **Privacy:** Certain information (like personal notes and slip-up details) remains private even from connected sponsors

### User Content
You are solely responsible for all content you create, share, or transmit through the App, including:
- Messages sent to sponsors or sponsees
- Task descriptions and notes
- Step reflections and personal notes
- Profile information

You retain ownership of your content but grant us a limited license to store, transmit, and display it as necessary to provide the Service.

### Account Deletion
You may delete your account at any time through the App's Settings. Please understand:
- **Permanent deletion:** Account deletion is immediate and irreversible
- **Data removal:** All your data including sobriety history, tasks, messages, connections, and personal notes will be permanently deleted
- **No recovery:** We cannot restore deleted accounts or any associated data
- **Confirmation required:** You will be asked to confirm deletion before it occurs

### App Updates
We may provide updates to the App from time to time. Some updates may be delivered automatically over-the-air without requiring an app store download. By using the App, you consent to receiving these automatic updates.

### Intellectual Property
The App and its original content, features, and functionality are owned by Volvox and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works of the App without our express written permission.

### Service Availability
We strive to maintain App availability but cannot guarantee uninterrupted service. The App relies on third-party infrastructure providers, and service may be affected by:
- Scheduled maintenance
- Third-party service outages
- Network connectivity issues
- Force majeure events

We do not guarantee any specific uptime or availability and are not liable for service interruptions.

### Disclaimer of Warranties
THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE SPECIFICALLY DISCLAIM ALL WARRANTIES INCLUDING BUT NOT LIMITED TO:
- MERCHANTABILITY
- FITNESS FOR A PARTICULAR PURPOSE
- NON-INFRINGEMENT
- ACCURACY OR RELIABILITY OF CONTENT
- UNINTERRUPTED OR ERROR-FREE OPERATION

### Limitation of Liability
TO THE MAXIMUM EXTENT PERMITTED BY LAW, VOLVOX AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
- Loss of data or content
- Loss of profits or revenue
- Personal injury or emotional distress
- Relapse or recovery setbacks
- Actions or advice of sponsors, sponsees, or other users
- Service interruptions or data breaches

OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO USE THE APP (WHICH IS ZERO, AS THE APP IS FREE).

### Indemnification
You agree to indemnify and hold harmless Volvox and its affiliates from any claims, damages, losses, or expenses (including reasonable attorney's fees) arising from your use of the App, violation of these Terms, or infringement of any third-party rights.

### Termination
We may terminate or suspend your account immediately, without prior notice, for:
- Breach of these Terms
- Conduct harmful to other users
- Fraudulent or illegal activity
- Extended periods of inactivity
- Any reason at our sole discretion

Upon termination, your right to use the App will cease immediately. Provisions of these Terms that by their nature should survive termination shall survive.

### Changes to Terms
We reserve the right to modify these Terms at any time. We will provide notice of significant changes through the App, by email, or by posting on our website. Continued use of the App after changes constitutes acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the App.

### Governing Law
These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions. Any disputes arising from these Terms or your use of the App shall be resolved in the courts of competent jurisdiction.

### Severability
If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.

### Entire Agreement
These Terms, together with our Privacy Policy, constitute the entire agreement between you and Volvox regarding the use of the App and supersede any prior agreements.

### Contact Us
If you have any questions about these Terms, please contact us at: support@volvox.dev

---

## Support Page

### Quick Help
- **FAQ** - Find quick answers to the most commonly asked questions about Sobers. [View FAQ →]
- **Email Support** - Can't find what you're looking for? Send us an email and we'll get back to you. support@volvox.dev →
- **Discord Community** - Join our Discord server to connect with other users and get real-time help. [Join Discord →]
- **GitHub** - Report bugs, request features, or contribute to the project on GitHub. [View on GitHub →]

### Common Issues

**I can't connect to my sponsor**
Make sure you're entering the exact 8-character invite code provided by your sponsor. Codes are case-sensitive. If the code isn't working, ask your sponsor to generate a new one from their profile settings.

**My sobriety counter is wrong**
You can update your sobriety start date from your profile settings. Go to Profile → Settings → Edit Sobriety Date. This will recalculate your day count.

**How do I reset my account?**
If you need to start fresh, you can delete your account from Settings → Account → Delete Account. Note that this action is permanent and will remove all your data, including your journey history.

**Can I have multiple sponsors?**
Currently, Sobers supports one sponsor-sponsee connection at a time. You can disconnect from your current sponsor and connect to a new one at any time from your profile settings.

### Still need help?
Our team typically responds within 24 hours. We're here to help you succeed in your recovery journey.
[Contact Support]
