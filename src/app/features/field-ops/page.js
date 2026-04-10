import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

function FeatureFieldOps() {
  const seoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Field Ops & Live Location Tracking - HOA Alchemy',
    description: 'The only HOA platform with real-time GPS live location for onsite crews, breadcrumb trails, route replay, geofencing, and segmented shift analytics.',
    url: 'https://www.hoaalchemy.com/features/field-ops',
  };

  return (
    <>
      <FeatureSubNav />

      {/* Hero */}
      <section className="feature-page-hero">
        <div className="container">
          <div className="feature-page-hero-content">
            <span className="feature-badge" style={{background:'#edfcd4', color:'#4a7c14'}}>
              HOA Alchemy Exclusive
            </span>
            <h1>The Only HOA Platform with Live Location for Onsite Crew</h1>
            <p className="lead">
              See exactly where every maintenance crew, landscaper, and security guard is — right now.
              When live location is enabled, associations save tens of thousands of dollars or more annually
              by verifying service delivery and eliminating overbilling.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">See Live Demo</Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">View Pricing</Link>
            </div>
            <p style={{marginTop: 16, fontSize: 14, color: '#888'}}>
              ✓ Not available in PayHOA &nbsp;·&nbsp; ✓ Not available in Buildium &nbsp;·&nbsp; ✓ Not available in Vantaca
            </p>
          </div>
        </div>
      </section>

      {/* Who's Working — Live Map */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Who's Working — Live Map</span>
              <h2>A Real-Time Bird's-Eye View of Your Entire Community</h2>
              <p>
                Open the HOA Alchemy dashboard and see every active worker pinned on your community map —
                color-coded by status, updated in near real time. No more chasing phone calls to find out
                if the landscaper showed up.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Live map updates every 30–60 seconds</li>
                <li><span className="check-mark">✓</span> Color-coded: On Site, En Route, Scheduled, Clocked Out</li>
                <li><span className="check-mark">✓</span> Tap any worker pin for name, task, and time on site</li>
                <li><span className="check-mark">✓</span> Works on desktop and mobile</li>
                <li><span className="check-mark">✓</span> Covers all vendors, staff, and contractors</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Live Map — Sunset Ridge Community</div>
                <div className="mockup-body">
                  <svg viewBox="0 0 300 200" className="trail-svg">
                    <rect width="300" height="200" fill="#f0fdf4" rx="6"/>
                    {/* Community road grid */}
                    <path d="M0 100 H300 M150 0 V200 M75 0 V200 M225 0 V200" stroke="#e5e7eb" strokeWidth="8"/>
                    {/* Buildings */}
                    <rect x="20" y="20" width="50" height="35" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
                    <text x="45" y="41" textAnchor="middle" fontSize="8" fill="#3b82f6">Bldg A</text>
                    <rect x="90" y="20" width="50" height="35" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
                    <text x="115" y="41" textAnchor="middle" fontSize="8" fill="#3b82f6">Bldg B</text>
                    <rect x="160" y="20" width="50" height="35" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
                    <text x="185" y="41" textAnchor="middle" fontSize="8" fill="#3b82f6">Pool</text>
                    <rect x="230" y="20" width="55" height="35" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
                    <text x="257" y="41" textAnchor="middle" fontSize="8" fill="#3b82f6">Bldg C</text>
                    <rect x="20" y="125" width="55" height="35" rx="3" fill="#fef9c3" stroke="#fde047" strokeWidth="1"/>
                    <text x="47" y="146" textAnchor="middle" fontSize="8" fill="#854d0e">Clubhouse</text>
                    <rect x="120" y="130" width="60" height="30" rx="3" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1"/>
                    <text x="150" y="149" textAnchor="middle" fontSize="8" fill="#9d174d">Parking</text>
                    <rect x="230" y="125" width="55" height="35" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
                    <text x="257" y="146" textAnchor="middle" fontSize="8" fill="#3b82f6">Bldg D</text>
                    {/* Worker pins */}
                    {/* Green - on site */}
                    <circle cx="45" cy="55" r="9" fill="#16a34a" stroke="white" strokeWidth="2"/>
                    <text x="45" y="59" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">J</text>
                    <circle cx="115" cy="55" r="9" fill="#16a34a" stroke="white" strokeWidth="2"/>
                    <text x="115" y="59" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">S</text>
                    <circle cx="257" cy="55" r="9" fill="#16a34a" stroke="white" strokeWidth="2"/>
                    <text x="257" y="59" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">M</text>
                    {/* Amber - en route */}
                    <circle cx="155" cy="100" r="9" fill="#f59e0b" stroke="white" strokeWidth="2"/>
                    <text x="155" y="104" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">G</text>
                    {/* Gray - scheduled */}
                    <circle cx="150" cy="155" r="9" fill="#9ca3af" stroke="white" strokeWidth="2"/>
                    <text x="150" y="159" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">E</text>
                    {/* Legend */}
                    <circle cx="22" cy="188" r="5" fill="#16a34a"/>
                    <text x="32" y="192" fontSize="7" fill="#374151">On Site (3)</text>
                    <circle cx="90" cy="188" r="5" fill="#f59e0b"/>
                    <text x="100" y="192" fontSize="7" fill="#374151">En Route (1)</text>
                    <circle cx="165" cy="188" r="5" fill="#9ca3af"/>
                    <text x="175" y="192" fontSize="7" fill="#374151">Scheduled (1)</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Trail */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Breadcrumb Trail</span>
              <h2>A Point-by-Point Record of Every Worker's Path</h2>
              <p>
                Every 150 feet of movement drops a GPS pin — with timestamp, speed, and location accuracy.
                You get an unbroken trail showing exactly where each worker traveled during their shift.
                Privacy-first: tracking only activates when a worker is clocked in.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> GPS pin every 150 ft of movement</li>
                <li><span className="check-mark">✓</span> Timestamp + speed at each breadcrumb</li>
                <li><span className="check-mark">✓</span> Click any pin for location accuracy details</li>
                <li><span className="check-mark">✓</span> Full shift trail downloadable as PDF</li>
                <li><span className="check-mark">✓</span> Only tracks when clocked in (privacy compliant)</li>
                <li><span className="check-mark">✓</span> 90-day history retained per worker</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Breadcrumb Trail — John's Crew, Today</div>
                <div className="mockup-body">
                  <svg viewBox="0 0 300 180" className="trail-svg">
                    <rect width="300" height="180" fill="#f0fdf4" rx="6"/>
                    <rect x="20" y="20" width="60" height="40" rx="4" fill="#e5e7eb" stroke="#d1d5db"/>
                    <text x="50" y="44" textAnchor="middle" fontSize="8" fill="#6b7280">Bldg A</text>
                    <rect x="120" y="25" width="50" height="30" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                    <text x="145" y="44" textAnchor="middle" fontSize="8" fill="#3b82f6">Pool</text>
                    <rect x="220" y="20" width="60" height="40" rx="4" fill="#e5e7eb" stroke="#d1d5db"/>
                    <text x="250" y="44" textAnchor="middle" fontSize="8" fill="#6b7280">Bldg C</text>
                    <rect x="100" y="110" width="80" height="35" rx="4" fill="#fef3c7" stroke="#fcd34d"/>
                    <text x="140" y="131" textAnchor="middle" fontSize="8" fill="#92400e">Clubhouse</text>
                    <path d="M50 60 L50 80 L80 90 L110 85 L145 55 L170 70 L200 90 L225 65 L255 60" stroke="#6b2fa0" strokeWidth="2.5" fill="none"/>
                    <circle cx="50" cy="60" r="5" fill="#16a34a" stroke="white" strokeWidth="1.5"/>
                    <circle cx="50" cy="80" r="3.5" fill="#6b2fa0"/>
                    <circle cx="80" cy="90" r="3.5" fill="#6b2fa0"/>
                    <circle cx="110" cy="85" r="3.5" fill="#6b2fa0"/>
                    <circle cx="145" cy="55" r="3.5" fill="#6b2fa0"/>
                    <circle cx="170" cy="70" r="3.5" fill="#6b2fa0"/>
                    <circle cx="200" cy="90" r="3.5" fill="#6b2fa0"/>
                    <circle cx="225" cy="65" r="3.5" fill="#6b2fa0"/>
                    <circle cx="255" cy="60" r="5" fill="#f59e0b" stroke="white" strokeWidth="1.5"/>
                    <text x="50" y="56" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="700">START</text>
                    <text x="255" y="56" textAnchor="middle" fontSize="7" fill="#f59e0b" fontWeight="700">NOW</text>
                    <text x="150" y="170" textAnchor="middle" fontSize="9" fill="#6b7280">8 GPS points · 2.3 mi · 42 min elapsed</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Replay */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Route Replay</span>
              <h2>Replay Any Shift, Minute by Minute</h2>
              <p>
                Dispute a vendor invoice? Investigate a complaint? Just hit replay. Route Replay
                animates the full breadcrumb trail on your community map so you can see exactly
                what happened, when, and how fast the worker was moving between each stop.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Animated map playback with play/pause/scrub</li>
                <li><span className="check-mark">✓</span> Speed and duration at every stop</li>
                <li><span className="check-mark">✓</span> Spot unauthorized detours or stops</li>
                <li><span className="check-mark">✓</span> Compare planned route vs actual path</li>
                <li><span className="check-mark">✓</span> Export as PDF proof-of-service report</li>
                <li><span className="check-mark">✓</span> Share replay link with board members</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Route Replay — GreenScape, Apr 3</div>
                <div className="mockup-body">
                  <div className="replay-timeline">
                    <div className="timeline-item">
                      <div className="timeline-time">8:02 AM</div>
                      <div className="timeline-dot start"></div>
                      <div className="timeline-content">
                        <strong>Clocked In — Main Gate</strong>
                        <span>GPS accuracy: ±3m</span>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-time">8:15 AM</div>
                      <div className="timeline-dot stop"></div>
                      <div className="timeline-content">
                        <strong>Building A — Lawn Service</strong>
                        <span>45 min on site · 0.8 mi driven</span>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-time">9:00 AM</div>
                      <div className="timeline-dot stop"></div>
                      <div className="timeline-content">
                        <strong>Pool Area — Hedges & Edging</strong>
                        <span>30 min on site · 0.3 mi driven</span>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-time">9:35 AM</div>
                      <div className="timeline-dot stop"></div>
                      <div className="timeline-content">
                        <strong>Clubhouse Garden Beds</strong>
                        <span>1 hr 10 min on site · 0.5 mi driven</span>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-time">10:45 AM</div>
                      <div className="timeline-dot end"></div>
                      <div className="timeline-content">
                        <strong>Clocked Out</strong>
                        <span>Total: 2 hr 43 min · 1.6 mi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geofencing */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Geofencing</span>
              <h2>Draw Boundaries — Get Automatic Alerts</h2>
              <p>
                Create geofence zones around your community, individual buildings, the pool, or the
                parking lot. HOA Alchemy alerts you instantly when workers enter or leave, and
                prevents vendors from clocking in before they arrive on property.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Draw custom circular or polygon zones</li>
                <li><span className="check-mark">✓</span> Instant entry & exit notifications</li>
                <li><span className="check-mark">✓</span> Auto clock-in prompt when entering zone</li>
                <li><span className="check-mark">✓</span> Block off-site clock-ins (stops time theft)</li>
                <li><span className="check-mark">✓</span> Multiple zones per community</li>
                <li><span className="check-mark">✓</span> Monthly geofence activity report</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Geofence Zones — Active</div>
                <div className="mockup-body">
                  <svg viewBox="0 0 300 180" className="trail-svg">
                    <rect width="300" height="180" fill="#faf5ff" rx="6"/>
                    <ellipse cx="80" cy="75" rx="58" ry="50" fill="#6b2fa0" fillOpacity="0.07" stroke="#6b2fa0" strokeWidth="1.5" strokeDasharray="6 3"/>
                    <text x="80" y="60" textAnchor="middle" fontSize="8" fill="#6b2fa0" fontWeight="700">Main Community</text>
                    <text x="80" y="71" textAnchor="middle" fontSize="7" fill="#9ca3af">500 ft radius</text>
                    <ellipse cx="220" cy="65" rx="42" ry="32" fill="#16a34a" fillOpacity="0.07" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="6 3"/>
                    <text x="220" y="60" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="700">Pool Zone</text>
                    <text x="220" y="71" textAnchor="middle" fontSize="7" fill="#9ca3af">200 ft</text>
                    <rect x="55" y="125" width="130" height="38" rx="19" fill="#f59e0b" fillOpacity="0.07" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 3"/>
                    <text x="120" y="148" textAnchor="middle" fontSize="8" fill="#d97706" fontWeight="700">Parking & Entry Gate</text>
                    <circle cx="70" cy="85" r="6" fill="#16a34a" stroke="white" strokeWidth="2"/>
                    <circle cx="220" cy="60" r="6" fill="#16a34a" stroke="white" strokeWidth="2"/>
                    <circle cx="165" cy="105" r="6" fill="#f59e0b" stroke="white" strokeWidth="2"/>
                    <circle cx="235" cy="148" r="6" fill="#dc2626" stroke="white" strokeWidth="2"/>
                    <rect x="200" y="135" width="90" height="18" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
                    <text x="245" y="147" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="600">⚠ Outside zone alert</text>
                    <circle cx="15" cy="172" r="4" fill="#16a34a"/><text x="24" y="176" fontSize="7" fill="#374151">On Site</text>
                    <circle cx="75" cy="172" r="4" fill="#f59e0b"/><text x="84" y="176" fontSize="7" fill="#374151">In Transit</text>
                    <circle cx="135" cy="172" r="4" fill="#dc2626"/><text x="144" y="176" fontSize="7" fill="#374151">Outside Zone</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmented Tracking */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Segmented Tracking</span>
              <h2>See Driving vs. Working vs. Idle — All in One Timeline</h2>
              <p>
                Every shift is automatically broken into segments: time driving between stops,
                time working at each location, and idle time. Spot inefficiencies, confirm
                service duration, and generate accurate mileage reports for reimbursement.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">✓</span> Automatic stop and drive detection</li>
                <li><span className="check-mark">✓</span> Time at each location calculated</li>
                <li><span className="check-mark">✓</span> Visual color-coded daily timeline</li>
                <li><span className="check-mark">✓</span> Mileage per segment (IRS-compliant)</li>
                <li><span className="check-mark">✓</span> Idle time flagging</li>
                <li><span className="check-mark">✓</span> Weekly & monthly summary reports</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Shift Segments — John's Crew, Today</div>
                <div className="mockup-body">
                  <div className="segment-timeline">
                    <div className="segment-bar">
                      <div className="segment working" style={{width:'30%'}}></div>
                      <div className="segment driving" style={{width:'8%'}}></div>
                      <div className="segment working" style={{width:'20%'}}></div>
                      <div className="segment driving" style={{width:'5%'}}></div>
                      <div className="segment idle" style={{width:'7%'}}></div>
                      <div className="segment working" style={{width:'25%'}}></div>
                      <div className="segment driving" style={{width:'5%'}}></div>
                    </div>
                    <div className="segment-legend">
                      <span><span className="legend-dot working"></span>Working (3h 10m)</span>
                      <span><span className="legend-dot driving"></span>Driving (18m)</span>
                      <span><span className="legend-dot idle"></span>Idle (15m)</span>
                    </div>
                    <div className="segment-stops">
                      <div className="segment-stop">
                        <div className="stop-time">8:00–9:15</div>
                        <div className="stop-name">Building A</div>
                        <div className="stop-miles">0.0 mi</div>
                      </div>
                      <div className="segment-stop">
                        <div className="stop-time">9:23–10:13</div>
                        <div className="stop-name">Pool Area</div>
                        <div className="stop-miles">0.4 mi</div>
                      </div>
                      <div className="segment-stop">
                        <div className="stop-time">10:28–11:33</div>
                        <div className="stop-name">Clubhouse</div>
                        <div className="stop-miles">0.7 mi</div>
                      </div>
                    </div>
                    <div className="segment-total">3 hr 43 min total · 1.6 mi · 3 stops</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings callout */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="savings-callout">
            <h2>Communities Save an Average of $18,000/Year with Live Tracking</h2>
            <p>When workers know they're being tracked, idle time drops by 34% and service completion rates rise by 28%. HOA Alchemy pays for itself.</p>
            <div className="savings-stats">
              <div className="savings-stat">
                <div className="savings-number">34%</div>
                <div className="savings-label">Less Idle Time</div>
              </div>
              <div className="savings-stat">
                <div className="savings-number">28%</div>
                <div className="savings-label">More Jobs Completed</div>
              </div>
              <div className="savings-stat">
                <div className="savings-number">$18K</div>
                <div className="savings-label">Avg. Annual Savings</div>
              </div>
              <div className="savings-stat">
                <div className="savings-number">100%</div>
                <div className="savings-label">Proof of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="See Live Tracking in Action"
        subtitle="Schedule a 20-minute demo and we'll show you the live map, breadcrumb trails, and route replay on your own community layout."
        primaryText="Book a Demo"
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

export default FeatureFieldOps;
