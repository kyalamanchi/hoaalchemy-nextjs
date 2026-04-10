'use client';

import { useState } from 'react';

import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import FinancialSubNav from '@/components/FinancialSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

/* ── Expandable FAQ ── */
const faqs = [
  {
    q: 'Does HOA Alchemy replace QuickBooks?',
    a: 'You can use HOA Alchemy as a standalone accounting system or sync it with QuickBooks Online. Our native integration pushes invoices, payments, and vendor bills to QuickBooks in real time — so your CPA always has the latest numbers.',
  },
  {
    q: 'Which payment methods can residents use?',
    a: 'Residents can pay via ACH bank transfer, credit card, or debit card through their portal. AutoPay enrollment lets dues collect automatically each billing cycle. All payments are processed securely through our Forte integration and deposited into your association\'s bank account.',
  },
  {
    q: 'How does the automated invoicing work?',
    a: 'Set up your assessment schedule once — monthly, quarterly, or annual — and HOA Alchemy generates and sends invoices automatically on the dates you choose. Late fees and interest are applied per your governing documents. Residents receive email notifications and can view invoices in their portal.',
  },
  {
    q: 'Can we handle special assessments and one-time fees?',
    a: 'Yes. You can create one-time invoices for individual homeowners or batch-bill the entire community for special assessments, fines, or other charges. Each line item is tracked separately in the general ledger.',
  },
  {
    q: 'What reports are available?',
    a: 'HOA Alchemy includes 40+ built-in reports: Balance Sheet, Profit & Loss, Budget vs. Actual, A/R Aging, General Ledger, Transaction Detail, Delinquency Report, Reserve Fund Status, Check Register, Vendor Payments, and many more. All reports export to PDF and Excel.',
  },
  {
    q: 'Does it handle 1099 and 1120-H tax filing?',
    a: 'Yes. At year-end, HOA Alchemy pre-populates 1099-NEC forms for qualifying vendors based on your payment records and tracked W-9s. It also prepares the data needed for 1120-H HOA tax elections. You can e-file directly or export the data to your CPA.',
  },
  {
    q: 'How secure is the bank integration?',
    a: 'Bank connections use Plaid\'s bank-level encryption and never store your banking credentials on our servers. Transactions are imported read-only — HOA Alchemy cannot initiate transfers from your bank account without explicit authorization through the Forte payment gateway.',
  },
  {
    q: 'Can we manage multiple communities under one login?',
    a: 'Absolutely. Management companies can manage dozens or hundreds of associations from a single dashboard, with completely separate financials, chart of accounts, bank connections, and reports per community.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="feature-faq-item">
      <button
        className={`feature-faq-trigger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg
          className={`feature-faq-chevron${open ? ' open' : ''}`}
          width="20" height="20" viewBox="0 0 20 20" fill="none"
        >
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && <div className="feature-faq-body">{a}</div>}
    </div>
  );
}

/* ── Stats banner data ── */
const stats = [
  { number: '40+', label: 'Built-in Reports' },
  { number: '99.5%', label: 'Collection Rate' },
  { number: '$0', label: 'Setup & Migration' },
  { number: '2 min', label: 'Bank Sync Delay' },
];

function FeatureFinancial() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <FeatureSubNav />
      <FinancialSubNav />

      {/* ═══ Hero ═══ */}
      <section className="feature-page-hero">
        <div className="container">
          <div className="feature-page-hero-content">
            <span className="feature-badge">Financial Management</span>
            <h1>Take Full Control of Your Community's Finances</h1>
            <p className="lead">
              From automated invoicing and real-time bank feeds to tax filing and AI-powered reserve
              forecasting — HOA Alchemy gives your board and residents complete financial transparency.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Stats Banner ═══ */}
      <section className="feature-stats-banner">
        <div className="container">
          <div className="feature-stats-row">
            {stats.map((s, i) => (
              <div key={i} className="feature-stat-item">
                <span className="feature-stat-number">{s.number}</span>
                <span className="feature-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 1 — Invoicing & Payments ═══ */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Invoicing & Payments</span>
              <h2>Automated Billing That Saves Hours Every Month</h2>
              <p>
                Set up recurring assessments, special assessments, and late fees once — HOA Alchemy handles
                the rest. Residents pay online through their portal via ACH, credit card, or AutoPay.
                USPS direct mail reaches homeowners who prefer paper invoices.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Recurring & one-time invoicing</li>
                <li><span className="check-mark">&#10003;</span> Auto-apply late fees & interest</li>
                <li><span className="check-mark">&#10003;</span> Online payments — ACH, credit/debit card</li>
                <li><span className="check-mark">&#10003;</span> AutoPay enrollment for residents</li>
                <li><span className="check-mark">&#10003;</span> Email + USPS mail delivery</li>
                <li><span className="check-mark">&#10003;</span> Coupon book generation</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">
                  <span className="mockup-dot" style={{background:'#ff5f57'}}></span>
                  <span className="mockup-dot" style={{background:'#febc2e'}}></span>
                  <span className="mockup-dot" style={{background:'#28c840'}}></span>
                  <span style={{marginLeft:8, fontWeight:600, fontSize:'0.8rem'}}>Recent Payments</span>
                </div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <tbody>
                      <tr><td><span className="table-unit">Unit 204</span> Q1 Assessment</td><td className="amount" style={{color:'#16a34a'}}>$485.00</td></tr>
                      <tr><td><span className="table-unit">Unit 118</span> Q1 Assessment</td><td className="amount" style={{color:'#16a34a'}}>$485.00</td></tr>
                      <tr><td><span className="table-unit">Unit 305</span> Late Fee</td><td className="amount" style={{color:'#dc2626'}}>$25.00</td></tr>
                      <tr><td><span className="table-unit">Unit 412</span> Special Assessment</td><td className="amount" style={{color:'#16a34a'}}>$1,200.00</td></tr>
                      <tr className="total-row"><td>Total Collected (March)</td><td className="amount">$48,750.00</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2 — Accounting ═══ */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Accounting</span>
              <h2>Full Accrual & Cash Basis Accounting — Built for HOAs</h2>
              <p>
                No more shoehorning your community's books into software that wasn't designed for associations.
                HOA Alchemy provides a full general ledger, customizable chart of accounts, and journal entries
                tailored to HOA and condo accounting standards. Sync it all with QuickBooks Online or use
                our built-in accounting as a standalone replacement.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Cash & accrual basis reporting</li>
                <li><span className="check-mark">&#10003;</span> Customizable chart of accounts</li>
                <li><span className="check-mark">&#10003;</span> General ledger with full audit trail</li>
                <li><span className="check-mark">&#10003;</span> Journal entries & adjustments</li>
                <li><span className="check-mark">&#10003;</span> Multi-fund accounting (operating + reserves)</li>
                <li><span className="check-mark">&#10003;</span> Real-time QuickBooks Online sync</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">
                  <span className="mockup-dot" style={{background:'#ff5f57'}}></span>
                  <span className="mockup-dot" style={{background:'#febc2e'}}></span>
                  <span className="mockup-dot" style={{background:'#28c840'}}></span>
                  <span style={{marginLeft:8, fontWeight:600, fontSize:'0.8rem'}}>Balance Sheet — March 2026</span>
                </div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <tbody>
                      <tr><td>Operating Checking</td><td className="amount">$59,128.33</td></tr>
                      <tr><td>Reserve Savings</td><td className="amount">$46,239.50</td></tr>
                      <tr className="total-row"><td>Total Assets</td><td className="amount">$105,367.83</td></tr>
                      <tr><td>Accounts Payable</td><td className="amount">$3,422.00</td></tr>
                      <tr><td>Prepaid Assessments</td><td className="amount">$1,950.00</td></tr>
                      <tr className="total-row"><td>Total Equity</td><td className="amount">$99,995.83</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3 — Budgets & Reports ═══ */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Budgets & Reports</span>
              <h2>40+ Reports and Budget Tools at Your Fingertips</h2>
              <p>
                Build annual budgets in minutes, compare actuals vs. budget in real time, and generate
                board-ready reports with one click. Treasurers and managers get the data they need
                without the spreadsheet headaches.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Budget builder with year-over-year copy</li>
                <li><span className="check-mark">&#10003;</span> Budget vs. Actual comparison</li>
                <li><span className="check-mark">&#10003;</span> Profit & Loss, Balance Sheet, GL</li>
                <li><span className="check-mark">&#10003;</span> A/R aging & delinquency reports</li>
                <li><span className="check-mark">&#10003;</span> Export to PDF & Excel</li>
                <li><span className="check-mark">&#10003;</span> Custom report builder</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">
                  <span className="mockup-dot" style={{background:'#ff5f57'}}></span>
                  <span className="mockup-dot" style={{background:'#febc2e'}}></span>
                  <span className="mockup-dot" style={{background:'#28c840'}}></span>
                  <span style={{marginLeft:8, fontWeight:600, fontSize:'0.8rem'}}>Available Reports</span>
                </div>
                <div className="mockup-body">
                  <div className="report-grid-mockup">
                    {[
                      { icon: '📊', name: 'Balance Sheet' },
                      { icon: '📈', name: 'Profit & Loss' },
                      { icon: '📋', name: 'Budget vs. Actual' },
                      { icon: '💰', name: 'A/R Aging Summary' },
                      { icon: '📑', name: 'General Ledger' },
                      { icon: '💳', name: 'Transaction Detail' },
                      { icon: '📝', name: 'Delinquency Report' },
                      { icon: '🏦', name: 'Reserve Fund Status' },
                    ].map((r, i) => (
                      <div key={i} className="report-grid-item">
                        <span className="report-grid-icon">{r.icon}</span>
                        <span className="report-grid-name">{r.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4 — Bank Integration ═══ */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Bank Integration</span>
              <h2>Your Bank Accounts — Live Inside Your Dashboard</h2>
              <p>
                Connect your association's FDIC-insured bank accounts and see real-time balances,
                transaction feeds, and statements without ever leaving HOA Alchemy.
                Our direct API integration with Alliance Association Bank gives you check images,
                bank statements, and complimentary lockbox processing — all inside one platform.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Thousands of supported US banks & credit unions</li>
                <li><span className="check-mark">&#10003;</span> Live balances updated throughout the day</li>
                <li><span className="check-mark">&#10003;</span> Direct API with Alliance Association Bank</li>
                <li><span className="check-mark">&#10003;</span> View check images & statements in-app</li>
                <li><span className="check-mark">&#10003;</span> One-click bank reconciliation</li>
                <li><span className="check-mark">&#10003;</span> Complimentary lockbox payment processing</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              {/* Dashboard-style mockup matching real product screenshot */}
              <div className="mockup-card">
                <div className="mockup-header">
                  <span className="mockup-dot" style={{background:'#ff5f57'}}></span>
                  <span className="mockup-dot" style={{background:'#febc2e'}}></span>
                  <span className="mockup-dot" style={{background:'#28c840'}}></span>
                  <span style={{marginLeft:8, fontWeight:600, fontSize:'0.8rem'}}>Account Balances</span>
                </div>
                <div className="mockup-body" style={{padding:0}}>
                  {/* Account cards row */}
                  <div className="bank-dash-accounts">
                    <div className="bank-dash-card">
                      <div className="bank-dash-card-top">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="5" width="14" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.4"/><path d="M5 9h3" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/></svg>
                        <span className="bank-dash-acct-name">Checking <span className="bank-dash-mask">****0641</span></span>
                      </div>
                      <div className="bank-dash-balance">$17,747.79</div>
                      <div className="bank-dash-row">
                        <span className="bank-dash-live"><span className="live-dot"></span> Live</span>
                        <span className="bank-dash-stmt">View 3/30/2026 Statement</span>
                      </div>
                    </div>
                    <div className="bank-dash-card">
                      <div className="bank-dash-card-top">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 14h12M4 14V8l5-4 5 4v6" stroke="#3b82f6" strokeWidth="1.4" strokeLinejoin="round"/><path d="M7 14v-3h4v3" stroke="#3b82f6" strokeWidth="1.2"/></svg>
                        <span className="bank-dash-acct-name">Certificate of Deposit <span className="bank-dash-mask">****4806</span></span>
                      </div>
                      <div className="bank-dash-balance">$135,685.49</div>
                      <div className="bank-dash-row">
                        <span className="bank-dash-live"><span className="live-dot"></span> Live</span>
                        <span className="bank-dash-stmt">View 3/30/2026 Statement</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary stats row */}
                  <div className="bank-dash-stats">
                    <div className="bank-dash-stat">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2.5" stroke="#3b82f6" strokeWidth="1.4"/><path d="M6 10h8M6 13h5" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      <div><div className="bank-dash-stat-label">Total Deposits</div><div className="bank-dash-stat-value">39</div></div>
                    </div>
                    <div className="bank-dash-stat">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="8" r="3" stroke="#3b82f6" strokeWidth="1.3"/><circle cx="13" cy="8" r="3" stroke="#3b82f6" strokeWidth="1.3"/><path d="M2 16c0-2.21 2.24-4 5-4 1.1 0 2.13.3 3 .82.87-.52 1.9-.82 3-.82 2.76 0 5 1.79 5 4" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/></svg>
                      <div><div className="bank-dash-stat-label">Owner Payments</div><div className="bank-dash-stat-value">$7,287.89</div></div>
                    </div>
                    <div className="bank-dash-stat">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="3" stroke="#8b5cf6" strokeWidth="1.4"/><path d="M7 7h2v6H7z" fill="#8b5cf6" opacity="0.3"/><path d="M10 10l1.5-1.5" stroke="#8b5cf6" strokeWidth="1.3" strokeLinecap="round"/><circle cx="12.5" cy="7.5" r="1.5" stroke="#8b5cf6" strokeWidth="1.2"/></svg>
                      <div><div className="bank-dash-stat-label">Vendor Invoices</div><div className="bank-dash-stat-value">$19,649.60</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5 — Tax Compliance ═══ */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Tax Compliance</span>
              <h2>1099s, 1120-H, and IRS Filing Made Simple</h2>
              <p>
                Stop dreading tax season. HOA Alchemy pre-populates vendor data for 1099s, prepares your
                1120-H election, and lets you e-file or export to your CPA — all from within your dashboard.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Automated 1099-NEC preparation & e-filing</li>
                <li><span className="check-mark">&#10003;</span> 1120-H tax election support</li>
                <li><span className="check-mark">&#10003;</span> Vendor W-9 collection & tracking</li>
                <li><span className="check-mark">&#10003;</span> Year-end financial package</li>
                <li><span className="check-mark">&#10003;</span> Audit-ready documentation</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">
                  <span className="mockup-dot" style={{background:'#ff5f57'}}></span>
                  <span className="mockup-dot" style={{background:'#febc2e'}}></span>
                  <span className="mockup-dot" style={{background:'#28c840'}}></span>
                  <span style={{marginLeft:8, fontWeight:600, fontSize:'0.8rem'}}>Tax Center — 2025</span>
                </div>
                <div className="mockup-body">
                  <div className="tax-status-list">
                    <div className="tax-item">
                      <span className="tax-form">1099-NEC</span>
                      <span className="tax-count">12 vendors</span>
                      <span className="tax-badge ready">Ready to File</span>
                    </div>
                    <div className="tax-item">
                      <span className="tax-form">1099-MISC</span>
                      <span className="tax-count">3 vendors</span>
                      <span className="tax-badge ready">Ready to File</span>
                    </div>
                    <div className="tax-item">
                      <span className="tax-form">1120-H</span>
                      <span className="tax-count">1 filing</span>
                      <span className="tax-badge draft">In Progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6 — Reserve Forecasting ═══ */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Reserve Forecasting</span>
              <h2>AI-Powered Reserve Projections — Plan 30 Years Ahead</h2>
              <p>
                Never be caught off-guard by a major capital expense. HOA Alchemy's reserve forecasting
                uses historical data and AI to project funding needs, recommend contribution levels,
                and flag underfunded components before they become emergencies.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> 30-year reserve projections</li>
                <li><span className="check-mark">&#10003;</span> AI-powered funding recommendations</li>
                <li><span className="check-mark">&#10003;</span> Component inventory tracking</li>
                <li><span className="check-mark">&#10003;</span> What-if scenario modeling</li>
                <li><span className="check-mark">&#10003;</span> Reserve study report generation</li>
                <li><span className="check-mark">&#10003;</span> Percent-funded health score</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">
                  <span className="mockup-dot" style={{background:'#ff5f57'}}></span>
                  <span className="mockup-dot" style={{background:'#febc2e'}}></span>
                  <span className="mockup-dot" style={{background:'#28c840'}}></span>
                  <span style={{marginLeft:8, fontWeight:600, fontSize:'0.8rem'}}>Reserve Fund Projection</span>
                </div>
                <div className="mockup-body">
                  <div className="projection-chart">
                    <svg viewBox="0 0 300 120" className="mini-chart">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.02"/>
                        </linearGradient>
                      </defs>
                      <path d="M0,100 L50,85 L100,70 L150,55 L200,35 L250,30 L300,20" stroke="#7c3aed" strokeWidth="2.5" fill="none"/>
                      <path d="M0,100 L50,85 L100,70 L150,55 L200,35 L250,30 L300,20 L300,120 L0,120Z" fill="url(#chartGrad)"/>
                      {/* data points */}
                      <circle cx="0" cy="100" r="3" fill="#7c3aed"/>
                      <circle cx="50" cy="85" r="3" fill="#7c3aed"/>
                      <circle cx="100" cy="70" r="3" fill="#7c3aed"/>
                      <circle cx="150" cy="55" r="3" fill="#7c3aed"/>
                      <circle cx="200" cy="35" r="3" fill="#7c3aed"/>
                      <circle cx="250" cy="30" r="3" fill="#7c3aed"/>
                      <circle cx="300" cy="20" r="3" fill="#8cb83a"/>
                    </svg>
                    <div className="projection-labels">
                      <span>2026</span><span>2028</span><span>2030</span><span>2032</span><span>2034</span><span>2036</span>
                    </div>
                    <div className="projection-summary">
                      Projected balance in 2036: <strong style={{color:'#8cb83a'}}>$485,000</strong>
                      <span style={{display:'block', fontSize:'0.75rem', color:'#999', marginTop:4}}>78% funded &bull; On track</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ Section ═══ */}
      <section className="feature-faq-section">
        <div className="container">
          <span className="section-label">Common Questions</span>
          <h2>Financial Management FAQ</h2>
          <div className="feature-faq-list">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABanner
        title="Ready to Modernize Your HOA's Finances?"
        subtitle="Join hundreds of communities using HOA Alchemy for complete financial transparency. Free 14-day trial, no credit card required."
        primaryText="Start Free Trial"
        primaryLink="/contact"
        secondaryText="View Pricing"
        secondaryLink="/pricing"
      />

      {/* ═══ Explore More ═══ */}
      <ExploreMoreFeatures />

      <AllFeaturesStrip />
      <Footer />
    </>
  );
}

export default FeatureFinancial;
