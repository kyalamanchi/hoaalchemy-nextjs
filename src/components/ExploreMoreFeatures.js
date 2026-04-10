'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const allFeatures = [
  {
    href: '/features/financial',
    label: 'Financial Management',
    desc: 'Invoicing, accounting, budgets, bank feeds, tax filing, and reserve forecasting.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="17" rx="3.5" stroke="#6b2fa0" strokeWidth="1.8"/>
        <path d="M9 13h4M9 17h3" stroke="#6b2fa0" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 11v7M16 14h4" stroke="#8cb83a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/features/management',
    label: 'Property Management',
    desc: 'Violations, work orders, vendor management, architectural requests, and inspections.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3.5" stroke="#6b2fa0" strokeWidth="1.8"/>
        <path d="M9 10h10M9 14h7M9 18h8" stroke="#8cb83a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/features/communications',
    label: 'Communications',
    desc: 'Mass email, SMS, phone broadcasts, message boards, AI chatbot, and website builder.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="5" width="17" height="12" rx="3" stroke="#6b2fa0" strokeWidth="1.8"/>
        <path d="M7 10h9M7 14h6" stroke="#6b2fa0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="23" cy="10" r="3.5" fill="#8cb83a"/>
        <path d="M22 10h2M23 9v2" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/features/integrations',
    label: 'Integrations',
    desc: 'QuickBooks, Twilio, Forte, Plaid, and an open REST API for custom connections.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="#6b2fa0" strokeWidth="1.8"/>
        <path d="M14 5v5M14 19v4M5 14h5M19 14h4" stroke="#6b2fa0" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="14" cy="5" r="2" fill="#8cb83a"/>
        <circle cx="14" cy="23" r="2" fill="#8cb83a"/>
        <circle cx="5" cy="14" r="2" fill="#8cb83a"/>
        <circle cx="23" cy="14" r="2" fill="#8cb83a"/>
      </svg>
    ),
  },
  {
    href: '/features/field-ops',
    label: 'Field Operations',
    desc: 'Live GPS tracking, breadcrumb trails, route replay, geofencing, and shift analytics.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C10.69 3 8 5.69 8 9c0 4.88 6 14 6 14s6-9.12 6-14c0-3.31-2.69-6-6-6z" stroke="#6b2fa0" strokeWidth="1.8"/>
        <circle cx="14" cy="9" r="2.5" fill="#8cb83a"/>
        <path d="M5 22c0 0 3-1.5 9-1.5s9 1.5 9 1.5" stroke="#8cb83a" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/features/resident-portal',
    label: 'Resident Portal',
    desc: 'Online payments, requests, document library, digital voting, and resale packages.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="#6b2fa0" strokeWidth="1.8"/>
        <path d="M6 24c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="#6b2fa0" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="17" y="14" width="9" height="10" rx="2" stroke="#8cb83a" strokeWidth="1.4"/>
        <path d="M19.5 18h4M19.5 21h3" stroke="#8cb83a" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function ExploreMoreFeatures() {
  const pathname = usePathname();
  const others = allFeatures.filter((f) => !pathname.startsWith(f.href));

  return (
    <section className="explore-more-section">
      <div className="container">
        <span className="section-label">Keep Exploring</span>
        <h2>Explore More Features</h2>
        <p className="explore-more-subtitle">
          HOA Alchemy is a complete platform. See what else it can do for your community.
        </p>
        <div className="explore-more-grid">
          {others.map((f) => (
            <Link key={f.href} href={f.href} className="explore-more-card">
              <div className="explore-more-icon">{f.icon}</div>
              <h4>{f.label}</h4>
              <p>{f.desc}</p>
              <span className="explore-more-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreMoreFeatures;
