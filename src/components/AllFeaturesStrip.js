import Link from 'next/link';

const features = [
  {
    href: '/features/financial',
    label: 'Financial',
    desc: 'Invoicing, accounting, budgets & QuickBooks sync',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="14" rx="3" stroke="#6b2fa0" strokeWidth="1.6"/>
        <path d="M7 11h3M7 14h2" stroke="#6b2fa0" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M14 9v6M12 11h4" stroke="#8cb83a" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/features/management',
    label: 'Management',
    desc: 'Violations, work orders, vendors & inspections',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="#6b2fa0" strokeWidth="1.6"/>
        <path d="M7 8h8M7 11h5M7 14h6" stroke="#8cb83a" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/features/communications',
    label: 'Communications',
    desc: 'Email, SMS, phone broadcasts & AI chatbot',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2.5" stroke="#6b2fa0" strokeWidth="1.6"/>
        <path d="M5 8h8M5 11h5" stroke="#6b2fa0" strokeWidth="1.4" strokeLinecap="round"/>
        <rect x="7" y="11" width="13" height="8" rx="2" stroke="#8cb83a" strokeWidth="1.4"/>
        <circle cx="18" cy="8" r="3" fill="#8cb83a"/>
        <path d="M17 8h2M18 7v2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/features/integrations',
    label: 'Integrations',
    desc: 'QuickBooks, Twilio, Forte, Plaid & open API',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" stroke="#6b2fa0" strokeWidth="1.6"/>
        <path d="M11 4v4M11 14v4M4 11h4M14 11h4" stroke="#6b2fa0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="4" r="1.5" fill="#8cb83a"/>
        <circle cx="11" cy="18" r="1.5" fill="#8cb83a"/>
        <circle cx="4" cy="11" r="1.5" fill="#8cb83a"/>
        <circle cx="18" cy="11" r="1.5" fill="#8cb83a"/>
      </svg>
    ),
  },
  {
    href: '/features/field-ops',
    label: 'Field Ops',
    desc: 'Live GPS tracking, geofencing & route replay',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C8.24 2 6 4.24 6 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z" stroke="#6b2fa0" strokeWidth="1.6"/>
        <circle cx="11" cy="7" r="2" fill="#8cb83a"/>
        <path d="M4 17c0 0 2-1 7-1s7 1 7 1" stroke="#8cb83a" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="5" cy="14" r="1.2" fill="#6b2fa0" opacity="0.6"/>
        <circle cx="17" cy="13" r="1.2" fill="#6b2fa0" opacity="0.6"/>
      </svg>
    ),
  },
  {
    href: '/features/resident-portal',
    label: 'Resident Portal',
    desc: 'Payments, requests, documents & digital voting',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="3" stroke="#6b2fa0" strokeWidth="1.6"/>
        <path d="M5 18c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#6b2fa0" strokeWidth="1.6" strokeLinecap="round"/>
        <rect x="13" y="11" width="7" height="8" rx="1.5" stroke="#8cb83a" strokeWidth="1.3"/>
        <path d="M15 14h3M15 16h2" stroke="#8cb83a" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function AllFeaturesStrip() {
  return (
    <section className="all-features-strip">
      <div className="container">
        <span className="section-label">Everything You Need</span>
        <h2>One Platform. Every Feature Your Community Needs.</h2>
        <p className="strip-subtitle">
          From accounting to resident portals to live field tracking — HOA Alchemy replaces your entire software stack.
        </p>
        <div className="features-strip-grid">
          {features.map((f) => (
            <Link key={f.href} href={f.href} className="strip-feature-card">
              <div className="strip-feature-icon">{f.icon}</div>
              <div className="strip-feature-text">
                <h4>{f.label}</h4>
                <p>{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllFeaturesStrip;
