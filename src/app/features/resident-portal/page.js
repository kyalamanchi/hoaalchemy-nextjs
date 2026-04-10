import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

function FeatureResidentPortal() {
  const seoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Resident & Owner Portal - HOA Alchemy',
    description: 'Give every homeowner a self-service portal: pay dues, submit requests, view documents, vote on issues, and stay informed.',
    url: 'https://www.hoaalchemy.com/features/resident-portal',
  };

  return (
    <>
      <FeatureSubNav />

      {/* Hero */}
      <section className="feature-page-hero">
        <div className="container">
          <div className="feature-page-hero-content">
            <span className="feature-badge">Resident Portal</span>
            <h1>Give Homeowners a Portal They'll Actually Use</h1>
            <p className="lead">
              A clean, mobile-friendly resident portal where homeowners can pay dues, submit requests,
              access community documents, vote, and stay in the loop — 24/7, without calling the office.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Online Payments */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Online Payments</span>
              <h2>Residents Pay Dues in 60 Seconds</h2>
              <p>
                Forget chasing paper checks. Homeowners log in, see their balance, and pay instantly
                via ACH or credit card. AutoPay enrollment means dues collect themselves — and
                delinquency rates drop dramatically.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> ACH, credit card, and debit card payments</li>
                <li><span className="check-mark">✓</span> AutoPay enrollment with email confirmation</li>
                <li><span className="check-mark">✓</span> Full payment history & receipts</li>
                <li><span className="check-mark">✓</span> Partial payment support</li>
                <li><span className="check-mark">✓</span> Mobile-optimized checkout</li>
                <li><span className="check-mark">✓</span> Instant balance & statement view</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">My Account — Jennifer Martinez, Unit 204</div>
                <div className="mockup-body">
                  <div className="portal-account">
                    <div className="portal-balance">
                      <div className="balance-label">Current Balance</div>
                      <div className="balance-amount">$485.00</div>
                      <div className="balance-due">Due April 1, 2026</div>
                    </div>
                    <div style={{display:'flex', gap: 10, marginTop: 16}}>
                      <button className="btn btn-primary" style={{flex:1, fontSize:14}}>Pay Now</button>
                      <button className="btn btn-secondary" style={{flex:1, fontSize:14}}>Set AutoPay</button>
                    </div>
                    <div className="portal-history">
                      <div className="portal-history-title">Payment History</div>
                      <div className="portal-history-item">
                        <span>Jan 1, 2026 — Q1 Assessment</span>
                        <span style={{color:'#16a34a', fontWeight:600}}>$485.00 ✓</span>
                      </div>
                      <div className="portal-history-item">
                        <span>Oct 1, 2025 — Q4 Assessment</span>
                        <span style={{color:'#16a34a', fontWeight:600}}>$485.00 ✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requests & Work Orders */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Requests & Work Orders</span>
              <h2>Residents Submit Requests — You Handle Them Efficiently</h2>
              <p>
                Homeowners submit maintenance requests, architectural applications, and general
                inquiries directly through their portal. Each request is tracked, assigned, and
                updated — keeping residents informed and your inbox clean.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Custom request forms per category</li>
                <li><span className="check-mark">✓</span> Photo and document upload</li>
                <li><span className="check-mark">✓</span> Real-time status tracking for residents</li>
                <li><span className="check-mark">✓</span> Email & SMS notifications at each step</li>
                <li><span className="check-mark">✓</span> Full conversation thread per request</li>
                <li><span className="check-mark">✓</span> Completion confirmation & resident rating</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">My Requests</div>
                <div className="mockup-body">
                  <div className="request-list">
                    <div className="request-item">
                      <div className="request-title">Fence Replacement — Backyard</div>
                      <div className="request-meta">Architectural Request · Submitted Mar 28</div>
                      <span className="request-status approved">Approved</span>
                    </div>
                    <div className="request-item">
                      <div className="request-title">Hallway Light Out — Unit 204 Entry</div>
                      <div className="request-meta">Maintenance · Submitted Apr 1</div>
                      <span className="request-status review">In Progress</span>
                    </div>
                    <div className="request-item">
                      <div className="request-title">Guest Parking Pass Request</div>
                      <div className="request-meta">General Request · Submitted Apr 3</div>
                      <span className="request-status pending">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Library */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Document Library</span>
              <h2>Every Community Document, Instantly Accessible</h2>
              <p>
                Upload your CC&Rs, bylaws, rules and regulations, meeting minutes, financial reports,
                and insurance certificates once — residents can access them anytime from their portal,
                no more email chains for documents.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Unlimited document storage</li>
                <li><span className="check-mark">✓</span> Organized by category & date</li>
                <li><span className="check-mark">✓</span> CC&Rs, bylaws, and rules & regulations</li>
                <li><span className="check-mark">✓</span> Board meeting minutes & agendas</li>
                <li><span className="check-mark">✓</span> Financial reports & budgets</li>
                <li><span className="check-mark">✓</span> Board-only restricted documents</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Document Library</div>
                <div className="mockup-body">
                  <div className="report-list">
                    <div className="report-item"><span className="report-icon">📄</span> CC&Rs — Sunset Ridge HOA (2023)</div>
                    <div className="report-item"><span className="report-icon">📋</span> Bylaws — Amended Jan 2024</div>
                    <div className="report-item"><span className="report-icon">📊</span> 2026 Annual Budget</div>
                    <div className="report-item"><span className="report-icon">📝</span> Board Meeting Minutes — Mar 2026</div>
                    <div className="report-item"><span className="report-icon">🏠</span> Architectural Guidelines</div>
                    <div className="report-item"><span className="report-icon">🔒</span> Rules & Regulations v3.1</div>
                    <div className="report-item"><span className="report-icon">📑</span> Insurance Certificate 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voting & Surveys */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Voting & Surveys</span>
              <h2>Run Board Elections and Community Surveys Digitally</h2>
              <p>
                Replace paper ballots with secure digital voting. Run board elections, bylaw amendment
                votes, and community surveys — with automatic quorum tracking, anonymous ballots,
                and instant results.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Secure digital ballot creation</li>
                <li><span className="check-mark">✓</span> Anonymous voting option</li>
                <li><span className="check-mark">✓</span> Automatic quorum tracking</li>
                <li><span className="check-mark">✓</span> Email & portal voting reminders</li>
                <li><span className="check-mark">✓</span> Real-time results dashboard</li>
                <li><span className="check-mark">✓</span> Audit trail for compliance</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Board Election 2026 — Live Results</div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <tbody>
                      <tr><td>Jennifer Martinez</td><td className="amount">87 votes (43%)</td></tr>
                      <tr><td>Robert Chen</td><td className="amount">72 votes (36%)</td></tr>
                      <tr><td>Sarah Kim</td><td className="amount">43 votes (21%)</td></tr>
                      <tr className="total-row"><td>Total Votes Cast</td><td className="amount">202 / 342</td></tr>
                      <tr><td style={{color:'#16a34a', fontSize:13}}>Quorum reached ✓</td><td className="amount" style={{color:'#16a34a'}}>59.1%</td></tr>
                    </tbody>
                  </table>
                  <div style={{marginTop: 12, fontSize: 13, color: '#888', textAlign: 'center'}}>
                    Voting closes April 15 · 140 owners have not yet voted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resale & Move-In */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Resale & Move-In</span>
              <h2>Seamless Owner Transitions, Zero Paperwork Chaos</h2>
              <p>
                When a home sells or a new resident moves in, HOA Alchemy handles the transition.
                Generate resale disclosure packages, transfer accounts, update ownership records,
                and send welcome packages — all from one place.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Resale disclosure package generation</li>
                <li><span className="check-mark">✓</span> Account transfer workflow</li>
                <li><span className="check-mark">✓</span> New owner welcome packet</li>
                <li><span className="check-mark">✓</span> Portal account provisioning</li>
                <li><span className="check-mark">✓</span> Move-in / move-out checklists</li>
                <li><span className="check-mark">✓</span> Ownership history per unit</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Resale Package — Unit 305</div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <tbody>
                      <tr><td>Current Balance</td><td className="amount" style={{color:'#16a34a'}}>$0.00 (Paid)</td></tr>
                      <tr><td>Open Violations</td><td className="amount">0</td></tr>
                      <tr><td>Monthly Assessment</td><td className="amount">$485.00</td></tr>
                      <tr><td>Special Assessments</td><td className="amount">None pending</td></tr>
                      <tr><td>Move-In Date</td><td className="amount">May 1, 2026</td></tr>
                      <tr className="total-row"><td>Package Status</td><td className="amount" style={{color:'#16a34a'}}>Ready ✓</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Residents Who Love the Portal = Less Work for Your Board"
        subtitle="When homeowners can self-serve, support calls drop by 60%. HOA Alchemy's resident portal makes community management easier for everyone."
        primaryText="Request a Demo"
        primaryLink="/contact"
        secondaryText="View Pricing"
        secondaryLink="/pricing"
      />

      <ExploreMoreFeatures />

      <AllFeaturesStrip />
      <Footer />
    </>
  );
}

export default FeatureResidentPortal;
