import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

function FeatureManagement() {
  const seoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Management Features - HOA Alchemy',
    description: 'Complete HOA management with live location for onsite crews, architectural requests, violations, work orders, and vendor management.',
    url: 'https://www.hoaalchemy.com/features/management',
  };

  return (
    <>
      <FeatureSubNav />

      {/* Hero */}
      <section className="feature-page-hero">
        <div className="container">
          <div className="feature-page-hero-content">
            <span className="feature-badge">Management</span>
            <h1>Run Your Community Like a Well-Oiled Machine</h1>
            <p className="lead">
              From live location for onsite crews and architectural reviews to violation enforcement
              and vendor coordination — everything your board needs in one place.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Location for Onsite Crew */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Live Location</span>
              <h2>Know Exactly Where Your Onsite Crew Is, In Real Time</h2>
              <p>
                See every maintenance crew, landscaper, and contractor on a live map. Residents can
                track scheduled repairs — from landscaping to concrete work — and reach the crew
                directly. Boards save tens of thousands annually by verifying every hour billed.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Real-time GPS location on a community map</li>
                <li><span className="check-mark">&#10003;</span> Crew check-in / check-out timestamps</li>
                <li><span className="check-mark">&#10003;</span> Route history & time-on-site reporting</li>
                <li><span className="check-mark">&#10003;</span> Geofence alerts for entry & exit</li>
                <li><span className="check-mark">&#10003;</span> Mobile app for onsite crews</li>
                <li><span className="check-mark">&#10003;</span> Proof-of-service documentation</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div style={{ maxWidth: '520px', width: '100%', borderRadius: '16px', boxShadow: '0 8px 40px rgba(0,0,0,0.10)', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                {/* Satellite Map with Geofence — Okemos, MI */}
                <div style={{ position: 'relative', height: '300px', background: 'linear-gradient(135deg, #2d5016 0%, #3a6b1e 25%, #4a7c2e 50%, #5a8d3e 75%, #3a6b1e 100%)', overflow: 'hidden' }}>
                  {/* Simulated aerial view — roads */}
                  <div style={{ position: 'absolute', top: '88%', left: 0, right: 0, height: '3px', backgroundColor: 'rgba(200,200,200,0.4)' }}></div>
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: '78%', width: '3px', backgroundColor: 'rgba(200,200,200,0.35)' }}></div>
                  {/* Houses in community */}
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
                    {[...Array(16)].map((_, i) => (
                      <div key={i} style={{
                        position: 'absolute',
                        width: `${18 + (i % 3) * 8}px`,
                        height: `${16 + (i % 2) * 6}px`,
                        backgroundColor: i % 4 === 0 ? '#8B4513' : i % 4 === 1 ? '#A0522D' : i % 4 === 2 ? '#CD853F' : '#6B3A2A',
                        borderRadius: '1px',
                        top: `${12 + (i * 16) % 65}%`,
                        left: `${5 + (i * 19) % 60}%`,
                        transform: `rotate(${(i * 12) % 40}deg)`,
                      }} />
                    ))}
                  </div>
                  {/* Blue geofence boundary */}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 520 300" preserveAspectRatio="none">
                    <path d="M35,250 L25,130 L50,45 L170,20 L310,25 L370,75 L350,190 L270,265 L110,275 Z"
                      fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="3" strokeLinejoin="round" />
                  </svg>
                  {/* Crew location pins */}
                  <div style={{ position: 'absolute', top: '32%', left: '22%', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#3b82f6', border: '3px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}></div>
                  <div style={{ position: 'absolute', top: '52%', left: '42%', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#22c55e', border: '3px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}></div>
                  {/* Street labels */}
                  <span style={{ position: 'absolute', bottom: '4%', left: '22%', fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', letterSpacing: '0.5px' }}>Hamilton Rd</span>
                  <span style={{ position: 'absolute', top: '50%', left: '5%', fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', letterSpacing: '0.5px', transform: 'rotate(-90deg)', transformOrigin: 'left center' }}>Danbury Way</span>
                  <span style={{ position: 'absolute', top: '30%', right: '15%', fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', letterSpacing: '0.5px', transform: 'rotate(-70deg)' }}>Washington Heights Ave</span>
                  {/* Location badge */}
                  <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: '6px', padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '11px', color: '#fff', fontWeight: '500' }}>📍 Okemos, MI</span>
                  </div>
                  {/* Crew Route control bar */}
                  <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#fff', borderRadius: '8px', padding: '8px 20px', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
                    <span style={{ fontSize: '16px', color: '#333', cursor: 'pointer' }}>▶</span>
                    <span style={{ fontSize: '16px', color: '#333', cursor: 'pointer' }}>↺</span>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>Crew Route</span>
                  </div>
                </div>
                {/* Staff Check-ins Panel */}
                <div style={{ backgroundColor: '#fff', padding: '24px 28px' }}>
                  <div style={{ fontWeight: '700', fontSize: '16px', color: '#1e293b', marginBottom: '16px' }}>Staff Check-ins (1)</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', borderRadius: '10px', border: '1px solid #e5e7eb', backgroundColor: '#fafafa' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '20px', color: '#3b82f6' }}>👤</span>
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '15px', color: '#1e293b' }}>Tim Paul</div>
                      <div style={{ fontSize: '13px', color: '#64748b' }}>Total Work Time: 0h 21m</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Replay */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Geofence &amp; Route Replay</span>
              <h2>Only Time Inside the Geofence Counts</h2>
              <p>
                Every association gets a geofence — a virtual boundary around the community. Only time
                spent inside that boundary is counted toward billable association work. Crew members leave
                a GPS heat trail as they move through the property, and boards can replay the full route
                to verify exactly where time was spent.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Geofenced billing — only time inside community boundaries counts toward association work</li>
                <li><span className="check-mark">&#10003;</span> Auto-replay route with heat map trail showing every street and area serviced</li>
                <li><span className="check-mark">&#10003;</span> Breadcrumb trail of vendors servicing the location — see where everyone is or has been</li>
                <li><span className="check-mark">&#10003;</span> Improve coordination — vendors get real-time feedback from residents and board members while work is in progress</li>
                <li><span className="check-mark">&#10003;</span> Privacy-first — location enabled only upon check-in, resident phone numbers never visible to contractors or vice versa</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div style={{ maxWidth: '540px', width: '100%', borderRadius: '16px', boxShadow: '0 8px 40px rgba(0,0,0,0.10)', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                {/* Header bar — mimics the app */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
                  <span style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '500' }}>‹ Calendar</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>Crew Member 1 ▾</span>
                  <span style={{ width: '40px' }}></span>
                </div>
                {/* Map with geofence + route — Okemos, MI */}
                <div style={{ position: 'relative', height: '340px', overflow: 'hidden' }}>
                  {/* Google Maps embed — Danbury/Hamilton area, Okemos MI satellite view */}
                  <iframe
                    title="Crew Route Map — Okemos, MI"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1800!2d-84.4275!3d42.7055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus"
                    style={{ position: 'absolute', inset: '-60px -30px', width: 'calc(100% + 60px)', height: 'calc(100% + 120px)', border: 'none', pointerEvents: 'none', filter: 'saturate(1.1) brightness(0.95)' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* SVG overlay — geofence + route */}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }} viewBox="0 0 540 340">
                    {/* ── GEOFENCE BOUNDARY ── dark bold line matching your screenshot */}
                    <path d="M20,300 L20,130 L40,60 L100,35 L300,25 L350,40 L350,300 Z"
                      fill="rgba(0,0,0,0.06)" stroke="#222" strokeWidth="3" strokeLinejoin="round" />
                    {/* Outside-geofence dim overlay — left side outside */}
                    <path d="M0,0 L0,340 L20,340 L20,300 L20,130 L40,60 L100,35 L300,25 L350,40 L350,300 L350,340 L540,340 L540,0 Z"
                      fill="rgba(255,255,255,0.35)" />

                    {/* ── HEAT TRAIL ROUTE — follows streets inside geofence ── */}
                    {/* The route traces rectangular blocks like your screenshot shows */}
                    <path d="M60,70 L60,120 L140,120 L140,70 L200,70 L200,120 L140,120
                             L140,160 L200,160 L200,200 L260,200 L260,160 L320,160 L320,120 L260,120 L260,70 L320,70 L320,120
                             L320,160 L320,200 L260,200 L260,250 L320,250 L320,290 L260,290 L260,250
                             L200,250 L200,290 L140,290 L140,250 L80,250 L80,200"
                      stroke="rgba(255,50,0,0.6)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"
                      strokeDasharray="3200" strokeDashoffset="3200">
                      <animate attributeName="stroke-dashoffset" from="3200" to="0" dur="10s" repeatCount="indefinite" />
                    </path>
                    {/* Glow layer */}
                    <path d="M60,70 L60,120 L140,120 L140,70 L200,70 L200,120 L140,120
                             L140,160 L200,160 L200,200 L260,200 L260,160 L320,160 L320,120 L260,120 L260,70 L320,70 L320,120
                             L320,160 L320,200 L260,200 L260,250 L320,250 L320,290 L260,290 L260,250
                             L200,250 L200,290 L140,290 L140,250 L80,250 L80,200"
                      stroke="rgba(255,200,0,0.2)" strokeWidth="18" fill="none" strokeLinecap="round" strokeLinejoin="round"
                      strokeDasharray="3200" strokeDashoffset="3200">
                      <animate attributeName="stroke-dashoffset" from="3200" to="0" dur="10s" repeatCount="indefinite" />
                    </path>

                    {/* Moving crew dot */}
                    <circle r="7" fill="#22c55e" stroke="#fff" strokeWidth="2.5">
                      <animateMotion dur="10s" repeatCount="indefinite"
                        path="M60,70 L60,120 L140,120 L140,70 L200,70 L200,120 L140,120
                               L140,160 L200,160 L200,200 L260,200 L260,160 L320,160 L320,120 L260,120 L260,70 L320,70 L320,120
                               L320,160 L320,200 L260,200 L260,250 L320,250 L320,290 L260,290 L260,250
                               L200,250 L200,290 L140,290 L140,250 L80,250 L80,200" />
                    </circle>

                    {/* Time stamps */}
                    <circle cx="60" cy="70" r="5" fill="#16a34a" stroke="#fff" strokeWidth="2" />
                    <rect x="68" y="60" width="48" height="16" rx="4" fill="rgba(0,0,0,0.75)" />
                    <text x="92" y="72" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">8:00 AM</text>

                    <circle cx="200" cy="120" r="4" fill="#6b2fa0" stroke="#fff" strokeWidth="1.5" />
                    <rect x="208" y="112" width="48" height="16" rx="4" fill="rgba(0,0,0,0.75)" />
                    <text x="232" y="124" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">9:00 AM</text>

                    <circle cx="260" cy="70" r="4" fill="#6b2fa0" stroke="#fff" strokeWidth="1.5" />
                    <rect x="268" y="60" width="55" height="16" rx="4" fill="rgba(0,0,0,0.75)" />
                    <text x="295" y="72" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">10:00 AM</text>

                    <circle cx="320" cy="200" r="4" fill="#6b2fa0" stroke="#fff" strokeWidth="1.5" />
                    <rect x="255" y="205" width="55" height="16" rx="4" fill="rgba(0,0,0,0.75)" />
                    <text x="282" y="217" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">11:00 AM</text>

                    <circle cx="320" cy="290" r="4" fill="#6b2fa0" stroke="#fff" strokeWidth="1.5" />
                    <rect x="255" y="295" width="55" height="16" rx="4" fill="rgba(0,0,0,0.75)" />
                    <text x="282" y="307" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">12:00 PM</text>

                    <circle cx="80" cy="200" r="5" fill="#dc2626" stroke="#fff" strokeWidth="2" />
                    <rect x="88" y="192" width="48" height="16" rx="4" fill="rgba(0,0,0,0.75)" />
                    <text x="112" y="204" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">1:00 PM</text>
                  </svg>
                  {/* Billable Zone callout */}
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '8px', padding: '6px 12px', zIndex: 3, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', border: '2px solid #fff', borderRadius: '2px', backgroundColor: 'transparent' }}></div>
                    <span style={{ fontSize: '11px', color: '#fff', fontWeight: '500' }}>Geofence — only time inside counts</span>
                  </div>
                  {/* Location badge */}
                  <div style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '6px', padding: '4px 10px', zIndex: 3 }}>
                    <span style={{ fontSize: '11px', color: '#fff', fontWeight: '500' }}>📍 Okemos, MI</span>
                  </div>
                </div>
                {/* Timeline footer */}
                <div style={{ backgroundColor: '#fff', padding: '16px 20px', borderTop: '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', animation: 'pulse 2s infinite' }}></div>
                      <span style={{ fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>Crew Member 1</span>
                    </div>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Total: 5h 0m on site</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: '#e5e7eb', overflow: 'hidden' }}>
                      <div style={{ height: '100%', borderRadius: '2px', background: 'linear-gradient(90deg, #22c55e, #f59e0b, #ef4444)', animation: 'routeProgress 10s linear infinite' }}></div>
                    </div>
                    <span style={{ fontSize: '11px', color: '#94a3b8', whiteSpace: 'nowrap' }}>auto-replay</span>
                  </div>
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
              <h2>Replay Any Worker's Shift, Step by Step</h2>
              <p>
                Review exactly where a worker went and how long they spent at each stop.
                Route Replay animates the breadcrumb trail on a map — perfect for verifying
                proof of service, investigating complaints, or optimizing routes.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Animated route playback on the map</li>
                <li><span className="check-mark">&#10003;</span> Play, pause, fast-forward controls</li>
                <li><span className="check-mark">&#10003;</span> Speed & duration at each stop</li>
                <li><span className="check-mark">&#10003;</span> Spot unauthorized stops or detours</li>
                <li><span className="check-mark">&#10003;</span> Export replay as proof-of-service report</li>
                <li><span className="check-mark">&#10003;</span> Compare planned vs. actual routes</li>
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
                        <strong>Clocked In</strong>
                        <span>Main Gate Entry</span>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-time">8:15 AM</div>
                      <div className="timeline-dot stop"></div>
                      <div className="timeline-content">
                        <strong>Building A — Lawn</strong>
                        <span>45 min — 0.8 mi driven</span>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-time">9:00 AM</div>
                      <div className="timeline-dot stop"></div>
                      <div className="timeline-content">
                        <strong>Pool Area — Hedges</strong>
                        <span>30 min — 0.3 mi driven</span>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-time">9:30 AM</div>
                      <div className="timeline-dot stop"></div>
                      <div className="timeline-content">
                        <strong>Clubhouse — Garden Beds</strong>
                        <span>1 hr 15 min — 0.5 mi driven</span>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-time">10:45 AM</div>
                      <div className="timeline-dot end"></div>
                      <div className="timeline-content">
                        <strong>Clocked Out</strong>
                        <span>Total: 2 hr 43 min — 1.6 mi</span>
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
              <h2>Draw Boundaries, Get Alerts Automatically</h2>
              <p>
                Set up geofences around your community, specific buildings, or job sites.
                HOA Alchemy sends automatic alerts when workers enter or leave, prevents off-site
                clock-ins, and gives you a clear record of who was where, when.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Draw custom circular or polygon geofences</li>
                <li><span className="check-mark">&#10003;</span> Auto clock-in/out reminders at boundaries</li>
                <li><span className="check-mark">&#10003;</span> Prevent off-site clock-ins (anti-buddy-punch)</li>
                <li><span className="check-mark">&#10003;</span> Entry & exit notifications for managers</li>
                <li><span className="check-mark">&#10003;</span> Multiple geofences per community</li>
                <li><span className="check-mark">&#10003;</span> Geofence activity reports</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Geofences — Sunset Ridge Community</div>
                <div className="mockup-body">
                  <div className="geofence-map">
                    <svg viewBox="0 0 300 180" className="trail-svg">
                      <rect width="300" height="180" fill="#faf5ff" rx="6"/>
                      {/* Geofence zones */}
                      <ellipse cx="80" cy="70" rx="55" ry="45" fill="#7c3aed" fillOpacity="0.08" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 3"/>
                      <text x="80" y="55" textAnchor="middle" fontSize="8" fill="#7c3aed" fontWeight="600">Main Community</text>
                      <text x="80" y="65" textAnchor="middle" fontSize="7" fill="#9ca3af">Radius: 500 ft</text>
                      <ellipse cx="220" cy="60" rx="40" ry="30" fill="#16a34a" fillOpacity="0.08" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="6 3"/>
                      <text x="220" y="57" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="600">Pool Zone</text>
                      <text x="220" y="67" textAnchor="middle" fontSize="7" fill="#9ca3af">Radius: 200 ft</text>
                      <rect x="60" y="120" width="120" height="40" rx="20" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 3"/>
                      <text x="120" y="143" textAnchor="middle" fontSize="8" fill="#f59e0b" fontWeight="600">Parking & Gate Area</text>
                      {/* Worker dots */}
                      <circle cx="70" cy="80" r="5" fill="#16a34a" stroke="white" strokeWidth="2"/>
                      <circle cx="225" cy="55" r="5" fill="#16a34a" stroke="white" strokeWidth="2"/>
                      <circle cx="160" cy="100" r="5" fill="#f59e0b" stroke="white" strokeWidth="2"/>
                      {/* Legend */}
                      <circle cx="25" cy="170" r="3" fill="#16a34a"/><text x="32" y="173" fontSize="7" fill="#6b7280">On Site</text>
                      <circle cx="80" cy="170" r="3" fill="#f59e0b"/><text x="87" y="173" fontSize="7" fill="#6b7280">In Transit</text>
                      <circle cx="140" cy="170" r="3" fill="#dc2626"/><text x="147" y="173" fontSize="7" fill="#6b7280">Outside Zone</text>
                    </svg>
                  </div>
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
              <h2>Break Down Every Shift Into Meaningful Segments</h2>
              <p>
                See how each worker's day breaks down: which buildings they visited, how long
                they spent at each, how many miles they drove between stops. Segmented tracking
                gives you a single visual timeline that shows driving vs. working vs. idle time.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Automatic stop detection & segmentation</li>
                <li><span className="check-mark">&#10003;</span> Time at each location calculated</li>
                <li><span className="check-mark">&#10003;</span> Driving distance & speed between stops</li>
                <li><span className="check-mark">&#10003;</span> Visual daily timeline per worker</li>
                <li><span className="check-mark">&#10003;</span> Idle time & gap detection</li>
                <li><span className="check-mark">&#10003;</span> Mileage reports for reimbursement</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Daily Segments — John's Crew, Apr 4</div>
                <div className="mockup-body">
                  <div className="segment-timeline">
                    <div className="segment-bar">
                      <div className="segment working" style={{width: '30%'}} title="Building A — 1hr 15min"></div>
                      <div className="segment driving" style={{width: '8%'}} title="Driving — 8 min"></div>
                      <div className="segment working" style={{width: '20%'}} title="Pool Area — 50 min"></div>
                      <div className="segment driving" style={{width: '5%'}} title="Driving — 5 min"></div>
                      <div className="segment idle" style={{width: '7%'}} title="Break — 15 min"></div>
                      <div className="segment working" style={{width: '25%'}} title="Clubhouse — 1hr 5min"></div>
                      <div className="segment driving" style={{width: '5%'}} title="Driving — 5 min"></div>
                    </div>
                    <div className="segment-legend">
                      <span><span className="legend-dot working"></span> Working (3 hr 10 min)</span>
                      <span><span className="legend-dot driving"></span> Driving (18 min)</span>
                      <span><span className="legend-dot idle"></span> Idle (15 min)</span>
                    </div>
                    <div className="segment-stops">
                      <div className="segment-stop">
                        <div className="stop-time">8:00–9:15 AM</div>
                        <div className="stop-name">Building A</div>
                        <div className="stop-miles">0.0 mi</div>
                      </div>
                      <div className="segment-stop">
                        <div className="stop-time">9:23–10:13 AM</div>
                        <div className="stop-name">Pool Area</div>
                        <div className="stop-miles">0.4 mi</div>
                      </div>
                      <div className="segment-stop">
                        <div className="stop-time">10:28–11:33 AM</div>
                        <div className="stop-name">Clubhouse</div>
                        <div className="stop-miles">0.7 mi</div>
                      </div>
                    </div>
                    <div className="segment-total">Total: 3 hr 43 min — 1.6 mi — 3 stops</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Requests */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Architectural Requests</span>
              <h2>Streamlined Reviews from Submission to Approval</h2>
              <p>
                Residents submit architectural modification requests through their portal with
                photos, drawings, and descriptions. Requests are automatically routed to the
                right committee members for review, and owners get notified at every step.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Custom request forms with required fields</li>
                <li><span className="check-mark">&#10003;</span> Photo & document upload</li>
                <li><span className="check-mark">&#10003;</span> Multi-step approval workflows</li>
                <li><span className="check-mark">&#10003;</span> Committee routing & assignment</li>
                <li><span className="check-mark">&#10003;</span> Status tracking for homeowners</li>
                <li><span className="check-mark">&#10003;</span> Approval history & audit log</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Recent Requests</div>
                <div className="mockup-body">
                  <div className="request-list">
                    <div className="request-item">
                      <div className="request-title">Fence Replacement — Unit 204</div>
                      <div className="request-meta">Submitted Mar 28</div>
                      <span className="request-status approved">Approved</span>
                    </div>
                    <div className="request-item">
                      <div className="request-title">Patio Extension — Unit 118</div>
                      <div className="request-meta">Submitted Apr 1</div>
                      <span className="request-status review">In Review</span>
                    </div>
                    <div className="request-item">
                      <div className="request-title">Solar Panels — Unit 305</div>
                      <div className="request-meta">Submitted Apr 2</div>
                      <span className="request-status pending">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Violations */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Violations</span>
              <h2>Consistent Enforcement with Complete Transparency</h2>
              <p>
                Document violations with photos, track the full history per unit, and automate
                escalation workflows. Send notices via email, text, or USPS mail directly
                from HOA Alchemy with delivery confirmation.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Photo documentation & evidence</li>
                <li><span className="check-mark">&#10003;</span> Full violation history per property</li>
                <li><span className="check-mark">&#10003;</span> Automated escalation & fine schedule</li>
                <li><span className="check-mark">&#10003;</span> Send notices via email, SMS, or USPS</li>
                <li><span className="check-mark">&#10003;</span> Delivery confirmation & tracking</li>
                <li><span className="check-mark">&#10003;</span> Appeal process management</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Violation Tracker</div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <tbody>
                      <tr><td>Open Violations</td><td className="amount" style={{color: '#dc2626'}}>7</td></tr>
                      <tr><td>Pending Response</td><td className="amount" style={{color: '#f59e0b'}}>3</td></tr>
                      <tr><td>Resolved This Month</td><td className="amount" style={{color: '#16a34a'}}>12</td></tr>
                      <tr><td>Notices Mailed</td><td className="amount">4</td></tr>
                      <tr className="total-row"><td>Total This Year</td><td className="amount">84</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Orders */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Work Orders & Maintenance</span>
              <h2>From Request to Resolution, All in One Place</h2>
              <p>
                Residents submit maintenance requests through their portal. Managers assign them
                to vendors or in-house staff, track progress, and close the loop — with the
                resident getting notified every step of the way.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Resident-submitted work requests</li>
                <li><span className="check-mark">&#10003;</span> Custom request categories & forms</li>
                <li><span className="check-mark">&#10003;</span> Vendor & staff assignment</li>
                <li><span className="check-mark">&#10003;</span> Priority levels & SLA tracking</li>
                <li><span className="check-mark">&#10003;</span> Photo before/after documentation</li>
                <li><span className="check-mark">&#10003;</span> Completion confirmation & feedback</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Work Orders — This Week</div>
                <div className="mockup-body">
                  <div className="request-list">
                    <div className="request-item">
                      <div className="request-title">Pool Pump Repair</div>
                      <div className="request-meta">Assigned: Elite Plumbing</div>
                      <span className="request-status review">In Progress</span>
                    </div>
                    <div className="request-item">
                      <div className="request-title">Hallway Light Replacement — Bldg C</div>
                      <div className="request-meta">Assigned: Maintenance Team</div>
                      <span className="request-status approved">Completed</span>
                    </div>
                    <div className="request-item">
                      <div className="request-title">Parking Gate Sensor</div>
                      <div className="request-meta">Unassigned</div>
                      <span className="request-status pending">New</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Management */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Vendor Management</span>
              <h2>Your Entire Vendor Ecosystem, Organized</h2>
              <p>
                Maintain a directory of all vendors with contact info, contracts, insurance certificates,
                and W-9s. Track invoices, manage payments, and coordinate schedules — all tied back
                to your community's calendar and live tracking map.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Vendor directory with full profiles</li>
                <li><span className="check-mark">&#10003;</span> Contract & insurance tracking</li>
                <li><span className="check-mark">&#10003;</span> W-9 collection & 1099 prep</li>
                <li><span className="check-mark">&#10003;</span> Invoice scanning with OCR</li>
                <li><span className="check-mark">&#10003;</span> Vendor scheduling & calendar integration</li>
                <li><span className="check-mark">&#10003;</span> Performance ratings & history</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Vendor Directory</div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <tbody>
                      <tr><td>GreenScape Landscaping</td><td className="amount" style={{color: '#16a34a'}}>Active</td></tr>
                      <tr><td>Elite Plumbing Co.</td><td className="amount" style={{color: '#16a34a'}}>Active</td></tr>
                      <tr><td>SecureWatch Security</td><td className="amount" style={{color: '#16a34a'}}>Active</td></tr>
                      <tr><td>BrightStar Electric</td><td className="amount" style={{color: '#f59e0b'}}>Contract Expiring</td></tr>
                      <tr><td>CleanPro Janitorial</td><td className="amount" style={{color: '#16a34a'}}>Active</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="See Live Tracking in Action"
        subtitle="HOA Alchemy is the only HOA platform with real-time worker location tracking. Schedule a demo to see it live."
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

export default FeatureManagement;
