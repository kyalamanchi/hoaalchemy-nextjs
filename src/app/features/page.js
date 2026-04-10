'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import PageHeader from '@/components/PageHeader';

export default function Features() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Powerful Features for Modern Communities" />

      {/* Live Location Section */}
      <section className="feature-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-content">
              <h2>Live Location for Onsite Crew</h2>
              <p>
                See where every maintenance crew, security guard, and contractor is in real time.
                Associations that enable live location save tens of thousands of dollars or more annually
                by verifying service delivery and eliminating overbilling.
              </p>
              <ul className="feature-list">
                <li>✓ Real-time GPS location</li>
                <li>✓ Crew availability status</li>
                <li>✓ Verified time-on-site reports</li>
                <li>✓ Geofencing alerts</li>
                <li>✓ Mobile app synchronization</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>
            <div className="feature-visual">
              <div className="mockup-card">
                <div className="mockup-header">Community Map</div>
                <div className="mockup-content map-content">
                  <svg viewBox="0 0 300 250" className="map-svg">
                    <defs>
                      <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#f0f4f8', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#e0e8f0', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <rect width="300" height="250" fill="url(#mapGrad)" />
                    <rect x="30" y="20" width="80" height="60" fill="#d0d8e0" stroke="#999" strokeWidth="1" />
                    <text x="70" y="55" fontSize="10" textAnchor="middle" fill="#333">Building A</text>
                    <rect x="150" y="30" width="100" height="50" fill="#d0d8e0" stroke="#999" strokeWidth="1" />
                    <text x="200" y="60" fontSize="10" textAnchor="middle" fill="#333">Main Gate</text>
                    <circle cx="65" cy="120" r="8" fill="#4CAF50" stroke="#fff" strokeWidth="2" />
                    <text x="65" y="145" fontSize="9" textAnchor="middle" fill="#333">John</text>
                    <circle cx="195" cy="85" r="8" fill="#4CAF50" stroke="#fff" strokeWidth="2" />
                    <text x="195" y="110" fontSize="9" textAnchor="middle" fill="#333">Mike</text>
                    <rect x="100" y="180" width="110" height="50" fill="#b0d4e8" stroke="#666" strokeWidth="1" />
                    <text x="155" y="210" fontSize="10" textAnchor="middle" fill="#333">Pool Area</text>
                    <circle cx="155" cy="200" r="8" fill="#4CAF50" stroke="#fff" strokeWidth="2" />
                    <text x="155" y="230" fontSize="9" textAnchor="middle" fill="#333">Sarah</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communications Section */}
      <section className="feature-section alt">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-visual">
              <div className="mockup-card">
                <div className="mockup-header">Messaging</div>
                <div className="mockup-content phone-content">
                  <svg viewBox="0 0 200 400" className="phone-svg">
                    <defs>
                      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#f5f5f5', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <rect x="10" y="10" width="180" height="380" rx="15" fill="url(#phoneGrad)" stroke="#333" strokeWidth="2" />
                    <rect x="15" y="15" width="170" height="370" rx="12" fill="#fff" />

                    {/* Phone header */}
                    <rect x="15" y="15" width="170" height="30" fill="#f0f4f8" />
                    <text x="100" y="34" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#333">Messages</text>

                    {/* Chat messages */}
                    <rect x="25" y="55" width="110" height="20" rx="5" fill="#e3f2fd" />
                    <text x="30" y="67" fontSize="8" fill="#333">Hi, where are you?</text>

                    <rect x="45" y="85" width="120" height="20" rx="5" fill="#c8e6c9" />
                    <text x="50" y="97" fontSize="8" fill="#333">On the way, 5 mins!</text>

                    <rect x="25" y="115" width="140" height="20" rx="5" fill="#e3f2fd" />
                    <text x="30" y="127" fontSize="8" fill="#333">Pool issue reported</text>

                    <rect x="35" y="145" width="130" height="20" rx="5" fill="#c8e6c9" />
                    <text x="40" y="157" fontSize="8" fill="#333">Already checking it</text>

                    {/* Input area */}
                    <rect x="20" y="360" width="140" height="20" rx="3" fill="#f0f4f8" stroke="#ddd" strokeWidth="1" />
                    <text x="25" y="371" fontSize="8" fill="#999">Type message...</text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="feature-content">
              <h2>Unified Communications</h2>
              <p>
                Keep your community connected with instant messaging between residents, board members,
                and service providers. Reduce email clutter and improve response times.
              </p>
              <ul className="feature-list">
                <li>✓ Real-time messaging</li>
                <li>✓ Group communications</li>
                <li>✓ Notification management</li>
                <li>✓ Message history and search</li>
                <li>✓ Automated alerts</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reports Section */}
      <section className="feature-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-content">
              <h2>Advanced Financial Reporting</h2>
              <p>
                Generate detailed financial reports with comprehensive budget analysis, expense tracking,
                and reserve fund management. Full QuickBooks integration for seamless accounting.
              </p>
              <ul className="feature-list">
                <li>✓ Real-time financial dashboards</li>
                <li>✓ Budget vs. actual reporting</li>
                <li>✓ Expense categorization</li>
                <li>✓ Reserve fund analysis</li>
                <li>✓ Customizable reports</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>
            <div className="feature-visual">
              <div className="mockup-card">
                <div className="mockup-header">Financial Reports</div>
                <div className="mockup-content">
                  <div className="report-list-item">
                    <div className="report-title">Monthly P&L Statement</div>
                    <div className="report-meta">Generated: Apr 1</div>
                  </div>
                  <div className="report-list-item">
                    <div className="report-title">Budget Variance Report</div>
                    <div className="report-meta">Generated: Apr 2</div>
                  </div>
                  <div className="report-list-item">
                    <div className="report-title">Reserve Fund Analysis</div>
                    <div className="report-meta">Generated: Apr 3</div>
                  </div>
                  <div className="report-list-item">
                    <div className="report-title">Expense Summary</div>
                    <div className="report-meta">Generated: Apr 4</div>
                  </div>
                  <div className="report-list-item">
                    <div className="report-title">Account Balance Sheet</div>
                    <div className="report-meta">Generated: Apr 5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="values-section alt">
        <div className="container">
          <h2 className="section-title">All Available Features</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏢</div>
              <h3>Common Area Management</h3>
              <p>Schedule and manage community amenities with ease</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📋</div>
              <h3>Vendor Calendar</h3>
              <p>Coordinate contractor and service provider schedules</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🗺️</div>
              <h3>Community Mapping</h3>
              <p>Visual mapping of properties and facilities</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔔</div>
              <h3>Smart Notifications</h3>
              <p>Customizable alerts for important community events</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Resident Portal</h3>
              <p>Self-service portal for community members</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Board Portal</h3>
              <p>Secure platform for board member collaboration</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📄</div>
              <h3>Document Management</h3>
              <p>Centralized storage for community documents</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔧</div>
              <h3>Maintenance Requests</h3>
              <p>Streamlined work order and request tracking</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>iOS and Android apps for on-the-go management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">How We Compare</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>HOA Alchemy</th>
                  <th>PayHOA</th>
                  <th>Buildium</th>
                  <th>Vantaca</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Live Location for Onsite Crew</td>
                  <td className="check">✓</td>
                  <td className="cross">✗</td>
                  <td className="cross">✗</td>
                  <td className="cross">✗</td>
                </tr>
                <tr>
                  <td className="feature-name">Real-Time Communications</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td className="feature-name">QuickBooks Integration</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="cross">✗</td>
                </tr>
                <tr>
                  <td className="feature-name">Financial Dashboards</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td className="feature-name">Vendor Management</td>
                  <td className="check">✓</td>
                  <td className="cross">✗</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td className="feature-name">Mobile Apps</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td className="feature-name">Community Mapping</td>
                  <td className="check">✓</td>
                  <td className="cross">✗</td>
                  <td className="cross">✗</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td className="feature-name">Document Management</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Get Started?"
        subtitle="Experience the power of HOA Alchemy with a free demo customized for your community."
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
