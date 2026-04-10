'use client';

import { useState } from 'react';

import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import FinancialSubNav from '@/components/FinancialSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

const FinancialTax = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: 'What tax forms do HOAs need to file?',
      answer: 'HOAs typically file Form 1120-H (U.S. Income Tax Return for Homeowners Associations) and may issue 1099-NEC or 1099-MISC forms to vendors. Some HOAs also file Form 1099-INT if they pay interest. HOA Alchemy handles all these forms automatically.'
    },
    {
      id: 2,
      question: 'How can I ensure my 1099 information is accurate?',
      answer: 'HOA Alchemy auto-populates 1099 data from your vendor payment records. You can review and verify all vendor information before filing. Our system validates vendor details against IRS requirements to ensure accuracy and prevent rejections.'
    },
    {
      id: 3,
      question: 'What is the 1120-H tax election and do we need it?',
      answer: 'Form 1120-H is a tax election that allows homeowner associations to be taxed as corporations on their net investment income. This election helps qualify for exemptions on certain types of income. HOA Alchemy calculates your eligibility and handles the filing.'
    },
    {
      id: 4,
      question: 'How do I collect W-9s from vendors?',
      answer: 'HOA Alchemy provides a W-9 Request feature that sends secure requests to vendors. Vendors can submit forms directly through our portal or upload documents. The system tracks submission status and flags missing forms before tax season.'
    },
    {
      id: 5,
      question: 'Can I e-file my 1099s directly to the IRS?',
      answer: 'Yes! HOA Alchemy supports e-filing 1099-NEC and 1099-MISC forms directly to the IRS. You can batch e-file multiple forms at once, receive confirmation immediately, and maintain electronic records of all filings.'
    },
    {
      id: 6,
      question: 'How does audit-ready documentation help during an IRS audit?',
      answer: 'HOA Alchemy maintains a complete transaction trail with timestamped records, vendor details, and supporting documentation. We can export all records in auditor-ready format, including transaction reconciliation, payment verification, and income allocation schedules.'
    }
  ];

  const subNavItems = [
    { label: 'Accounting', href: '/features/financial/accounting' },
    { label: 'Budgeting', href: '/features/financial/budgeting' },
    { label: 'Payments', href: '/features/financial/payments' },
    { label: 'Tax Compliance', href: '/features/financial/tax', active: true },
    { label: 'Reporting', href: '/features/financial/reporting' }
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <FeatureSubNav items={subNavItems} />

      {/* Hero Section */}
      <section className="feature-page-hero">
        <div className="hero-content">
          <span className="feature-badge">Tax Compliance</span>
          <h1>1099s, 1120-H, and IRS Filing Made Simple</h1>
          <p className="lead">
            Automate your HOA's tax filing with intelligent form generation, vendor tracking, and audit-ready documentation. E-file directly to the IRS and keep your board audit-compliant year-round.
          </p>
          <div className="hero-ctas">
            <button className="cta-primary">Start Free Trial</button>
            <button className="cta-secondary">Schedule Demo</button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="feature-stats-banner">
        <div className="feature-stats-row">
          <div className="feature-stat-item">
            <div className="feature-stat-number">1099 & 1120-H</div>
            <div className="feature-stat-label">Auto-Generated Forms</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">Auto W-9</div>
            <div className="feature-stat-label">Vendor Tracking</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">E-File Direct</div>
            <div className="feature-stat-label">IRS Submission</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">Audit-Ready</div>
            <div className="feature-stat-label">Full Documentation</div>
          </div>
        </div>
      </section>

      {/* Section 1: 1099 Preparation */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <span className="feature-label">1099 Preparation</span>
            <h2>Auto-Generate and E-File 1099 Forms</h2>
            <p>
              Let HOA Alchemy handle your 1099 filing from start to finish. Our system automatically pulls vendor payment data from your accounting records, calculates reportable amounts, and generates IRS-compliant forms.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Auto-populate from vendor payment records</li>
              <li><span className="check-mark">✓</span> Batch generate multiple 1099 forms</li>
              <li><span className="check-mark">✓</span> E-file directly to the IRS</li>
              <li><span className="check-mark">✓</span> Print and mail paper copies</li>
              <li><span className="check-mark">✓</span> Track filing status and confirmations</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '24px', background: 'white', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #e0e0e0' }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>Tax Center</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a' }}>2025 Tax Filing Status</div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', padding: '12px', background: '#f8f8f8', borderRadius: '6px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>1099-NEC (12 vendors)</span>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: '#8cb83a' }}>Ready</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', padding: '12px', background: '#f8f8f8', borderRadius: '6px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>1099-MISC (3 vendors)</span>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: '#8cb83a' }}>Ready</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8f8f8', borderRadius: '6px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>1120-H Election</span>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: '#6b2fa0' }}>In Progress</span>
                    </div>
                  </div>
                  <button style={{ width: '100%', padding: '8px', background: '#8cb83a', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>E-File Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 1120-H Tax Election */}
      <section className="feature-detail-section alt">
        <div className="feature-detail-grid reverse">
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '24px', background: 'white', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #e0e0e0' }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>1120-H Calculator</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a' }}>Tax Election Analysis</div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '12px', fontWeight: '500', color: '#666', marginBottom: '8px' }}>Exempt Income</div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#8cb83a', marginBottom: '16px' }}>$247,500</div>
                    <div style={{ fontSize: '12px', fontWeight: '500', color: '#666', marginBottom: '8px' }}>Investment Income</div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#6b2fa0', marginBottom: '16px' }}>$8,230</div>
                    <div style={{ fontSize: '12px', fontWeight: '500', color: '#666', marginBottom: '8px' }}>Tax Liability Estimate</div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>$2,055</div>
                  </div>
                  <div style={{ padding: '12px', background: '#f0f5ff', borderRadius: '6px', marginTop: '12px' }}>
                    <div style={{ fontSize: '11px', color: '#0066cc' }}>1120-H election recommended</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-detail-content">
            <span className="feature-label">1120-H Tax Election</span>
            <h2>HOA-Specific Tax Form Filing</h2>
            <p>
              Form 1120-H is specifically designed for homeowners associations. Our system calculates your tax status, determines if the election benefits your HOA, and handles the complete filing process.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Calculate exempt income eligibility</li>
              <li><span className="check-mark">✓</span> Allocate investment income to members</li>
              <li><span className="check-mark">✓</span> Generate required Form 1120-H</li>
              <li><span className="check-mark">✓</span> Track election status and renewals</li>
              <li><span className="check-mark">✓</span> Coordinate with board secretary</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: W-9 Collection */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <span className="feature-label">W-9 Collection</span>
            <h2>Automated Vendor Form Tracking</h2>
            <p>
              Managing W-9s from dozens of vendors is time-consuming. HOA Alchemy sends secure requests, tracks submissions, and flags missing forms so you never miss a deadline.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Send W-9 requests to vendors</li>
              <li><span className="check-mark">✓</span> Track submission status automatically</li>
              <li><span className="check-mark">✓</span> Store forms securely in your HOA</li>
              <li><span className="check-mark">✓</span> Flag missing or expired forms</li>
              <li><span className="check-mark">✓</span> Send automated reminders</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '24px', background: 'white', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #e0e0e0' }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>W-9 Tracker</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a' }}>Vendor Status</div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', background: '#f0f8f0', borderRadius: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '500' }}>ABC Landscaping</span>
                      <span style={{ fontSize: '10px', fontWeight: '600', color: '#8cb83a' }}>✓ Received</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', background: '#f0f8f0', borderRadius: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '500' }}>Electric Company</span>
                      <span style={{ fontSize: '10px', fontWeight: '600', color: '#8cb83a' }}>✓ Received</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', background: '#fff3cd', borderRadius: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '500' }}>Plumbing Services</span>
                      <span style={{ fontSize: '10px', fontWeight: '600', color: '#ff9800' }}>⏱ Pending</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#ffe0e0', borderRadius: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '500' }}>Cleaning Crew</span>
                      <span style={{ fontSize: '10px', fontWeight: '600', color: '#d32f2f' }}>✗ Not Sent</span>
                    </div>
                  </div>
                  <button style={{ width: '100%', padding: '8px', background: '#6b2fa0', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Send Reminders</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Year-End Financial Package */}
      <section className="feature-detail-section alt">
        <div className="feature-detail-grid reverse">
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '24px', background: 'white', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #e0e0e0' }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>Year-End Package</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a' }}>2025 Financials Ready</div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ padding: '10px', background: '#f8f8f8', borderRadius: '6px', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', marginRight: '8px' }}>📄</span>
                      <span style={{ fontSize: '12px', fontWeight: '500' }}>Board Report</span>
                    </div>
                    <div style={{ padding: '10px', background: '#f8f8f8', borderRadius: '6px', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', marginRight: '8px' }}>📁</span>
                      <span style={{ fontSize: '12px', fontWeight: '500' }}>Audit Binder</span>
                    </div>
                    <div style={{ padding: '10px', background: '#f8f8f8', borderRadius: '6px', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', marginRight: '8px' }}>💼</span>
                      <span style={{ fontSize: '12px', fontWeight: '500' }}>CPA Export</span>
                    </div>
                    <div style={{ padding: '10px', background: '#f8f8f8', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', marginRight: '8px' }}>📊</span>
                      <span style={{ fontSize: '12px', fontWeight: '500' }}>Tax Summary</span>
                    </div>
                  </div>
                  <button style={{ width: '100%', padding: '8px', background: '#8cb83a', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Download Package</button>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-detail-content">
            <span className="feature-label">Year-End Financial Package</span>
            <h2>Board-Ready Reports and CPA Export</h2>
            <p>
              At year-end, generate a complete financial package including board reports, audit binders, and CPA-ready exports. Everything your board needs to review and your CPA needs to file.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Generate board-ready year-end reports</li>
              <li><span className="check-mark">✓</span> Create audit binder with documentation</li>
              <li><span className="check-mark">✓</span> Export in CPA-compatible formats</li>
              <li><span className="check-mark">✓</span> Include all tax schedules</li>
              <li><span className="check-mark">✓</span> One-click distribution to board</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Audit-Ready Documentation */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <span className="feature-label">Audit-Ready Documentation</span>
            <h2>Complete Transaction Trail and Records</h2>
            <p>
              If the IRS ever audits your HOA, you'll have complete documentation at your fingertips. HOA Alchemy maintains a full transaction trail with timestamps, supporting documents, and export-ready formats for auditors.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Full transaction trail with timestamps</li>
              <li><span className="check-mark">✓</span> Vendor verification and payment records</li>
              <li><span className="check-mark">✓</span> Income allocation schedules</li>
              <li><span className="check-mark">✓</span> Export to auditor-ready format</li>
              <li><span className="check-mark">✓</span> Automated backup and archiving</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '24px', background: 'white', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #e0e0e0' }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>Audit Trail</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a' }}>Compliance Records</div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ padding: '8px', borderLeft: '3px solid #8cb83a', background: '#f8f8f8', borderRadius: '4px', marginBottom: '8px' }}>
                      <div style={{ fontSize: '11px', fontWeight: '600', color: '#666' }}>1/15/2025 at 2:34 PM</div>
                      <div style={{ fontSize: '12px', fontWeight: '500', color: '#1a1a1a', marginTop: '4px' }}>Vendor Payment Recorded</div>
                    </div>
                    <div style={{ padding: '8px', borderLeft: '3px solid #6b2fa0', background: '#f8f8f8', borderRadius: '4px', marginBottom: '8px' }}>
                      <div style={{ fontSize: '11px', fontWeight: '600', color: '#666' }}>1/16/2025 at 9:12 AM</div>
                      <div style={{ fontSize: '12px', fontWeight: '500', color: '#1a1a1a', marginTop: '4px' }}>Receipt Uploaded</div>
                    </div>
                    <div style={{ padding: '8px', borderLeft: '3px solid #8cb83a', background: '#f8f8f8', borderRadius: '4px' }}>
                      <div style={{ fontSize: '11px', fontWeight: '600', color: '#666' }}>1/16/2025 at 10:45 AM</div>
                      <div style={{ fontSize: '12px', fontWeight: '500', color: '#1a1a1a', marginTop: '4px' }}>Board Approved</div>
                    </div>
                  </div>
                  <button style={{ width: '100%', padding: '8px', background: '#6b2fa0', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Export Audit File</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="feature-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="feature-faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="feature-faq-item">
              <button
                className="feature-faq-trigger"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaqId === faq.id}
              >
                <span>{faq.question}</span>
                <span className={`feature-faq-chevron ${openFaqId === faq.id ? 'open' : ''}`}>▼</span>
              </button>
              {openFaqId === faq.id && (
                <div className="feature-faq-body">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Simplify Your HOA Tax Filing?"
        description="Stop wasting hours on tax forms. Let HOA Alchemy automate your 1099s, 1120-H, and year-end filings."
        primaryCTA="Start Free Trial"
        secondaryCTA="Schedule Demo"
      />

      {/* Explore More Features */}
      <ExploreMoreFeatures currentFeature="tax" />

      {/* All Features Strip */}
      <AllFeaturesStrip />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FinancialTax;
