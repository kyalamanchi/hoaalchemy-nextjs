'use client';

import { useState } from 'react';

import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import FinancialSubNav from '@/components/FinancialSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

const FinancialAccounting = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What's the difference between cash basis and accrual accounting?",
      answer: "Cash basis accounting records transactions when money changes hands, while accrual accounting records them when they're earned or incurred, regardless of payment timing. HOA Alchemy supports both methods, letting you switch between them for reporting and regulatory compliance."
    },
    {
      question: "Can I track multiple funds simultaneously?",
      answer: "Yes. HOA Alchemy's Chart of Accounts supports unlimited funds including operating funds, reserve funds, and special assessment funds. Each fund maintains its own general ledger while allowing consolidated reporting across all funds."
    },
    {
      question: "How does the audit trail work?",
      answer: "Every transaction is automatically logged with timestamp, user, and change history. You can drill down into any journal entry to see who created it, when it was modified, and trace it back to its source document. This provides complete transparency for audits and inquiries."
    },
    {
      question: "Can I create recurring journal entries?",
      answer: "Yes. Set up recurring entries for standard monthly adjustments like reserves, depreciation, or routine accruals. HOA Alchemy automatically generates and logs them on schedule, reducing manual data entry and human error."
    },
    {
      question: "Does HOA Alchemy integrate with QuickBooks?",
      answer: "Yes. Our real-time two-way sync automatically maps your HOA chart of accounts to QuickBooks, syncing transactions, vendors, and customers. Changes in either system reflect instantly, eliminating double-entry and keeping your accounting unified."
    },
    {
      question: "What approval workflows are available for journal entries?",
      answer: "You can configure multi-level approval workflows requiring management or board review before entries post. Entries stay in draft status with an audit trail of approvals, ensuring financial controls and accountability."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <FeatureSubNav />

      {/* Hero Section */}
      <section className="feature-page-hero">
        <div className="container">
          <div className="hero-badge">
            <span className="feature-badge">Accounting</span>
          </div>
          <h1>Full Accrual & Cash Basis Accounting — Built for HOAs</h1>
          <p className="hero-lead">
            Complete general ledger, customizable chart of accounts, real-time journal management, and seamless QuickBooks integration. Your HOA's financial backbone.
          </p>
          <div className="hero-cta">
            <Link href="/demo" className="btn btn-primary">Request Demo</Link>
            <Link href="/pricing" className="btn btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="feature-stats-banner">
        <div className="container">
          <div className="feature-stats-row">
            <div className="feature-stat-item">
              <div className="feature-stat-number">2</div>
              <div className="feature-stat-label">Accounting Methods</div>
            </div>
            <div className="feature-stat-item">
              <div className="feature-stat-number">∞</div>
              <div className="feature-stat-label">Journal Entries</div>
            </div>
            <div className="feature-stat-item">
              <div className="feature-stat-number">100%</div>
              <div className="feature-stat-label">Full Audit Trail</div>
            </div>
            <div className="feature-stat-item">
              <div className="feature-stat-number">3+</div>
              <div className="feature-stat-label">Multi-Fund Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: General Ledger */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <h2>General Ledger</h2>
              <p>Your complete financial record in one place.</p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Full GL with complete audit trail of all transactions</li>
                <li><span className="check-mark">✓</span> Searchable by account, amount, date, or description</li>
                <li><span className="check-mark">✓</span> Drill down from GL to source journal entries</li>
                <li><span className="check-mark">✓</span> Real-time balance updates across all accounts</li>
                <li><span className="check-mark">✓</span> Export GL as CSV or PDF for audits</li>
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
                  <div style={{ fontFamily: 'Monaco, monospace', fontSize: '11px', lineHeight: '1.6', color: '#666' }}>
                    <div><strong>General Ledger</strong></div>
                    <div style={{ marginTop: '12px', borderTop: '1px solid #e0e0e0', paddingTop: '8px' }}>
                      <div>1010 | Checking Account | 45,234.50</div>
                      <div>1020 | Reserve Fund | 128,900.00</div>
                      <div>2100 | Accounts Payable | 3,450.25</div>
                      <div>4000 | Assessment Income | 52,100.00</div>
                      <div>5200 | Maintenance Exp | 8,750.30</div>
                      <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #e0e0e0' }}>
                        <strong>View Drill-Down →</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Chart of Accounts */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <h2>Chart of Accounts</h2>
              <p>Pre-built for HOA accounting with full customization.</p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Pre-loaded with HOA-standard accounts ready to use</li>
                <li><span className="check-mark">✓</span> Add, edit, or archive custom accounts anytime</li>
                <li><span className="check-mark">✓</span> Multi-fund structure: operating, reserves, special assessments</li>
                <li><span className="check-mark">✓</span> Account numbering follows industry standards</li>
                <li><span className="check-mark">✓</span> Prevent posting to archived accounts automatically</li>
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
                  <div style={{ fontFamily: 'Monaco, monospace', fontSize: '11px', lineHeight: '1.8', color: '#666' }}>
                    <div><strong>Chart of Accounts</strong></div>
                    <div style={{ marginTop: '12px', borderTop: '1px solid #e0e0e0', paddingTop: '8px' }}>
                      <div style={{ color: '#6b2fa0', fontWeight: 'bold' }}>ASSETS</div>
                      <div>1010 Checking - Operating</div>
                      <div>1015 Checking - Reserve</div>
                      <div>1020 Reserve Fund Investments</div>
                      <div style={{ marginTop: '8px', color: '#6b2fa0', fontWeight: 'bold' }}>LIABILITIES</div>
                      <div>2100 Accounts Payable</div>
                      <div>2200 Accrued Expenses</div>
                      <div style={{ marginTop: '8px', color: '#6b2fa0', fontWeight: 'bold' }}>REVENUE</div>
                      <div>4000 Assessment Income</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cash & Accrual Reporting */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <h2>Cash & Accrual Reporting</h2>
              <p>Switch reporting methods instantly for total financial flexibility.</p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Toggle between cash and accrual basis reports in seconds</li>
                <li><span className="check-mark">✓</span> Filter by date range, account category, or specific fund</li>
                <li><span className="check-mark">✓</span> Compare methods side-by-side to understand timing differences</li>
                <li><span className="check-mark">✓</span> Generate reports for regulatory and lender requirements</li>
                <li><span className="check-mark">✓</span> Schedule automated monthly or quarterly reports</li>
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
                  <div style={{ fontFamily: 'Monaco, monospace', fontSize: '11px', lineHeight: '1.6', color: '#666' }}>
                    <div><strong>Financial Report</strong></div>
                    <div style={{ marginTop: '8px' }}>
                      <div>Method: <strong style={{ color: '#6b2fa0' }}>Accrual Basis</strong> <span style={{ marginLeft: '20px', color: '#8cb83a' }}>Switch to Cash</span></div>
                      <div style={{ marginTop: '8px', borderTop: '1px solid #e0e0e0', paddingTop: '8px' }}>
                        <div><strong>Income</strong></div>
                        <div>Assessment Revenue: $52,100.00</div>
                        <div>Late Fees: $1,200.50</div>
                        <div><strong style={{ marginTop: '4px', display: 'block' }}>Expenses</strong></div>
                        <div>Maintenance: $8,750.30</div>
                        <div>Insurance: $3,200.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Journal Entries */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <h2>Journal Entries</h2>
              <p>Complete control over manual adjustments and recurring transactions.</p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Create manual journal entries for adjustments and accruals</li>
                <li><span className="check-mark">✓</span> Build recurring entries for monthly or quarterly transactions</li>
                <li><span className="check-mark">✓</span> Reversing entries for easy reversal of prior periods</li>
                <li><span className="check-mark">✓</span> Configure approval workflows requiring board or management sign-off</li>
                <li><span className="check-mark">✓</span> Full audit trail shows who created, approved, and posted each entry</li>
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
                  <div style={{ fontFamily: 'Monaco, monospace', fontSize: '11px', lineHeight: '1.8', color: '#666' }}>
                    <div><strong>Journal Entry</strong></div>
                    <div style={{ marginTop: '12px', borderTop: '1px solid #e0e0e0', paddingTop: '8px' }}>
                      <div>Entry #: JE-2026-0452</div>
                      <div>Status: <span style={{ color: '#8cb83a', fontWeight: 'bold' }}>Pending Approval</span></div>
                      <div style={{ marginTop: '8px', borderTop: '1px solid #e0e0e0', paddingTop: '8px' }}>
                        <div><strong>Debit | Credit</strong></div>
                        <div>1020 Checking | 5,000.00 |</div>
                        <div>2100 Payable | | 5,000.00</div>
                      </div>
                      <div style={{ marginTop: '8px', fontSize: '10px' }}>Monthly Reserve Accrual</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: QuickBooks Sync */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <h2>QuickBooks Sync</h2>
              <p>Real-time two-way synchronization keeps your accounting unified.</p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Real-time two-way sync with QuickBooks Online or Desktop</li>
                <li><span className="check-mark">✓</span> Auto-map your HOA chart of accounts to QB accounts</li>
                <li><span className="check-mark">✓</span> Sync vendors, customers, and transaction data automatically</li>
                <li><span className="check-mark">✓</span> Eliminate duplicate entry and manual reconciliation</li>
                <li><span className="check-mark">✓</span> Audit trail shows source system for every synced transaction</li>
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
                  <div style={{ fontFamily: 'Monaco, monospace', fontSize: '11px', lineHeight: '1.8', color: '#666' }}>
                    <div><strong>Integration Status</strong></div>
                    <div style={{ marginTop: '12px', borderTop: '1px solid #e0e0e0', paddingTop: '8px' }}>
                      <div>QuickBooks: <span style={{ color: '#8cb83a', fontWeight: 'bold' }}>Connected</span></div>
                      <div>Last Sync: 2 mins ago</div>
                      <div style={{ marginTop: '8px' }}>
                        <div><strong>Synced Today</strong></div>
                        <div>Transactions: 24</div>
                        <div>Vendors: 3</div>
                        <div>Customers: 5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="feature-faq-section">
        <div className="container">
          <h2>Accounting Questions</h2>
          <div className="feature-faq-list">
            {faqData.map((item, index) => (
              <div key={index} className="feature-faq-item">
                <button
                  className="feature-faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={expandedFAQ === index}
                >
                  <span>{item.question}</span>
                  <span className={`feature-faq-chevron ${expandedFAQ === index ? 'open' : ''}`}>
                    ›
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
        </div>
      </section>

      {/* CTABanner */}
      <CTABanner />

      {/* ExploreMoreFeatures */}
      <ExploreMoreFeatures currentFeature="accounting" />

      {/* AllFeaturesStrip */}
      <AllFeaturesStrip />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FinancialAccounting;
