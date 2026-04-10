'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const featureLinks = [
  { href: '/features/financial', label: 'Financial', icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M5 8h2M5 10.5h1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M10.5 7v4M9 9h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  )},
  { href: '/features/management', label: 'Management', icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M5 6h6M5 8h4M5 10h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  )},
  { href: '/features/communications', label: 'Communications', icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M4 6h5M4 8h3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/><circle cx="13" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.2"/></svg>
  )},
  { href: '/features/integrations', label: 'Integrations', icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/><path d="M8 3v3M8 10v3M3 8h3M10 8h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  )},
  { href: '/features/field-ops', label: 'Field Ops', icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C6.07 1.5 4.5 3.07 4.5 5c0 2.62 3.5 7.5 3.5 7.5s3.5-4.88 3.5-7.5c0-1.93-1.57-3.5-3.5-3.5z" stroke="currentColor" strokeWidth="1.3"/><circle cx="8" cy="5" r="1.3" fill="currentColor"/></svg>
  )},
  { href: '/features/resident-portal', label: 'Resident Portal', icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.3"/><path d="M3.5 13c0-2.49 2.01-4.5 4.5-4.5s4.5 2.01 4.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
  )},
];

function FeatureSubNav() {
  const pathname = usePathname();

  return (
    <div className="feature-subnav">
      <div className="container">
        <nav className="feature-subnav-inner">
          {featureLinks.map((f) => {
            const active = pathname.startsWith(f.href);
            return (
              <Link
                key={f.href}
                href={f.href}
                className={`feature-subnav-item${active ? ' active' : ''}`}
              >
                <span className="feature-subnav-icon">{f.icon}</span>
                {f.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default FeatureSubNav;
