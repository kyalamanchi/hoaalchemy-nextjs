import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | HOA Alchemy',
  description: 'HOA Alchemy\'s Privacy Policy explains how we collect, use, and protect your personal information and community data.',
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you create an account, use our services, or communicate with us. This includes:

• Account information: name, email address, phone number, company name, and billing information
• Community data: homeowner names, unit addresses, payment records, violation history, and other HOA-related data you input into the platform
• Usage data: how you interact with our platform, features used, pages visited, and session duration
• Device and technical data: IP address, browser type, operating system, and device identifiers
• Communications: support tickets, emails, and chat messages you send us`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Provide, operate, and improve HOA Alchemy services
• Process payments and send billing communications
• Send notifications, announcements, and account-related messages
• Respond to support requests and inquiries
• Analyze usage patterns to improve platform performance
• Comply with legal obligations and enforce our terms
• Detect and prevent fraud, abuse, and security incidents`,
  },
  {
    title: '3. Sharing of Information',
    content: `We do not sell your personal data. We may share your information with:

• Service providers: third-party vendors who help us deliver our services (e.g., payment processors like Forte, SMS providers like Twilio, and cloud infrastructure providers). These vendors are contractually obligated to protect your data.
• Legal compliance: when required by law, court order, or governmental authority
• Business transfers: in connection with a merger, acquisition, or sale of all or substantially all of our assets
• With your consent: for any other purpose with your explicit agreement

Community data you upload (such as homeowner records and financial information) is stored exclusively for use within your association's account and is never shared with other customers.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures to protect your data, including:

• TLS encryption for all data in transit
• AES-256 encryption for data at rest
• Role-based access controls and audit logging
• Regular security assessments and penetration testing
• SOC 2-aligned infrastructure and practices

No security system is impenetrable. In the event of a data breach affecting your information, we will notify you as required by applicable law.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your account data for as long as your subscription is active, plus a 90-day grace period after cancellation to allow data export. After that period, data is permanently deleted from our systems.

Financial transaction records may be retained for up to 7 years to comply with accounting and tax regulations. Anonymized usage data may be retained indefinitely for platform analytics.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal data:

• Access: request a copy of the personal data we hold about you
• Correction: request correction of inaccurate or incomplete information
• Deletion: request deletion of your personal data (subject to legal retention obligations)
• Portability: request an export of your data in a machine-readable format
• Objection: object to certain processing activities

To exercise any of these rights, contact us at privacy@hoaalchemy.com. We will respond within 30 days.`,
  },
  {
    title: '7. Cookies and Tracking',
    content: `HOA Alchemy uses cookies and similar technologies to:

• Keep you logged in during your session
• Remember your preferences and settings
• Analyze platform usage and performance (using privacy-respecting analytics tools)

We do not use third-party advertising cookies or sell browsing data to advertisers. You may disable cookies in your browser settings, but some platform features may not function properly without them.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `HOA Alchemy is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately at privacy@hoaalchemy.com.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. When we make significant changes, we will notify you via email or a prominent notice on the platform. Your continued use of HOA Alchemy after such changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have questions, concerns, or requests related to this Privacy Policy, please contact us:

HOA Alchemy, Inc.
Email: privacy@hoaalchemy.com
Website: www.hoaalchemy.com/contact`,
  },
];

export default function Privacy() {
  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #f8f5ff 0%, #ede0ff 100%)', padding: '100px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <span className="feature-badge">Legal</span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1a1a1a', marginBottom: 12 }}>Privacy Policy</h1>
          <p style={{ color: '#666', fontSize: '1rem', maxWidth: 540, margin: '0 auto' }}>
            Last updated: April 1, 2026 &nbsp;·&nbsp; Effective: April 1, 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '70px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 40 }}>
              HOA Alchemy, Inc. ("HOA Alchemy," "we," "us," or "our") is committed to protecting your privacy and the privacy of the communities that trust us with their data. This Privacy Policy describes how we collect, use, disclose, and protect your information when you use our platform and services at hoaalchemy.com.
            </p>

            {sections.map(sec => (
              <div key={sec.title} style={{ marginBottom: 44 }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#6b2fa0', marginBottom: 14 }}>{sec.title}</h2>
                <div style={{ fontSize: '0.97rem', color: '#444', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                  {sec.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
