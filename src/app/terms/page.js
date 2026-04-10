import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | HOA Alchemy',
  description: 'HOA Alchemy\'s Terms of Service govern your use of our community management platform, including subscriptions, data rights, and acceptable use.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the HOA Alchemy platform ("Service"), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.

If you do not agree to these Terms, you may not access or use the Service.`,
  },
  {
    title: '2. Description of Service',
    content: `HOA Alchemy provides a cloud-based community management platform for homeowners associations, property managers, and management companies. Features include financial management, resident portals, communications, field operations tracking, and integrations with third-party services.

We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice, though we will make reasonable efforts to notify customers of material changes.`,
  },
  {
    title: '3. Account Registration and Security',
    content: `To use HOA Alchemy, you must create an account with accurate and complete information. You are responsible for:

• Maintaining the confidentiality of your login credentials
• All activity that occurs under your account
• Promptly notifying us of any unauthorized access or security breach at security@hoaalchemy.com

You may not share your account credentials with others or create multiple accounts for the same organization without authorization.`,
  },
  {
    title: '4. Subscription, Fees, and Payment',
    content: `HOA Alchemy is a subscription-based service billed monthly or annually per unit. Fees are:

• Due in advance at the start of each billing cycle
• Non-refundable except as described in our refund policy
• Subject to change with 30 days' written notice

We use third-party payment processors (including Stripe and Forte) to handle transactions. By providing payment information, you authorize us to charge your payment method for all applicable fees.

If payment fails, your account may be suspended after a grace period of 7 days. We will make reasonable attempts to notify you before suspension.`,
  },
  {
    title: '5. Free Trial',
    content: `We offer a 14-day free trial with full access to the Service. No credit card is required to begin a trial. At the end of your trial, you may choose to subscribe or your account will automatically enter a read-only mode.

Trial accounts are subject to these Terms in full. We reserve the right to limit trial accounts to prevent abuse.`,
  },
  {
    title: '6. Data Ownership and Licenses',
    content: `You retain full ownership of all data you upload to HOA Alchemy ("Customer Data"), including homeowner records, financial data, and community documents.

You grant HOA Alchemy a limited, non-exclusive license to use Customer Data solely to provide and improve the Service. We will not access your Customer Data except as necessary to provide support, resolve technical issues, or as required by law.

Upon termination, you may request an export of your Customer Data within 90 days. After that period, Customer Data may be permanently deleted.`,
  },
  {
    title: '7. Acceptable Use',
    content: `You agree not to use HOA Alchemy to:

• Violate any applicable law or regulation
• Infringe on the intellectual property rights of others
• Upload or transmit malware, viruses, or harmful code
• Interfere with the security or integrity of the Service
• Reverse engineer, decompile, or disassemble any part of the platform
• Scrape, harvest, or systematically extract data without our written consent
• Use the Service to spam, harass, or defraud residents or third parties

We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: '8. Third-Party Integrations',
    content: `HOA Alchemy integrates with third-party services such as QuickBooks, Twilio, Forte, Plaid, and others. Your use of these integrations is subject to the terms and privacy policies of those third parties. HOA Alchemy is not responsible for the availability, accuracy, or conduct of third-party services.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, HOA Alchemy shall not be liable for:

• Indirect, incidental, special, consequential, or punitive damages
• Loss of profits, data, or business opportunities
• Damages arising from your reliance on the Service for financial or legal decisions
• Service interruptions, errors, or delays

Our total liability to you for any claim arising from or related to these Terms shall not exceed the amounts paid by you to HOA Alchemy in the 12 months preceding the claim.

Nothing in these Terms limits our liability for fraud, gross negligence, or violations of applicable law where such limitation is not permitted.`,
  },
  {
    title: '10. Warranty Disclaimer',
    content: `The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. Financial calculations, reports, and projections provided by the platform are for informational purposes and should not be relied upon as professional financial or legal advice.`,
  },
  {
    title: '11. Indemnification',
    content: `You agree to indemnify, defend, and hold harmless HOA Alchemy, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising from:

• Your use of the Service in violation of these Terms
• Your Customer Data or your violation of any third party's rights
• Any violation of applicable law by you or your users`,
  },
  {
    title: '12. Term and Termination',
    content: `These Terms remain in effect while you have an active subscription or trial. Either party may terminate this agreement:

• You may cancel your subscription at any time through your account settings. Access continues through the end of your paid billing cycle.
• We may suspend or terminate your account for material breach of these Terms, non-payment, or misuse of the Service.

Upon termination, your right to access the Service immediately ceases. Customer Data export rights survive for 90 days post-termination.`,
  },
  {
    title: '13. Governing Law and Disputes',
    content: `These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-law provisions.

Any disputes arising from these Terms shall be resolved through binding arbitration under the rules of the American Arbitration Association, except that either party may seek injunctive or equitable relief in a court of competent jurisdiction for intellectual property matters or to prevent irreparable harm.

You waive the right to participate in class-action lawsuits against HOA Alchemy.`,
  },
  {
    title: '14. Changes to These Terms',
    content: `We may update these Terms from time to time. We will provide at least 30 days' notice of material changes via email or a prominent notice in the platform. Your continued use of the Service after the effective date of updated Terms constitutes acceptance.`,
  },
  {
    title: '15. Contact',
    content: `For questions about these Terms, please contact:

HOA Alchemy, Inc.
Email: legal@hoaalchemy.com
Website: www.hoaalchemy.com/contact`,
  },
];

export default function Terms() {
  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #f8f5ff 0%, #ede0ff 100%)', padding: '100px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <span className="feature-badge">Legal</span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1a1a1a', marginBottom: 12 }}>Terms of Service</h1>
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
              Please read these Terms of Service carefully before using HOA Alchemy. These Terms constitute a legally binding agreement between you and HOA Alchemy, Inc. ("HOA Alchemy," "we," "us," or "our") governing your access to and use of our platform and services.
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
