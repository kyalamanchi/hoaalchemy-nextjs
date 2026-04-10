'use client';

import { useState } from 'react';

import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import FinancialSubNav from '@/components/FinancialSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

const FinancialReserves = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is a reserve study and why do I need one?',
      answer: 'A reserve study is a comprehensive assessment of your HOA\'s physical assets and their funding needs. It evaluates major components (roof, HVAC, pool, parking, etc.) and projects their replacement costs over 30 years. Most state laws require reserve studies for transparency, financial planning, and to help current and future homeowners understand long-term costs.'
    },
    {
      question: 'How does HOA Alchemy forecast reserve needs 30 years in advance?',
      answer: 'Our AI-powered reserve forecasting analyzes your component inventory, useful lives, replacement costs, and funding history. We apply inflation rates, interest assumptions, and contribution schedules to project your funding level decades ahead. This lets you plan proactively and avoid surprise special assessments.'
    },
    {
      question: 'What is a percent-funded score and how is it calculated?',
      answer: 'Percent-funded is an industry-standard metric that compares your reserve fund balance to your fully-funded reserve need. A score of 70% or higher is generally considered healthy. The calculation: (Current Reserve Balance / Fully Funded Reserve) × 100. HOA Alchemy benchmarks your community against similar properties to show where you stand.'
    },
    {
      question: 'Can I model different scenarios—like changing contribution rates or inflation?',
      answer: 'Yes! Our What-If Scenario Modeling tool lets you adjust key variables like annual contributions, inflation rates, interest rates, and component replacement costs. See instantly how each change impacts your 30-year funding outlook and percent-funded score.'
    },
    {
      question: 'Can I export reserve study reports for my CPA or reserve analyst?',
      answer: 'Absolutely. HOA Alchemy generates board-ready reserve study summaries with detailed component inventory, funding projections, and recommendations. Export as PDF to share with your CPA, accountant, or professional reserve analyst for compliance and audit purposes.'
    },
    {
      question: 'How often should we update our reserve study?',
      answer: 'Industry best practice recommends a full reserve study update every 3 years, with annual reviews in between. HOA Alchemy makes it simple to refresh your data, component costs, and projections so your reserve plan stays accurate and your board stays informed.'
    }
  ];

  const subNavItems = [
    { label: 'Assessments', href: '/features/financial/assessments' },
    { label: 'Reserve Forecasting', href: '/features/financial/reserves', active: true },
    { label: 'Budget Planning', href: '/features/financial/budgets' }
  ];

  return (
    <>
      <FeatureSubNav items={subNavItems} />

      {/* Hero Section */}
      <section className="feature-page-hero">
        <div className="hero-content">
          <span className="feature-badge">Reserve Forecasting</span>
          <h1>AI-Powered Reserve Projections — Plan 30 Years Ahead</h1>
          <p className="hero-lead">
            Stop guessing about your HOA's financial future. Model 30-year reserve needs, track every component,
            run what-if scenarios, and generate board-ready reports—all powered by AI.
          </p>
          <div className="hero-cta-buttons">
            <button className="cta-button primary">Start Free Trial</button>
            <button className="cta-button secondary">Schedule Demo</button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="feature-stats-banner">
        <div className="feature-stats-row">
          <div className="feature-stat-item">
            <div className="feature-stat-number">30</div>
            <div className="feature-stat-label">Year Projections</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">AI</div>
            <div className="feature-stat-label">Powered</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">∞</div>
            <div className="feature-stat-label">What-If Scenarios</div>
          </div>
          <div className="feature-stat-item">
            <div className="feature-stat-number">%</div>
            <div className="feature-stat-label">Funded Score</div>
          </div>
        </div>
      </section>

      {/* Section 1: Reserve Projections */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <span className="feature-label">Reserve Projections</span>
            <h2>30-Year Funding Timeline</h2>
            <p>
              See exactly when your reserve fund will hit key milestones. Our AI projects your reserve balance
              month-by-month, accounting for contributions, component replacements, inflation, and interest earnings.
            </p>
            <div className="feature-check-list">
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Graph visualization of 30-year funding curve</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Annual contribution recommendations by year</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Component replacement timeline overlay</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Identify underfunding risk and funding gaps</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Export projections for board meetings</span>
              </div>
            </div>
          </div>
          <div className="feature-detail-visual">
            <svg viewBox="0 0 400 250" className="reserve-chart">
              <defs>
                <linearGradient id="reserveGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#6b2fa0', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: '#6b2fa0', stopOpacity: 0.3 }} />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#8cb83a' }} />
                  <stop offset="100%" style={{ stopColor: '#6b2fa0' }} />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              <line x1="40" y1="30" x2="40" y2="200" stroke="#e0e0e0" strokeWidth="1" />
              <line x1="40" y1="200" x2="390" y2="200" stroke="#e0e0e0" strokeWidth="1" />
              {/* Grid */}
              <line x1="40" y1="150" x2="390" y2="150" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2" />
              <line x1="40" y1="100" x2="390" y2="100" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2" />
              {/* Area fill */}
              <path d="M 40 200 L 80 150 L 120 120 L 160 90 L 200 70 L 240 65 L 280 75 L 320 95 L 360 120 L 390 130 L 390 200 Z"
                    fill="url(#reserveGradient)" />
              {/* Line */}
              <polyline points="40,200 80,150 120,120 160,90 200,70 240,65 280,75 320,95 360,120 390,130"
                        fill="none" stroke="url(#lineGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* Data points */}
              <circle cx="40" cy="200" r="3.5" fill="#8cb83a" />
              <circle cx="120" cy="120" r="3.5" fill="#8cb83a" />
              <circle cx="200" cy="70" r="3.5" fill="#8cb83a" />
              <circle cx="240" cy="65" r="3.5" fill="#6b2fa0" />
              <circle cx="320" cy="95" r="3.5" fill="#8cb83a" />
              <circle cx="390" cy="130" r="3.5" fill="#6b2fa0" />
              {/* Labels */}
              <text x="40" y="220" fontSize="11" fill="#666" textAnchor="middle">Year 0</text>
              <text x="215" y="220" fontSize="11" fill="#666" textAnchor="middle">Year 15</text>
              <text x="390" y="220" fontSize="11" fill="#666" textAnchor="middle">Year 30</text>
              <text x="25" y="205" fontSize="11" fill="#666" textAnchor="end">$0</text>
              <text x="25" y="75" fontSize="11" fill="#666" textAnchor="end">$2.5M</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2: Component Inventory */}
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
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#333' }}>Roof</strong>
                  <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                    Useful Life: 20 years | Replacement: $180K | Funded: 85%
                  </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#333' }}>HVAC System</strong>
                  <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                    Useful Life: 15 years | Replacement: $65K | Funded: 62%
                  </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#333' }}>Pool Equipment</strong>
                  <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                    Useful Life: 10 years | Replacement: $45K | Funded: 91%
                  </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#333' }}>Parking Lot</strong>
                  <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                    Useful Life: 12 years | Replacement: $220K | Funded: 48%
                  </div>
                </div>
                <div>
                  <strong style={{ color: '#333' }}>Elevator</strong>
                  <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                    Useful Life: 25 years | Replacement: $95K | Funded: 71%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-detail-content">
            <span className="feature-label">Component Inventory</span>
            <h2>Track Every Major Component</h2>
            <p>
              Maintain a complete inventory of all your HOA's major components—roofs, HVAC, pools, elevators,
              parking lots, and more. For each asset, track useful life, replacement cost, and current funded percentage.
            </p>
            <div className="feature-check-list">
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Add unlimited components to your reserve study</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Set useful life and replacement cost per component</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Track current funded percentage automatically</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>AI suggests industry benchmarks for your community</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Notes and attachments for each component</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What-If Scenario Modeling */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <span className="feature-label">What-If Scenario Modeling</span>
            <h2>Test Different Funding Strategies</h2>
            <p>
              Run unlimited scenarios to model the impact of different decisions. Adjust contribution rates,
              inflation assumptions, interest rates, or component costs. See instantly how each scenario
              affects your 30-year funding outlook.
            </p>
            <div className="feature-check-list">
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Save multiple scenarios side-by-side</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Adjust contribution rates by year</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Model different inflation and interest assumptions</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Update component costs to test sensitivity</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Compare outcomes and identify optimal strategy</span>
              </div>
            </div>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-body">
                <div style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Annual Contribution</div>
                  <input type="text" placeholder="$15,000" style={{
                    width: '100%',
                    padding: '6px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px'
                  }} disabled />
                </div>
                <div style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Inflation Rate</div>
                  <input type="text" placeholder="3.2%" style={{
                    width: '100%',
                    padding: '6px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px'
                  }} disabled />
                </div>
                <div style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Interest Rate</div>
                  <input type="text" placeholder="4.1%" style={{
                    width: '100%',
                    padding: '6px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px'
                  }} disabled />
                </div>
                <div style={{
                  padding: '10px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '12px', color: '#666' }}>Projected Funded %</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#8cb83a', marginTop: '4px' }}>78%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Percent-Funded Health Score */}
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
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>Health Score</div>
                  <div style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: '#8cb83a',
                    marginBottom: '8px'
                  }}>68%</div>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: '#ffd700',
                    color: '#333',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>Moderate</div>
                </div>
                <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '12px', marginTop: '12px' }}>
                  <div style={{ fontSize: '12px', marginBottom: '8px' }}>
                    <strong>Your Community:</strong> 68%
                  </div>
                  <div style={{
                    width: '100%',
                    height: '6px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    marginBottom: '12px'
                  }}>
                    <div style={{
                      width: '68%',
                      height: '100%',
                      backgroundColor: '#ffd700'
                    }}></div>
                  </div>
                  <div style={{ fontSize: '12px', marginBottom: '8px' }}>
                    <strong>Similar Communities:</strong> 72%
                  </div>
                  <div style={{
                    width: '100%',
                    height: '6px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '72%',
                      height: '100%',
                      backgroundColor: '#8cb83a'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-detail-content">
            <span className="feature-label">Percent-Funded Health Score</span>
            <h2>Industry-Standard Reserve Metric</h2>
            <p>
              Percent-funded is the gold standard metric for assessing reserve health. It compares your
              current reserve balance to your fully-funded reserve need. HOA Alchemy calculates this
              automatically and benchmarks your score against similar communities.
            </p>
            <div className="feature-check-list">
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Green (&gt;70%): Healthy, well-funded reserves</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Yellow (30–70%): Moderate, consider contributions</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Red (&lt;30%): Underfunded, risk of assessments</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Benchmarked against your peer communities</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Track score trends over 3, 5, and 10 years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Reserve Study Reports */}
      <section className="feature-detail-section">
        <div className="feature-detail-grid">
          <div className="feature-detail-content">
            <span className="feature-label">Reserve Study Reports</span>
            <h2>Board-Ready Summaries & PDF Export</h2>
            <p>
              Generate professional reserve study reports in seconds. HOA Alchemy creates comprehensive
              summaries with component inventory, 30-year projections, percent-funded analysis, and
              recommendations—ready to share with your board, CPA, or reserve analyst.
            </p>
            <div className="feature-check-list">
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Professional PDF export with your HOA branding</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Executive summary for board presentations</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Detailed component inventory and funding analysis</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>30-year projections and funding recommendations</span>
              </div>
              <div className="check-item">
                <span className="check-mark">✓</span>
                <span>Share securely with CPA, accountant, or analyst</span>
              </div>
            </div>
          </div>
          <div className="feature-detail-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-body">
                <div style={{
                  textAlign: 'center',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #e0e0e0',
                  marginBottom: '12px'
                }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px' }}>DOCUMENT</div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>2026 Reserve Study</div>
                  <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>Comprehensive Analysis</div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', marginBottom: '4px' }}>
                    📋 Executive Summary
                  </div>
                  <div style={{ fontSize: '11px', color: '#666', lineHeight: '1.4' }}>
                    Reserve health, funding status, and key recommendations
                  </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', marginBottom: '4px' }}>
                    📊 30-Year Projections
                  </div>
                  <div style={{ fontSize: '11px', color: '#666', lineHeight: '1.4' }}>
                    Funding timeline with contribution recommendations
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', marginBottom: '4px' }}>
                    📁 Component Details
                  </div>
                  <div style={{ fontSize: '11px', color: '#666', lineHeight: '1.4' }}>
                    Full inventory with useful life and replacement cost
                  </div>
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
          {faqData.map((item, index) => (
            <div key={index} className="feature-faq-item">
              <button
                className="feature-faq-trigger"
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedFAQ === index}
              >
                <span>{item.question}</span>
                <span className={`feature-faq-chevron ${expandedFAQ === index ? 'open' : ''}`}>
                  ▼
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

      {/* FAQ JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer
            }
          }))
        })}
      </script>

      {/* CTA Banner */}
      <CTABanner />

      {/* Explore More Features */}
      <ExploreMoreFeatures />

      {/* All Features Strip */}
      <AllFeaturesStrip />

      <Footer />
    </>
  );
};

export default FinancialReserves;
