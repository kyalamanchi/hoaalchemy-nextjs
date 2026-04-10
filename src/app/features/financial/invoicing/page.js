'use client';

import { useState } from 'react';

import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import FinancialSubNav from '@/components/FinancialSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

const FinancialInvoicing = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How quickly can I set up recurring invoicing?',
      answer: 'HOA Alchemy allows you to configure recurring assessments in under 60 seconds. Simply select the frequency (monthly, quarterly, or annual), set the amount, and apply to individual units or the entire community. Invoices generate automatically on your specified schedule.'
    },
    {
      question: 'What payment methods do you support?',
      answer: 'We support ACH bank transfers, credit cards, debit cards, and AutoPay enrollment. All payments are PCI-DSS compliant and encrypted end-to-end to protect resident financial information.'
    },
    {
      question: 'Can late fees be applied automatically?',
      answer: 'Yes. Configure auto-apply late fees based on your rules—percentage-based or flat rate. The system calculates interest, tracks delinquency, and can integrate with lien processes and demand letter generation.'
    },
    {
      question: 'How do I track payment history and generate reports?',
      answer: 'The real-time payment dashboard shows all transactions, status, and history. Residents receive auto-generated receipts, and you can export payment data to PDF or Excel for accounting and compliance purposes.'
    },
    {
      question: 'Can I create special assessments for specific residents?',
      answer: 'Absolutely. Create one-time charges for individual units or batch bill multiple residents. Use for special assessments, fines, violation fees, or any custom charge. Track and collect separately from recurring assessments.'
    },
    {
      question: 'Is AutoPay secure and easy for residents to enroll?',
      answer: 'Yes. AutoPay enrollment is a simple one-click process that residents can complete online. All data is PCI-compliant and encrypted. Residents can pause or cancel anytime from their payment portal.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <>
      <FeatureSubNav
        current="Invoicing & Payments"
        breadcrumbs={[
          { label: 'Features', path: '/features' },
          { label: 'Financial', path: '/features/financial' }
        ]}
      />

      {/* Hero Section */}
      <section className="feature-page-hero">
        <div className="feature-hero-content">
          <span className="feature-badge">Invoicing & Payments</span>
          <h1>Streamline HOA Billing & Collections</h1>
          <p className="feature-hero-lead">
            Recurring assessments, online payments, AutoPay enrollment, and automated late fee collection.
            Create invoices in 60 seconds. Collect faster with 99.5% success rate.
          </p>
          <div className="feature-hero-ctas">
            <button className="cta-button primary">Start Free Trial</button>
            <Link href="/demo" className="cta-button secondary">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="feature-stats-banner">
        <div className="feature-stats-row">
          <div className="feature-stat-item">
            <div className="feature-stat-number">99.5%</div>
            <div className="feature-stat-label">Collection Rate</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">$0</div>
            <div className="feature-stat-label">Late Payment Chase</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">60sec</div>
            <div className="feature-stat-label">Invoice Creation</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">Auto</div>
            <div className="feature-stat-label">Pay Available</div>
          </div>
        </div>
      </section>

      {/* Section 1: Recurring Assessments */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <span className="feature-label">Recurring Payments</span>
            <h2>One Platform. Every Assessment. Zero Hassle.</h2>
            <p>
              We streamline association assessments from start to finish. Instantly bill all units or targeted
              homeowner groups with accurate revenue coding built in. Whether the monthly dues are the same for
              all units or different for every unit — based on size of unit or amenities consumed — our platform
              handles it seamlessly.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Bill all units or targeted groups instantly</li>
              <li><span className="check-mark">✓</span> Uniform or variable dues per unit</li>
              <li><span className="check-mark">✓</span> Accurate revenue coding built in</li>
              <li><span className="check-mark">✓</span> One-time payments &amp; recurring auto-pay</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div style={{ maxWidth: '520px', width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb', overflow: 'hidden', backgroundColor: '#fff' }}>
              {/* Header bar */}
              <div style={{ padding: '16px 28px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="mockup-dot" style={{ backgroundColor: '#ff5f57' }}></span>
                <span className="mockup-dot" style={{ backgroundColor: '#febc2e' }}></span>
                <span className="mockup-dot" style={{ backgroundColor: '#28c840' }}></span>
              </div>
              {/* Body */}
              <div style={{ padding: '48px 40px', textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '13px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Homeowner Portal</div>
                <div style={{ marginBottom: '32px', fontWeight: '700', fontSize: '20px', color: '#1e293b' }}>Payment Options</div>
                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%', padding: '18px 32px', marginBottom: '16px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '17px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }}>
                  <span style={{ fontSize: '20px' }}>💳</span> Make One-Time Payment
                </button>
                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%', padding: '18px 32px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '17px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }}>
                  <span style={{ fontSize: '20px' }}>🔄</span> Setup Recurring Pay
                </button>
                <div style={{ marginTop: '24px', fontSize: '12px', color: '#94a3b8' }}>Secure &amp; encrypted — PCI-DSS compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Online Payments */}
      <section className="feature-detail-section alt" style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>
          {/* Centered intro text */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="feature-label">Online Payments</span>
            <h2 style={{ marginTop: '12px' }}>Flexible Payment Options for Homeowners</h2>
            <p style={{ maxWidth: '720px', margin: '16px auto 0', fontSize: '17px', lineHeight: '1.7', color: '#555' }}>
              Alchemy platform allows homeowners flexible ways to stay current on their assessments.
              Utility Assessments can be paid monthly or yearly, and Special Assessments may be paid
              over time through installment plans approved by the board.
            </p>
          </div>
          {/* Payment Method card */}
          <div style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '16px', boxShadow: '0 8px 40px rgba(0,0,0,0.07)', border: '1px solid #e5e7eb', overflow: 'hidden', backgroundColor: '#fff' }}>
            {/* Card header */}
            <div style={{ padding: '18px 28px', borderBottom: '1px solid #e5e7eb', fontSize: '15px', color: '#64748b', fontWeight: '500' }}>
              Payment Method
            </div>
            {/* Payment options grid */}
            <div style={{ padding: '28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                {/* Credit / Debit Card */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '20px', borderRadius: '10px', border: '1px solid #e5e7eb', backgroundColor: '#fafafa', cursor: 'pointer' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                    <span style={{ color: '#6b2fa0' }}>💳</span>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>Credit / Debit Card</span>
                </div>
                {/* ACH Transfer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '20px', borderRadius: '10px', border: '1px solid #e5e7eb', backgroundColor: '#fafafa', cursor: 'pointer' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                    <span style={{ color: '#6b2fa0' }}>🏦</span>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>ACH Transfer</span>
                </div>
              </div>
              {/* Lockbox */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '20px', borderRadius: '10px', border: '1px solid #e5e7eb', backgroundColor: '#fafafa', cursor: 'pointer' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                    <span style={{ color: '#6b2fa0' }}>🔒</span>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>Lockbox</span>
                </div>
                <div></div>
              </div>
            </div>
            {/* Skeleton content lines */}
            <div style={{ padding: '0 28px 28px' }}>
              <div style={{ height: '10px', width: '55%', backgroundColor: '#d1d5db', borderRadius: '6px', marginBottom: '10px' }}></div>
              <div style={{ height: '8px', width: '85%', backgroundColor: '#e5e7eb', borderRadius: '6px', marginBottom: '16px' }}></div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{ height: '8px', width: '22%', backgroundColor: '#ddd6fe', borderRadius: '6px' }}></div>
                <div style={{ height: '8px', width: '18%', backgroundColor: '#ddd6fe', borderRadius: '6px' }}></div>
                <div style={{ height: '8px', width: '20%', backgroundColor: '#ddd6fe', borderRadius: '6px' }}></div>
                <div style={{ height: '8px', width: '15%', backgroundColor: '#ddd6fe', borderRadius: '6px' }}></div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
                <div style={{ height: '8px', width: '20%', backgroundColor: '#ddd6fe', borderRadius: '6px' }}></div>
                <div style={{ height: '8px', width: '22%', backgroundColor: '#ddd6fe', borderRadius: '6px' }}></div>
              </div>
            </div>
          </div>
          {/* Check list below card */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '36px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: '#475569' }}><span style={{ color: '#8cb83a', fontWeight: 'bold' }}>✓</span> ACH bank transfers</span>
            <span style={{ fontSize: '14px', color: '#475569' }}><span style={{ color: '#8cb83a', fontWeight: 'bold' }}>✓</span> Credit &amp; debit cards</span>
            <span style={{ fontSize: '14px', color: '#475569' }}><span style={{ color: '#8cb83a', fontWeight: 'bold' }}>✓</span> Lockbox payments</span>
            <span style={{ fontSize: '14px', color: '#475569' }}><span style={{ color: '#8cb83a', fontWeight: 'bold' }}>✓</span> PCI-DSS compliant</span>
          </div>
        </div>
      </section>

      {/* Section: ACH Autopay */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <span className="feature-label">ACH Autopay</span>
            <h2>Automated ACH Payments, Done Right</h2>
            <p>
              ACH autopay allows homeowners to pay assessments automatically on approved schedules,
              reducing missed payments and late notices. Boards benefit from steady collections,
              improved cash flow, and fewer manual interventions — without changing established payment policies.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Set-and-forget recurring payments</li>
              <li><span className="check-mark">✓</span> Board-approved schedules only</li>
              <li><span className="check-mark">✓</span> Fewer missed payments &amp; late notices</li>
              <li><span className="check-mark">✓</span> Improved community cash flow</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div style={{ maxWidth: '480px', width: '100%' }}>
              {/* Recurring Payment enabled card */}
              <div style={{ borderRadius: '14px', boxShadow: '0 6px 32px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb', overflow: 'hidden', backgroundColor: '#fff', padding: '48px 32px', textAlign: 'center' }}>
                {/* Icon */}
                <div style={{ margin: '0 auto 24px', width: '80px', height: '80px' }}>
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80px', height: '80px' }}>
                    {/* Outer ring segments */}
                    <circle cx="40" cy="40" r="32" stroke="#6b2fa0" strokeWidth="6" strokeDasharray="18 8" fill="none" />
                    {/* Inner circle */}
                    <circle cx="40" cy="40" r="20" fill="#6b2fa0" />
                    {/* Dollar sign */}
                    <text x="40" y="46" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">$</text>
                    {/* Arrow wrap */}
                    <path d="M62 52 C68 42, 68 28, 56 20" stroke="#6b2fa0" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <polygon points="54,16 60,20 54,24" fill="#6b2fa0" />
                  </svg>
                </div>
                {/* Text */}
                <div style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>
                  Recurring Payment <span style={{ color: '#22c55e', fontWeight: '700' }}>enabled</span>
                </div>
                {/* Divider */}
                <div style={{ width: '60%', height: '1px', backgroundColor: '#e5e7eb', margin: '16px auto' }}></div>
                {/* Next payment */}
                <div style={{ fontSize: '15px', color: '#94a3b8' }}>
                  Next payment 04/03/2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Late Fees & Collections */}
      <section className="feature-detail-section alt">
        <div className="feature-detail-grid reverse">
          <div className="feature-detail-content">
            <span className="feature-label">Late Fees</span>
            <h2>Automated Late Fees, Applied by Policy</h2>
            <p>
              Board‑approved late fees apply automatically—no manual reviews, no follow‑ups, no spreadsheets.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Auto-apply percentage or flat late fees</li>
              <li><span className="check-mark">✓</span> Interest calculation on outstanding balance</li>
              <li><span className="check-mark">✓</span> Delinquency tracking & reporting</li>
              <li><span className="check-mark">✓</span> Lien generation & demand letter integration</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div style={{ maxWidth: '480px', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', border: '1px solid #e5e7eb', overflow: 'hidden', backgroundColor: '#f9fafb' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 24px', borderBottom: '1px solid #e5e7eb', backgroundColor: '#fff' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#22c55e', color: '#fff', fontSize: '16px' }}>✓</span>
                <span style={{ fontWeight: '700', fontSize: '17px', color: '#1e293b' }}>Recurring Late Fee Enabled</span>
              </div>
              {/* Sub-header */}
              <div style={{ padding: '10px 24px', borderBottom: '1px solid #e5e7eb', fontSize: '13px', color: '#64748b', backgroundColor: '#fff' }}>
                One-Time Late Fee: <em style={{ color: '#94a3b8' }}>Disabled by Policy</em>
              </div>
              {/* Form rows */}
              <div style={{ backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '14px 24px', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ width: '110px', fontSize: '14px', color: '#475569', fontWeight: '500' }}>Amount</span>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '8px 12px', gap: '4px', backgroundColor: '#fff' }}>
                    <span style={{ color: '#94a3b8', fontSize: '14px' }}>$</span>
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '500' }}>50.00</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '14px 24px', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ width: '110px', fontSize: '14px', color: '#475569', fontWeight: '500' }}>Category</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '8px 12px', minWidth: '200px', backgroundColor: '#fff' }}>
                    <span style={{ fontSize: '14px', color: '#2563eb' }}>Recurring Late Fees</span>
                    <span style={{ color: '#94a3b8', fontSize: '10px' }}>▼</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '14px 24px', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ width: '110px', fontSize: '14px', color: '#475569', fontWeight: '500' }}>Start Date</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '8px 12px', backgroundColor: '#fff' }}>
                    <span style={{ color: '#2563eb', fontSize: '14px' }}>📅</span>
                    <span style={{ fontSize: '14px', color: '#1e293b' }}>04/15/2026</span>
                    <span style={{ color: '#94a3b8', fontSize: '14px' }}>📆</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '14px 24px' }}>
                  <span style={{ width: '110px', fontSize: '14px', color: '#475569', fontWeight: '500' }}>Repeat</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '8px 12px', minWidth: '80px', backgroundColor: '#fff' }}>
                      <span style={{ fontSize: '14px', color: '#1e293b' }}>Every</span>
                      <span style={{ color: '#94a3b8', fontSize: '10px' }}>▼</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '8px 12px', minWidth: '110px', backgroundColor: '#fff' }}>
                      <span style={{ fontSize: '14px', color: '#1e293b' }}>1 month</span>
                      <span style={{ color: '#94a3b8', fontSize: '10px' }}>▼</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', padding: '16px 24px', borderTop: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                <button style={{ padding: '8px 24px', border: '1px solid #cbd5e1', borderRadius: '6px', backgroundColor: '#fff', color: '#475569', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>Cancel</button>
                <button style={{ padding: '8px 24px', border: 'none', borderRadius: '6px', backgroundColor: '#6b2fa0', color: '#fff', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Special Assessments */}
      <section className="feature-detail-section alt">
        <div className="feature-detail-grid reverse">
          <div className="feature-detail-content">
            <span className="feature-label">Special Assessments & One-Time Charges</span>
            <h2>Flexible Billing for Every Situation</h2>
            <p>
              Create one-time charges for individual units or batch bill multiple residents. Use for special assessments,
              violation fines, amenity fees, or any custom charge. Track separately from recurring assessments and
              manage collections independently.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Individual or batch special assessments</li>
              <li><span className="check-mark">✓</span> Violation fines & penalty fees</li>
              <li><span className="check-mark">✓</span> Custom one-time charges</li>
              <li><span className="check-mark">✓</span> Separate tracking and reporting</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <span className="mockup-dot" style={{ backgroundColor: '#ff5f57' }}></span>
                <span className="mockup-dot" style={{ backgroundColor: '#febc2e' }}></span>
                <span className="mockup-dot" style={{ backgroundColor: '#28c840' }}></span>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px' }}>
                  <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>Special Assessment</div>
                  <div style={{ marginBottom: '8px' }}>Type: Roof Replacement</div>
                  <div style={{ marginBottom: '8px' }}>Amount: $1,200.00</div>
                  <div style={{ marginBottom: '16px', padding: '8px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
                    <div style={{ marginBottom: '4px' }}>Units: 45</div>
                    <div>Billing: Immediate</div>
                  </div>
                  <div style={{ marginBottom: '8px', color: '#8cb83a', fontWeight: 'bold' }}>
                    $54,000 Total Revenue
                  </div>
                  <div style={{ textAlign: 'center', fontSize: '11px', color: '#666' }}>
                    Payment Plan Options Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Payment Tracking & Receipts */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <span className="feature-label">Payment Tracking & Receipts</span>
            <h2>Real-Time Visibility & Compliance</h2>
            <p>
              View all transactions in real-time with a comprehensive payment dashboard. Residents receive auto-generated
              email receipts. Export payment history to PDF or Excel for accounting, audits, and compliance. Know exactly
              what's been collected and what's outstanding.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Real-time payment dashboard</li>
              <li><span className="check-mark">✓</span> Full payment history per resident</li>
              <li><span className="check-mark">✓</span> Auto-generated email receipts</li>
              <li><span className="check-mark">✓</span> Export to PDF & Excel</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <span className="mockup-dot" style={{ backgroundColor: '#ff5f57' }}></span>
                <span className="mockup-dot" style={{ backgroundColor: '#febc2e' }}></span>
                <span className="mockup-dot" style={{ backgroundColor: '#28c840' }}></span>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '11px' }}>
                  <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>Payment Dashboard</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '12px' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <th style={{ textAlign: 'left', paddingBottom: '6px' }}>Date</th>
                        <th style={{ textAlign: 'right', paddingBottom: '6px' }}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ paddingBottom: '4px' }}>Apr 3, 2026</td>
                        <td style={{ textAlign: 'right', paddingBottom: '4px', color: '#28c840' }}>$350</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ paddingBottom: '4px' }}>Mar 5, 2026</td>
                        <td style={{ textAlign: 'right', paddingBottom: '4px', color: '#28c840' }}>$350</td>
                      </tr>
                      <tr>
                        <td style={{ paddingBottom: '4px' }}>Feb 1, 2026</td>
                        <td style={{ textAlign: 'right', paddingBottom: '4px', color: '#28c840' }}>$350</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ padding: '8px', backgroundColor: '#e8f5e9', borderRadius: '4px', textAlign: 'center', color: '#28c840', fontSize: '10px', marginBottom: '8px' }}>
                    ✓ Receipts Sent Automatically
                  </div>
                  <div style={{ textAlign: 'center', fontSize: '10px', color: '#666' }}>
                    Export: PDF | Excel | CSV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="feature-faq-section">
        <div className="feature-faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about HOA invoicing and payments.</p>
        </div>
        <div className="feature-faq-list">
          {faqItems.map((item, index) => (
            <div key={index} className="feature-faq-item">
              <button
                className="feature-faq-trigger"
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedFAQ === index}
              >
                <span>{item.question}</span>
                <span className="feature-faq-chevron" style={{ transform: expandedFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ⌄
                </span>
              </button>
              {expandedFAQ === index && (
                <div className="feature-faq-body">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Streamline HOA Invoicing?"
        subheadline="Start collecting faster with recurring invoices, online payments, and AutoPay."
        primaryCTA="Start Free Trial"
        secondaryCTA="Schedule a Demo"
      />

      {/* Explore More Features */}
      <ExploreMoreFeatures
        current="Invoicing & Payments"
        relatedFeatures={[
          { label: 'Accounting & Financial Reporting', path: '/features/financial/accounting' },
          { label: 'Expense Tracking', path: '/features/financial/expenses' },
          { label: 'Budget Planning', path: '/features/financial/budgeting' }
        ]}
      />

      {/* All Features Strip */}
      <AllFeaturesStrip />

      <Footer />
    </>
  );
};

export default FinancialInvoicing;
