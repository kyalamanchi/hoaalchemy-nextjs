import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'HOA Alchemy — Modern Community Association Management Platform',
  description: 'Manage your community association with confidence using live location for onsite crews, financial transparency, and comprehensive HOA management tools.',
};

export default function Home() {
  const seoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HOA Alchemy',
    applicationCategory: 'BusinessApplication',
    description: 'Modern Community Association Management Platform with live location for onsite crews and comprehensive HOA management tools',
    url: 'https://www.hoaalchemy.com/',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Manage Your Community with Confidence</h1>
            <p className="lead">
              HOA Alchemy provides a comprehensive platform for modern community association management,
              featuring live location for onsite crews, financial transparency, and seamless resident communication.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Request a Demo
              </Link>
              <Link href="/features" className="btn btn-secondary btn-lg">
                See Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Communities</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Residents</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$2M+</div>
              <div className="stat-label">Saved</div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Grid Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Core Features</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="14" fill="#F3EAFF"/>
                  <path d="M28 14C22.48 14 18 18.48 18 24C18 31.5 28 42 28 42C28 42 38 31.5 38 24C38 18.48 33.52 14 28 14Z" fill="#7c3aed" opacity="0.15"/>
                  <path d="M28 16C23.58 16 20 19.58 20 24C20 29.94 28 39 28 39C28 39 36 29.94 36 24C36 19.58 32.42 16 28 16Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="28" cy="24" r="4" stroke="#7c3aed" strokeWidth="2"/>
                  <circle cx="28" cy="24" r="1.5" fill="#7c3aed"/>
                  <circle cx="28" cy="24" r="8" stroke="#7c3aed" strokeWidth="1" opacity="0.3" strokeDasharray="3 3"/>
                </svg>
              </div>
              <h3>Live Location</h3>
              <p>Track workers in real-time across your community</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="14" fill="#F3EAFF"/>
                  <rect x="14" y="18" width="28" height="20" rx="4" stroke="#7c3aed" strokeWidth="2" fill="#7c3aed" fillOpacity="0.08"/>
                  <path d="M20 26h10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 30h6" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                  <circle cx="37" cy="33" r="6" fill="#7c3aed" opacity="0.15"/>
                  <circle cx="37" cy="33" r="5" stroke="#7c3aed" strokeWidth="1.5"/>
                  <path d="M35 31l1.5 1.5L39.5 30" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 24h28" stroke="#7c3aed" strokeWidth="0.5" opacity="0.2"/>
                </svg>
              </div>
              <h3>Communications</h3>
              <p>Seamless messaging with residents and vendors</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="14" fill="#F3EAFF"/>
                  <rect x="16" y="20" width="24" height="18" rx="3" stroke="#7c3aed" strokeWidth="2" fill="#7c3aed" fillOpacity="0.08"/>
                  <rect x="22" y="16" width="12" height="6" rx="2" stroke="#7c3aed" strokeWidth="1.5" fill="white"/>
                  <path d="M28 16v-2" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M22 28h12" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                  <path d="M22 32h8" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                  <text x="28" y="30" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="700" fontFamily="system-ui">$</text>
                  <circle cx="37" cy="35" r="5" fill="white" stroke="#7c3aed" strokeWidth="1.5"/>
                  <path d="M37 32v6M34 35h6" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </div>
              <h3>Banking</h3>
              <p>Complete financial management and reporting</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="14" fill="#F3EAFF"/>
                  <rect x="15" y="22" width="26" height="18" rx="3" stroke="#7c3aed" strokeWidth="2" fill="#7c3aed" fillOpacity="0.08"/>
                  <path d="M28 16L15 22h26L28 16z" stroke="#7c3aed" strokeWidth="2" strokeLinejoin="round" fill="#7c3aed" fillOpacity="0.12"/>
                  <rect x="20" y="28" width="5" height="8" rx="1" stroke="#7c3aed" strokeWidth="1.5" fill="white"/>
                  <rect x="31" y="28" width="5" height="8" rx="1" stroke="#7c3aed" strokeWidth="1.5" fill="white"/>
                  <path d="M28 28v8" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                  <circle cx="28" cy="20" r="1.5" fill="#7c3aed" opacity="0.6"/>
                </svg>
              </div>
              <h3>Common Area</h3>
              <p>Manage amenities and shared spaces</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="14" fill="#F3EAFF"/>
                  <rect x="15" y="18" width="26" height="22" rx="3" stroke="#7c3aed" strokeWidth="2" fill="#7c3aed" fillOpacity="0.08"/>
                  <path d="M15 24h26" stroke="#7c3aed" strokeWidth="1.5"/>
                  <circle cx="21" cy="21" r="1" fill="#7c3aed"/>
                  <circle cx="25" cy="21" r="1" fill="#7c3aed" opacity="0.5"/>
                  <rect x="19" y="27" width="5" height="4" rx="1" fill="#7c3aed" opacity="0.2"/>
                  <rect x="26" y="27" width="5" height="4" rx="1" fill="#7c3aed" opacity="0.35"/>
                  <rect x="33" y="27" width="5" height="4" rx="1" fill="#7c3aed" opacity="0.15"/>
                  <rect x="19" y="33" width="5" height="4" rx="1" fill="#7c3aed" opacity="0.15"/>
                  <rect x="26" y="33" width="5" height="4" rx="1" fill="#7c3aed" opacity="0.2"/>
                  <rect x="33" y="33" width="5" height="4" rx="1" fill="#7c3aed" opacity="0.1"/>
                  <circle cx="28" cy="30" r="7" stroke="#7c3aed" strokeWidth="1" opacity="0" fill="none"/>
                </svg>
              </div>
              <h3>Vendor Calendar</h3>
              <p>Schedule and coordinate vendor services</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="14" fill="#F3EAFF"/>
                  <rect x="14" y="16" width="28" height="24" rx="4" stroke="#7c3aed" strokeWidth="2" fill="#7c3aed" fillOpacity="0.06"/>
                  <path d="M18 34l5-6 4 3 6-8 5 6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="23" cy="23" r="2.5" stroke="#7c3aed" strokeWidth="1.5" fill="#7c3aed" fillOpacity="0.2"/>
                  <path d="M14 30h28" stroke="#7c3aed" strokeWidth="0.5" opacity="0.15"/>
                  <path d="M14 26h28" stroke="#7c3aed" strokeWidth="0.5" opacity="0.1"/>
                  <circle cx="38" cy="20" r="4" fill="white" stroke="#7c3aed" strokeWidth="1.5"/>
                  <path d="M36.5 20h3M38 18.5v3" stroke="#7c3aed" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Community Mapping</h3>
              <p>Visual representation of your community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Location Feature Section */}
      <section className="feature-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-content">
              <h2>Live Location for Onsite Crew</h2>
              <p>
                See exactly where your maintenance crew, security personnel, and contractors are at any moment.
                When live location is enabled, associations save tens of thousands of dollars — or more — annually
                by eliminating overbilling, verifying service delivery, and holding vendors accountable.
              </p>
              <ul className="feature-list">
                <li>✓ Real-time GPS location</li>
                <li>✓ Crew status updates</li>
                <li>✓ Route optimization</li>
                <li>✓ Verified time-on-site reports</li>
                <li>✓ Mobile app integration</li>
              </ul>
              <Link href="/features" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="feature-visual">
              <div className="mockup-card">
                <div className="mockup-header">Active Workers</div>
                <div className="mockup-content">
                  <div className="worker-item">
                    <div className="worker-status online"></div>
                    <div className="worker-info">
                      <div className="worker-name">John's Crew</div>
                      <div className="worker-location">Building A - 2 min away</div>
                    </div>
                  </div>
                  <div className="worker-item">
                    <div className="worker-status online"></div>
                    <div className="worker-info">
                      <div className="worker-name">Sarah's Team</div>
                      <div className="worker-location">Pool Area - On site</div>
                    </div>
                  </div>
                  <div className="worker-item">
                    <div className="worker-status online"></div>
                    <div className="worker-info">
                      <div className="worker-name">Mike Security</div>
                      <div className="worker-location">Main Gate - On site</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Dashboard Feature Section */}
      <section className="feature-section alt">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-visual">
              <div className="mockup-card">
                <div className="mockup-header">Financial Summary</div>
                <div className="mockup-content">
                  <table className="balance-sheet">
                    <tbody>
                      <tr className="account-row">
                        <td className="label">Savings</td>
                        <td className="amount">$46,239.50</td>
                      </tr>
                      <tr className="account-row">
                        <td className="label">Checking</td>
                        <td className="amount">$59,128.33</td>
                      </tr>
                      <tr className="total-row">
                        <td className="label">Total Assets</td>
                        <td className="amount">$105,367.83</td>
                      </tr>
                      <tr className="equity-row">
                        <td className="label">Opening Balance</td>
                        <td className="amount">$4,009.35</td>
                      </tr>
                      <tr className="equity-row">
                        <td className="label">Retained Earnings</td>
                        <td className="amount">$56,208.01</td>
                      </tr>
                      <tr className="equity-row">
                        <td className="label">Net Income</td>
                        <td className="amount">$60,788.98</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="feature-content">
              <h2>Complete Financial Transparency</h2>
              <p>
                Get real-time insights into your community's financial health. Track budgets, expenses,
                and reserve funds with detailed reporting and forecasting tools.
              </p>
              <ul className="feature-list">
                <li>✓ Real-time account balances</li>
                <li>✓ Automated expense tracking</li>
                <li>✓ Budget forecasting</li>
                <li>✓ QuickBooks integration</li>
                <li>✓ Custom financial reports</li>
              </ul>
              <Link href="/features" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Communities Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "HOA Alchemy has transformed how we manage our community. The real-time tracking and
                financial transparency have made our board meetings so much more productive."
              </p>
              <div className="testimonial-author">
                <div className="author-name">Jennifer Martinez</div>
                <div className="author-role">HOA President, Sunset Ridge Community</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "As treasurer, I needed reliable financial reporting. HOA Alchemy provides exactly what we need
                with QuickBooks integration and detailed audit trails."
              </p>
              <div className="testimonial-author">
                <div className="author-name">Robert Chen</div>
                <div className="author-role">Treasurer, Oakmont HOA</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Managing resident communications and vendor schedules is so much easier now.
                The platform has reduced our administrative burden significantly."
              </p>
              <div className="testimonial-author">
                <div className="author-name">Sarah Kim</div>
                <div className="author-role">Community Manager, Waterfront Estates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Community?"
        subtitle="Join hundreds of HOAs already using HOA Alchemy to streamline management and improve resident satisfaction."
        primaryText="Request a Demo"
        primaryLink="/contact"
        secondaryText="View Pricing"
        secondaryLink="/pricing"
      />

      <AllFeaturesStrip />
      <Footer />
    </>
  );
}
