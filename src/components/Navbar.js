'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className={`navbar-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">

        {/* ── Brand ── */}
        <Link href="/" className="navbar-logo-link">
          <div className="navbar-brand-text">
            <span className="brand-name">HOA Alchemy</span>
            <span className="brand-tagline">Mobile Apps for Associations</span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="navbar-nav">
          <Link href="/" className={`nav-item${isActive('/') && pathname === '/' ? ' active' : ''}`}>
            Home
          </Link>

          {/* Features dropdown — click + hover */}
          <div
            className={`nav-item nav-has-dropdown${isActive('/features') ? ' active' : ''}${dropdownOpen ? ' dropdown-open' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span
              className="nav-dropdown-trigger"
              onClick={(e) => { e.stopPropagation(); setDropdownOpen((prev) => !prev); }}
            >
              Features
              <svg className="chevron-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>

            {dropdownOpen && (
              <div className="nav-dropdown-panel">
                <div className="nav-dropdown-panel-content">
                  <div className="dropdown-panel-inner">
                    <DropdownItem
                      href="/features/financial"
                      icon={<IconFinancial />}
                      label="Financial"
                      desc="Invoicing, accounting, budgets & tax filing"
                      active={pathname.startsWith('/features/financial')}
                    />
                    <DropdownItem
                      href="/features/management"
                      icon={<IconManagement />}
                      label="Management"
                      desc="Live tracking, requests, violations & vendors"
                      active={pathname.startsWith('/features/management')}
                    />
                    <DropdownItem
                      href="/features/communications"
                      icon={<IconComms />}
                      label="Communications"
                      desc="Email, SMS, phone, boards & AI chatbot"
                      active={pathname.startsWith('/features/communications')}
                    />
                    <DropdownItem
                      href="/features/integrations"
                      icon={<IconIntegrations />}
                      label="Integrations"
                      desc="Receivables, messaging, cameras & more"
                      active={pathname.startsWith('/features/integrations')}
                    />
                    <DropdownItem
                      href="/features/field-ops"
                      icon={<IconFieldOps />}
                      label="Field Ops"
                      desc="Live GPS tracking, routes & geofencing"
                      active={pathname.startsWith('/features/field-ops')}
                    />
                    <DropdownItem
                      href="/features/resident-portal"
                      icon={<IconResidentPortal />}
                      label="Resident Portal"
                      desc="Payments, requests, docs & voting"
                      active={pathname.startsWith('/features/resident-portal')}
                    />
                  </div>
                  <div className="dropdown-panel-footer">
                    <Link href="/features" className="dropdown-all-link">
                      See all features →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/pricing" className={`nav-item${isActive('/pricing') ? ' active' : ''}`}>Pricing</Link>
          <Link href="/about" className={`nav-item${isActive('/about') ? ' active' : ''}`}>About</Link>
          <Link href="/blog" className={`nav-item${isActive('/blog') ? ' active' : ''}`}>Blog</Link>
          <Link href="/faq" className={`nav-item${isActive('/faq') ? ' active' : ''}`}>FAQ</Link>
        </nav>

        {/* ── CTA ── */}
        <div className="navbar-actions">
          <a
            href="https://www.hoaalchemy.io"
            className="btn-nav-login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log In
          </a>
          <Link href="/contact" className="btn-nav-cta">
            Get Started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginLeft: 6}}>
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className={`mobile-menu-btn${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <Link href="/" className={`mobile-nav-item${pathname === '/' ? ' active' : ''}`}>Home</Link>
          <div className="mobile-nav-group">
            <div className="mobile-nav-label">Features</div>
            <Link href="/features/financial" className={`mobile-nav-sub${pathname.startsWith('/features/financial') ? ' active' : ''}`}>Financial</Link>
            <Link href="/features/management" className={`mobile-nav-sub${pathname.startsWith('/features/management') ? ' active' : ''}`}>Management</Link>
            <Link href="/features/communications" className={`mobile-nav-sub${pathname.startsWith('/features/communications') ? ' active' : ''}`}>Communications</Link>
            <Link href="/features/integrations" className={`mobile-nav-sub${pathname.startsWith('/features/integrations') ? ' active' : ''}`}>Integrations</Link>
            <Link href="/features/field-ops" className={`mobile-nav-sub${pathname.startsWith('/features/field-ops') ? ' active' : ''}`}>Field Ops</Link>
            <Link href="/features/resident-portal" className={`mobile-nav-sub${pathname.startsWith('/features/resident-portal') ? ' active' : ''}`}>Resident Portal</Link>
          </div>
          <Link href="/pricing" className={`mobile-nav-item${isActive('/pricing') ? ' active' : ''}`}>Pricing</Link>
          <Link href="/about" className={`mobile-nav-item${isActive('/about') ? ' active' : ''}`}>About</Link>
          <Link href="/blog" className={`mobile-nav-item${isActive('/blog') ? ' active' : ''}`}>Blog</Link>
          <Link href="/faq" className={`mobile-nav-item${isActive('/faq') ? ' active' : ''}`}>FAQ</Link>
          <div className="mobile-nav-cta">
            <a href="https://www.hoaalchemy.io" className="btn-nav-login" target="_blank" rel="noopener noreferrer">Log In</a>
            <Link href="/contact" className="btn-nav-cta">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ── Dropdown Item ──────────────────────────────────
function DropdownItem({ href, icon, label, desc, active }) {
  return (
    <Link href={href} className={`dropdown-feature-item${active ? ' active' : ''}`}>
      <div className="dropdown-feature-icon">{icon}</div>
      <div>
        <div className="dropdown-feature-label">{label}</div>
        <div className="dropdown-feature-desc">{desc}</div>
      </div>
    </Link>
  );
}

// ── Inline Icons ──────────────────────────────────
function IconFinancial() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="5" width="18" height="14" rx="3" stroke="#6b2fa0" strokeWidth="1.6"/>
      <path d="M7 11h3M7 14h2" stroke="#6b2fa0" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M14 9v6M12 11h4" stroke="#8cb83a" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function IconManagement() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 3C7.68 3 5 5.68 5 9c0 4.25 6 10 6 10s6-5.75 6-10c0-3.32-2.68-6-6-6z" stroke="#6b2fa0" strokeWidth="1.6"/>
      <circle cx="11" cy="9" r="2.2" stroke="#8cb83a" strokeWidth="1.4"/>
    </svg>
  );
}

function IconComms() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="2.5" stroke="#6b2fa0" strokeWidth="1.6"/>
      <path d="M5 8h8M5 11h5" stroke="#6b2fa0" strokeWidth="1.4" strokeLinecap="round"/>
      <rect x="7" y="11" width="13" height="8" rx="2" stroke="#8cb83a" strokeWidth="1.4"/>
      <circle cx="18" cy="8" r="3" fill="#8cb83a"/>
      <path d="M17 8h2M18 7v2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function IconIntegrations() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="3" stroke="#6b2fa0" strokeWidth="1.6"/>
      <path d="M11 4v4M11 14v4M4 11h4M14 11h4" stroke="#6b2fa0" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="11" cy="4" r="1.5" fill="#8cb83a"/>
      <circle cx="11" cy="18" r="1.5" fill="#8cb83a"/>
      <circle cx="4" cy="11" r="1.5" fill="#8cb83a"/>
      <circle cx="18" cy="11" r="1.5" fill="#8cb83a"/>
    </svg>
  );
}

function IconFieldOps() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2C8.24 2 6 4.24 6 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z" stroke="#6b2fa0" strokeWidth="1.6"/>
      <circle cx="11" cy="7" r="2" fill="#8cb83a"/>
      <path d="M4 17c0 0 2-1 7-1s7 1 7 1" stroke="#8cb83a" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="5" cy="14" r="1.2" fill="#6b2fa0" opacity="0.6"/>
      <circle cx="17" cy="13" r="1.2" fill="#6b2fa0" opacity="0.6"/>
    </svg>
  );
}

function IconResidentPortal() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="7" r="3" stroke="#6b2fa0" strokeWidth="1.6"/>
      <path d="M5 18c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#6b2fa0" strokeWidth="1.6" strokeLinecap="round"/>
      <rect x="13" y="11" width="7" height="8" rx="1.5" stroke="#8cb83a" strokeWidth="1.3"/>
      <path d="M15 14h3M15 16h2" stroke="#8cb83a" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  );
}

export default Navbar;
