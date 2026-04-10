'use client';

import { useState } from 'react';

import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import FinancialSubNav from '@/components/FinancialSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

const FinancialBudgets = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How do I create an annual budget in HOA Alchemy?',
      answer: 'Creating an annual budget is straightforward. Navigate to the Budget Builder, enter your line items with amounts for each category, set variance thresholds, and save. You can copy from your prior year budget and adjust amounts as needed, which saves significant time during budget planning.'
    },
    {
      question: 'Can I compare my budgeted expenses to actual spending?',
      answer: 'Yes, the Budget vs. Actual feature provides a side-by-side comparison of your budgeted amounts versus actual expenses. The system color-codes variances (favorable in green, unfavorable in red) and allows you to drill down into transactions to understand where variances occurred.'
    },
    {
      question: 'What financial reports are available?',
      answer: 'HOA Alchemy provides 40+ reports including Balance Sheet, Profit & Loss, General Ledger, Transaction Detail, Accounts Receivable Aging, Delinquency reports, and Check Register. Each report can be customized by date range, account, and resident.'
    },
    {
      question: 'Can I create custom reports tailored to our HOA needs?',
      answer: 'Absolutely. The Custom Reports feature allows you to build reports from scratch, select which accounts and metrics to include, and save templates for recurring use. You can also schedule auto-delivery to board members on a recurring basis.'
    },
    {
      question: 'How can I share reports with the board?',
      answer: 'Reports can be exported as PDF or Excel, emailed directly to board members, or included in automated board packets. You can schedule reports to be generated and delivered automatically on a recurring schedule (monthly, quarterly, etc.).'
    },
    {
      question: 'Is there a way to track year-over-year budget trends?',
      answer: 'Yes, the Year-over-Year Copy feature lets you copy the prior year budget with one click, making it easy to compare trends and make informed adjustments. You can view historical budgets and actuals side-by-side for trend analysis.'
    }
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
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
      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </script>
      <FeatureSubNav />
      <FinancialSubNav />

      {/* Hero Section */}
      <section className="feature-page-hero">
        <div className="hero-content">
          <div className="feature-badge">Budgets & Reports</div>
          <h1>40+ Reports and Budget Tools at Your Fingertips</h1>
          <p className="lead-text">
            Build comprehensive annual budgets, monitor budget vs. actual performance in real-time, and generate professional financial reports. Export to PDF, Excel, or email directly to your board—all with one click.
          </p>
          <div className="hero-cta-buttons">
            <Link href="/book-demo" className="cta-button primary">
              Book a Demo
            </Link>
            <Link href="/signup" className="cta-button secondary">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="feature-stats-banner">
        <div className="feature-stats-row">
          <div className="feature-stat-item">
            <div className="feature-stat-number">40+</div>
            <div className="feature-stat-label">Reports</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">1-Click</div>
            <div className="feature-stat-label">Export</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">Real-Time</div>
            <div className="feature-stat-label">Data</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">YoY</div>
            <div className="feature-stat-label">Copy</div>
          </div>
        </div>
      </section>

      {/* Budget Builder Section */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <h2>Budget Builder</h2>
            <p>Create comprehensive annual budgets with line-item control and easy-to-understand variance tracking.</p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Create annual budgets with detailed line items</li>
              <li><span className="check-mark">✓</span> Copy from prior year and adjust amounts</li>
              <li><span className="check-mark">✓</span> Track variances automatically</li>
              <li><span className="check-mark">✓</span> Set variance thresholds and alerts</li>
              <li><span className="check-mark">✓</span> Approve and finalize budgets</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot red"></div>
                <div className="mockup-dot yellow"></div>
                <div className="mockup-dot green"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.8' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Budget Builder - 2026</div>
                  <div>Category: Maintenance</div>
                  <div>Amount: $45,000</div>
                  <div>Threshold: ±10%</div>
                  <div style={{ marginTop: '12px', borderTop: '1px solid #e0e0e0', paddingTop: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Budgeted</span>
                      <span style={{ color: '#6b2fa0' }}>$45K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget vs. Actual Section */}
      <section className="feature-detail-section alt">
        <div className="feature-detail-grid reverse">
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot red"></div>
                <div className="mockup-dot yellow"></div>
                <div className="mockup-dot green"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.8' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Budget vs. Actual</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Maintenance</span>
                    <span>$42K / $45K</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '12px' }}>
                    <div style={{ width: '93%', height: '100%', backgroundColor: '#8cb83a', borderRadius: '4px' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#666' }}>
                    <span>Favorable</span>
                    <span>-6.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-detail-content">
            <h2>Budget vs. Actual</h2>
            <p>Monitor spending performance with side-by-side comparisons and color-coded variance indicators.</p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Side-by-side budget vs. actual comparison</li>
              <li><span className="check-mark">✓</span> Color-coded variance display (green favorable, red unfavorable)</li>
              <li><span className="check-mark">✓</span> Drill-down to transaction level</li>
              <li><span className="check-mark">✓</span> Variance analysis and alerts</li>
              <li><span className="check-mark">✓</span> Monthly, quarterly, and annual views</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Financial Reports Section */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <h2>Financial Reports</h2>
            <p>Access a comprehensive library of professional financial reports with one-click generation and customization.</p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Balance Sheet report</li>
              <li><span className="check-mark">✓</span> Profit & Loss statement</li>
              <li><span className="check-mark">✓</span> General Ledger by account</li>
              <li><span className="check-mark">✓</span> Transaction Detail with filtering</li>
              <li><span className="check-mark">✓</span> Accounts Receivable Aging</li>
              <li><span className="check-mark">✓</span> Delinquency and Check Register</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot red"></div>
                <div className="mockup-dot yellow"></div>
                <div className="mockup-dot green"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.8' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Balance Sheet</div>
                  <div style={{ marginBottom: '8px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '11px' }}>ASSETS</div>
                    <div style={{ marginLeft: '12px', marginTop: '4px' }}>Checking: $125,340</div>
                    <div style={{ marginLeft: '12px' }}>Reserve: $892,450</div>
                  </div>
                  <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #e0e0e0' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '11px' }}>LIABILITIES</div>
                    <div style={{ marginLeft: '12px', marginTop: '4px' }}>A/P: $34,200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Reports Section */}
      <section className="feature-detail-section alt">
        <div className="feature-detail-grid reverse">
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot red"></div>
                <div className="mockup-dot yellow"></div>
                <div className="mockup-dot green"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.8' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Custom Report Builder</div>
                  <div style={{ marginBottom: '8px' }}>Select Metrics:</div>
                  <div style={{ marginLeft: '8px', fontSize: '11px' }}>
                    <div>☑ Revenue</div>
                    <div>☑ Operating Costs</div>
                    <div>☑ Reserve Status</div>
                    <div>☐ Capital Projects</div>
                  </div>
                  <div style={{ marginTop: '12px', color: '#6b2fa0', fontWeight: 'bold' }}>Save as Template</div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-detail-content">
            <h2>Custom Reports</h2>
            <p>Build reports exactly how you need them, save templates for reuse, and schedule automatic delivery.</p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Build custom reports from scratch</li>
              <li><span className="check-mark">✓</span> Select metrics and dimensions</li>
              <li><span className="check-mark">✓</span> Save report templates for reuse</li>
              <li><span className="check-mark">✓</span> Schedule auto-delivery to board members</li>
              <li><span className="check-mark">✓</span> Monthly, quarterly, or annual schedules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Export & Sharing Section */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <h2>Export & Sharing</h2>
            <p>Share financial insights with stakeholders instantly through multiple formats and automated delivery.</p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Export reports as PDF or Excel</li>
              <li><span className="check-mark">✓</span> Email reports directly to board members</li>
              <li><span className="check-mark">✓</span> Schedule recurring email delivery</li>
              <li><span className="check-mark">✓</span> Generate board packet bundles</li>
              <li><span className="check-mark">✓</span> Automated reminders and delivery tracking</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot red"></div>
                <div className="mockup-dot yellow"></div>
                <div className="mockup-dot green"></div>
              </div>
              <div className="mockup-body">
                <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.8' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Export Options</div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ padding: '6px 12px', backgroundColor: '#f0f0f0', borderRadius: '4px', fontSize: '11px' }}>PDF</div>
                    <div style={{ padding: '6px 12px', backgroundColor: '#f0f0f0', borderRadius: '4px', fontSize: '11px' }}>Excel</div>
                  </div>
                  <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '12px' }}>
                    <div style={{ fontSize: '11px', marginBottom: '6px' }}>Email to:</div>
                    <div style={{ color: '#6b2fa0', fontSize: '11px' }}>board@hoa.local</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="feature-faq-section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
          <div className="feature-faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="feature-faq-item">
                <button
                  className="feature-faq-trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span>{item.question}</span>
                  <span
                    className="feature-faq-chevron"
                    style={{
                      transform: openFaqIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    ▼
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="feature-faq-body">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Master Your HOA's Budget & Reports?"
        subheading="Join hundreds of property managers who trust HOA Alchemy for financial clarity."
        ctaText="Start Your Free Trial Today"
        ctaLink="/signup"
      />

      {/* Explore More Features */}
      <ExploreMoreFeatures />

      {/* All Features Strip */}
      <AllFeaturesStrip />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FinancialBudgets;
