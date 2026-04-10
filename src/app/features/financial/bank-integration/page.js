'use client';

import { useState } from 'react';

import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import FinancialSubNav from '@/components/FinancialSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

const FinancialBankIntegration = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Is my bank account data secure?',
      answer: 'Absolutely. We use bank-level encryption (AES-256) for all data in transit and at rest. We never store your login credentials—we use secure OAuth and direct API connections. All data is PCI-DSS compliant, and we perform regular third-party security audits.'
    },
    {
      question: 'Which banks are supported?',
      answer: 'We support thousands of banks across the US and Canada through our integration partners. We also offer direct API integration with Alliance Association Bank for premium features like check images and complimentary lockbox processing.'
    },
    {
      question: 'How often do transactions sync?',
      answer: 'Transactions typically sync daily. For Alliance Association Bank accounts, we offer near real-time sync (within minutes). You can also manually trigger a sync at any time from the dashboard.'
    },
    {
      question: 'What makes Alliance Association Bank integration special?',
      answer: 'Direct API integration means faster, more reliable data sync without intermediaries. You get check images and bank statements delivered directly into HOA Alchemy, plus complimentary lockbox payment processing that saves your association significant vendor management costs.'
    },
    {
      question: 'Can I match transactions to invoices automatically?',
      answer: 'Yes! Our system automatically categorizes transactions and matches them to vendor invoices based on amount, date, and vendor information. You can review suggested matches and approve them with one click.'
    },
    {
      question: 'How does one-click reconciliation work?',
      answer: 'Simply open a bank account and click "Reconcile". Our system compares imported transactions against your ledger, auto-matches what it can, and highlights discrepancies for manual review. Generate reconciliation reports in seconds.'
    },
    {
      question: 'Can I view check images and statements in HOA Alchemy?',
      answer: 'Yes. For Alliance Association Bank, check images and statements are available directly in the platform. For other banks, we provide links to statement downloads and historical archive search by date, amount, or check number.'
    },
    {
      question: 'What happens if a transaction doesn\'t match?',
      answer: 'Unmatched transactions are flagged for review. You can manually assign them to invoices, mark them as miscellaneous expenses, or investigate further. Our exception reports help you stay on top of discrepancies.'
    }
  ];

  return (
    <>
      <FeatureSubNav
        category="Financial"
        feature="Bank Integration"
        breadcrumbs={[
          { label: 'Features', url: '/features' },
          { label: 'Financial', url: '/features/financial' },
          { label: 'Bank Integration', url: '/features/financial/bank-integration' }
        ]}
      />

      {/* Hero Section */}
      <section className="feature-page-hero">
        <div className="feature-hero-content">
          <div className="feature-badge" style={{ backgroundColor: '#8cb83a' }}>
            Bank Integration
          </div>
          <h1>Your Bank Accounts — Live Inside Your Dashboard</h1>
          <p className="feature-hero-lead">
            Connect thousands of supported banks and get real-time visibility into your association's finances.
            With direct API integration to Alliance Association Bank, enjoy check images, statements, and
            complimentary lockbox processing—all without leaving HOA Alchemy.
          </p>
          <div className="feature-hero-ctas">
            <button className="cta-button primary">Get Live Bank Integration</button>
            <button className="cta-button secondary">See It In Action</button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="feature-stats-banner">
        <div className="feature-stats-row">
          <div className="feature-stat-item">
            <div className="feature-stat-number">5,000+</div>
            <div className="feature-stat-label">Thousands of Banks</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">Real-Time</div>
            <div className="feature-stat-label">Live Balances</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">Direct API</div>
            <div className="feature-stat-label">Alliance Bank Connection</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">Free</div>
            <div className="feature-stat-label">Lockbox Processing</div>
          </div>
        </div>
      </section>

      {/* Section 1: Live Account Balances */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <h2>Live Account Balances</h2>
            <p>
              See all your association's bank accounts in one place with real-time balance updates.
              HOA Alchemy supports multiple account types including checking, savings, certificates of deposit,
              and money market accounts.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Real-time balance updates</li>
              <li><span className="check-mark">✓</span> Multiple account types</li>
              <li><span className="check-mark">✓</span> Masked account numbers for security</li>
              <li><span className="check-mark">✓</span> Live status indicators</li>
              <li><span className="check-mark">✓</span> Quick access to statements</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="bank-dash-accounts">
              <div className="bank-dash-card">
                <div className="bank-dash-card-top">
                  <div>
                    <div className="bank-dash-acct-name">Checking</div>
                    <div className="bank-dash-mask">****0641</div>
                  </div>
                  <div className="bank-dash-row">
                    <span className="bank-dash-live">
                      <span className="live-dot"></span> Live
                    </span>
                  </div>
                </div>
                <div className="bank-dash-balance">$17,747.79</div>
                <div style={{ marginTop: '12px', fontSize: '13px' }}>
                  <a href="#" style={{ color: '#6b2fa0', textDecoration: 'none' }}>View Statement →</a>
                </div>
              </div>

              <div className="bank-dash-card">
                <div className="bank-dash-card-top">
                  <div>
                    <div className="bank-dash-acct-name">Savings</div>
                    <div className="bank-dash-mask">****2156</div>
                  </div>
                  <div className="bank-dash-row">
                    <span className="bank-dash-live">
                      <span className="live-dot"></span> Live
                    </span>
                  </div>
                </div>
                <div className="bank-dash-balance">$52,341.25</div>
                <div style={{ marginTop: '12px', fontSize: '13px' }}>
                  <a href="#" style={{ color: '#6b2fa0', textDecoration: 'none' }}>View Statement →</a>
                </div>
              </div>

              <div className="bank-dash-card">
                <div className="bank-dash-card-top">
                  <div>
                    <div className="bank-dash-acct-name">Certificate of Deposit</div>
                    <div className="bank-dash-mask">****4806</div>
                  </div>
                  <div className="bank-dash-row">
                    <span className="bank-dash-live">
                      <span className="live-dot"></span> Live
                    </span>
                  </div>
                </div>
                <div className="bank-dash-balance">$135,685.49</div>
                <div style={{ marginTop: '12px', fontSize: '13px' }}>
                  <a href="#" style={{ color: '#6b2fa0', textDecoration: 'none' }}>View Statement →</a>
                </div>
              </div>

              <div className="bank-dash-card">
                <div className="bank-dash-card-top">
                  <div>
                    <div className="bank-dash-acct-name">Money Market</div>
                    <div className="bank-dash-mask">****3421</div>
                  </div>
                  <div className="bank-dash-row">
                    <span className="bank-dash-live">
                      <span className="live-dot"></span> Live
                    </span>
                  </div>
                </div>
                <div className="bank-dash-balance">$89,234.66</div>
                <div style={{ marginTop: '12px', fontSize: '13px' }}>
                  <a href="#" style={{ color: '#6b2fa0', textDecoration: 'none' }}>View Statement →</a>
                </div>
              </div>
            </div>

            {/* Summary Stats Below Accounts */}
            <div className="bank-dash-stats">
              <div className="bank-dash-stat">
                <div className="bank-dash-stat-label">Total Deposits</div>
                <div className="bank-dash-stat-value">39</div>
              </div>
              <div className="bank-dash-stat">
                <div className="bank-dash-stat-label">Owner Payments</div>
                <div className="bank-dash-stat-value">$7,287.89</div>
              </div>
              <div className="bank-dash-stat">
                <div className="bank-dash-stat-label">Vendor Invoices</div>
                <div className="bank-dash-stat-value">$19,649.60</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Automatic Transaction Import */}
      <section className="feature-detail-section alt">
        <div className="feature-detail-grid reverse">
          <div className="feature-detail-visual">
            <div className="mockup-card" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="mockup-header">
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Imported Transactions</span>
              </div>
              <div className="mockup-body">
                <div style={{
                  borderBottom: '1px solid #e0e0e0',
                  padding: '12px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '500' }}>Alliance Landscaping Inc.</div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Invoice #2024-156</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#d32f2f' }}>-$3,450.00</div>
                    <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>Apr 2, 2026</div>
                  </div>
                </div>

                <div style={{
                  borderBottom: '1px solid #e0e0e0',
                  padding: '12px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '500' }}>Owner Assessment Deposit</div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>From Unit 405</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#8cb83a' }}>+$350.00</div>
                    <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>Apr 1, 2026</div>
                  </div>
                </div>

                <div style={{
                  borderBottom: '1px solid #e0e0e0',
                  padding: '12px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '500' }}>Electric Utility Co.</div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Auto-matched</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#d32f2f' }}>-$1,245.50</div>
                    <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>Mar 31, 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-detail-content">
            <h2>Automatic Transaction Import</h2>
            <p>
              Every day, HOA Alchemy automatically imports transactions from your connected bank accounts.
              Our intelligent system categorizes transactions, matches them to vendor invoices, and flags
              exceptions for your review.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Daily automatic sync</li>
              <li><span className="check-mark">✓</span> Smart transaction categorization</li>
              <li><span className="check-mark">✓</span> Automatic invoice matching</li>
              <li><span className="check-mark">✓</span> Exception flagging</li>
              <li><span className="check-mark">✓</span> Customizable import rules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: One-Click Reconciliation */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <h2>One-Click Reconciliation</h2>
            <p>
              Forget tedious manual reconciliation. Open any bank account and click "Reconcile" to instantly
              compare imported transactions against your ledger. Our system auto-matches transactions it can,
              highlights discrepancies, and generates detailed reconciliation reports.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Instant bank-to-ledger matching</li>
              <li><span className="check-mark">✓</span> Auto-match capable transactions</li>
              <li><span className="check-mark">✓</span> Manual review for edge cases</li>
              <li><span className="check-mark">✓</span> Discrepancy highlighting</li>
              <li><span className="check-mark">✓</span> Downloadable reconciliation reports</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="mockup-header">
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Reconciliation Report</span>
              </div>
              <div className="mockup-body">
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Checking ****0641</div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Reconciliation Status</div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  marginBottom: '16px',
                  borderTop: '1px solid #e0e0e0',
                  paddingTop: '12px'
                }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Ledger Total</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#333', marginTop: '4px' }}>$17,445.29</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Bank Balance</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#333', marginTop: '4px' }}>$17,747.79</div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#e8f5e9',
                  border: '1px solid #8cb83a',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  marginBottom: '12px'
                }}>
                  <div style={{ fontSize: '12px', color: '#2e7d32', fontWeight: '500' }}>
                    ✓ 47 transactions matched automatically
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#fff3e0',
                  border: '1px solid #ff9800',
                  borderRadius: '4px',
                  padding: '10px 12px'
                }}>
                  <div style={{ fontSize: '12px', color: '#e65100', fontWeight: '500' }}>
                    ⚠ 2 transactions need manual review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Check Images & Statements */}
      <section className="feature-detail-section alt">
        <div className="feature-detail-grid reverse">
          <div className="feature-detail-visual">
            <div className="mockup-card" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="mockup-header">
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Check Images & Statements</span>
              </div>
              <div className="mockup-body">
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Recent Checks</div>
                  <div style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '10px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>Check #4521</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>Roof Maintenance LLC - $5,200.00</div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#6b2fa0' }}>View</div>
                  </div>
                  <div style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '10px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>Check #4520</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>ABC Insurance Co. - $2,150.00</div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#6b2fa0' }}>View</div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '12px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Bank Statements</div>
                  <div style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '10px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>March 2026</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>Checking ****0641</div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#6b2fa0' }}>Download</div>
                  </div>
                  <div style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '10px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>February 2026</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>Checking ****0641</div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#6b2fa0' }}>Download</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-detail-content">
            <h2>Check Images & Statements</h2>
            <p>
              View check images directly in HOA Alchemy without navigating to your bank portal. Download
              bank statements, search historical archives by date, amount, or check number, and keep
              everything organized in one place.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Check images inline</li>
              <li><span className="check-mark">✓</span> Bank statement downloads</li>
              <li><span className="check-mark">✓</span> Historical archive search</li>
              <li><span className="check-mark">✓</span> Search by date, amount, check #</li>
              <li><span className="check-mark">✓</span> Secure document storage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Alliance Association Bank Integration */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <h2>Alliance Association Bank Integration</h2>
            <p>
              For associations banking with Alliance Association Bank, HOA Alchemy offers direct API
              integration—no intermediaries, no delays. Get check images and bank statements delivered
              directly into the platform, plus complimentary lockbox payment processing that eliminates
              manual check handling and reduces payment processing costs.
            </p>
            <ul className="feature-check-list">
              <li><span className="check-mark">✓</span> Direct API integration (not Plaid)</li>
              <li><span className="check-mark">✓</span> Check images in-app</li>
              <li><span className="check-mark">✓</span> Bank statements in-app</li>
              <li><span className="check-mark">✓</span> Complimentary lockbox processing</li>
              <li><span className="check-mark">✓</span> Real-time data accuracy</li>
              <li><span className="check-mark">✓</span> Faster transaction sync</li>
            </ul>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card" style={{
              backgroundColor: '#f5f5f5',
              border: '2px solid #8cb83a'
            }}>
              <div className="mockup-header" style={{ backgroundColor: '#8cb83a', color: '#fff' }}>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Alliance Association Bank Direct API</span>
              </div>
              <div className="mockup-body">
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <span className="mockup-dot" style={{ backgroundColor: '#8cb83a' }}></span>
                    <div style={{ marginLeft: '10px' }}>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>Direct API Connection</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>No intermediaries, faster sync</div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <span className="mockup-dot" style={{ backgroundColor: '#8cb83a' }}></span>
                    <div style={{ marginLeft: '10px' }}>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>Check Images</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>View cleared checks instantly</div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <span className="mockup-dot" style={{ backgroundColor: '#8cb83a' }}></span>
                    <div style={{ marginLeft: '10px' }}>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>Lockbox Processing</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>Complimentary payment handling</div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span className="mockup-dot" style={{ backgroundColor: '#8cb83a' }}></span>
                    <div style={{ marginLeft: '10px' }}>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>Real-Time Data</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>Minutes vs hours for sync</div>
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#e8f5e9',
                  border: '1px solid #8cb83a',
                  borderRadius: '4px',
                  padding: '12px',
                  marginTop: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '12px', color: '#2e7d32', fontWeight: '600' }}>
                    Premium Integration for AAB Customers
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
              <div
                key={index}
                className="feature-faq-item"
                style={{
                  borderBottom: '1px solid #e0e0e0',
                  paddingBottom: '0',
                  marginBottom: '0'
                }}
              >
                <button
                  className="feature-faq-trigger"
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '20px 0',
                    textAlign: 'left',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>
                    {item.question}
                  </span>
                  <span
                    className="feature-faq-chevron"
                    style={{
                      transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      fontSize: '20px',
                      color: '#6b2fa0'
                    }}
                  >
                    ▼
                  </span>
                </button>

                {expandedFaq === index && (
                  <div
                    className="feature-faq-body"
                    style={{
                      paddingBottom: '20px',
                      color: '#666',
                      lineHeight: '1.6'
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqItems.map(item => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': item.answer
            }
          }))
        })}
      </script>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to streamline your bank integration?"
        subheadline="Connect your accounts and start reconciling in minutes."
        primaryCta="Start Free Trial"
        secondaryCta="Schedule Demo"
      />

      {/* Explore More Features */}
      <ExploreMoreFeatures
        currentFeature="Bank Integration"
        relatedFeatures={[
          { name: 'Vendor Management', url: '/features/financial/vendor-management' },
          { name: 'Invoicing', url: '/features/financial/invoicing' },
          { name: 'Financial Reports', url: '/features/financial/reports' }
        ]}
      />

      {/* All Features Strip */}
      <AllFeaturesStrip />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FinancialBankIntegration;
