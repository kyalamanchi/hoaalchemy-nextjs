'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'What is HOA Alchemy?',
        a: 'HOA Alchemy is an all-in-one community management platform built for HOA management companies, self-managed associations, and property managers. It combines financial management, resident portals, live field operations tracking, communications, and integrations into a single platform.',
      },
      {
        q: 'How quickly can we get started?',
        a: 'Most communities are fully onboarded within 1–2 weeks. We handle data migration from your existing software, set up your resident portal, and provide hands-on training for your board and management team.',
      },
      {
        q: 'Do I need any technical knowledge to use HOA Alchemy?',
        a: 'No. HOA Alchemy is designed for community managers and board members, not IT professionals. The interface is clean and intuitive, and our support team is available to walk you through anything.',
      },
      {
        q: 'Can we migrate from our current HOA software?',
        a: 'Yes. We support data migration from PayHOA, Buildium, TOPS, AppFolio, Vantaca, and most CSV-based exports. Our onboarding team will handle the migration for you at no additional cost.',
      },
    ],
  },
  {
    category: 'Financial Management',
    items: [
      {
        q: 'Does HOA Alchemy sync with QuickBooks?',
        a: 'Yes. HOA Alchemy offers a native QuickBooks Online integration that syncs assessments, payments, invoices, and vendor bills in real time. You can also use our built-in accounting module as a standalone replacement.',
      },
      {
        q: 'How does online payment collection work?',
        a: 'Homeowners log in to their resident portal and pay via ACH, credit card, or debit card. AutoPay enrollment allows dues to collect automatically each cycle. Payments settle to your association bank account through our Forte payment processing integration.',
      },
      {
        q: 'Can HOA Alchemy handle multiple communities under one account?',
        a: 'Absolutely. Management companies can manage dozens or hundreds of associations from a single login, with separate financials, portals, and reports per community.',
      },
      {
        q: 'Does the platform handle 1099 and 1120-H tax filing?',
        a: 'Yes. HOA Alchemy generates 1099-NEC forms for qualifying vendors and produces the data needed for 1120-H HOA tax returns. You can export these directly to your CPA or file through our integrated tax module.',
      },
      {
        q: 'Is there a reserve study and forecasting tool?',
        a: 'Yes. Our AI-assisted reserve forecasting tool projects 10–30 year funding scenarios based on your current reserves, contribution rates, and planned capital expenditures. It also flags underfunded components.',
      },
    ],
  },
  {
    category: 'Field Operations & GPS Tracking',
    items: [
      {
        q: 'What makes HOA Alchemy\'s field tracking different?',
        a: 'HOA Alchemy includes live GPS tracking for onsite workers — a feature not available in PayHOA, Buildium, or Vantaca. You can see who is working where in real time, review breadcrumb trails, replay full shift routes, and set geofence alerts for restricted areas.',
      },
      {
        q: 'How often does worker location update?',
        a: 'Location updates every 30 seconds while a worker is clocked in and moving. When stationary, the system captures a location every 2–3 minutes to preserve battery. You can review the full breadcrumb trail after any shift.',
      },
      {
        q: 'What is geofencing?',
        a: 'Geofencing lets you draw a virtual boundary around your community or a specific zone. If a worker enters or exits that boundary while clocked in, you receive an instant alert. This is useful for confirming workers are on-site and for security monitoring.',
      },
      {
        q: 'Does field tracking work on iOS and Android?',
        a: 'Yes. Workers use the HOA Alchemy mobile app (available on both iOS and Android) to clock in and out. GPS tracking runs in the background while they\'re clocked in.',
      },
    ],
  },
  {
    category: 'Resident Portal',
    items: [
      {
        q: 'What can residents do in the portal?',
        a: 'Residents can pay dues and set up AutoPay, view their payment history and statements, submit maintenance requests and architectural applications, access all community documents (CC&Rs, bylaws, meeting minutes), vote in elections and surveys, and communicate with the board.',
      },
      {
        q: 'Is the resident portal mobile-friendly?',
        a: 'Yes. The portal is fully responsive and works on any smartphone, tablet, or desktop browser. No app download is required for residents.',
      },
      {
        q: 'Can we restrict which documents are visible to residents vs. board members?',
        a: 'Yes. Each document in the library can be marked as board-only or visible to all residents. Board members have a separate secure area for sensitive documents like insurance policies and legal correspondence.',
      },
      {
        q: 'How does digital voting work?',
        a: 'Boards create a ballot with candidate nominations or yes/no questions, set a voting window, and send email invitations to all eligible homeowners. Voting is anonymous by default, quorum is tracked automatically, and results are available in real time.',
      },
    ],
  },
  {
    category: 'Communications',
    items: [
      {
        q: 'What communication channels does HOA Alchemy support?',
        a: 'HOA Alchemy supports mass email, SMS text messaging (via Twilio), automated phone calls, USPS physical mail, and community message boards. You can send announcements through any or all channels simultaneously.',
      },
      {
        q: 'Is there an AI chatbot for residents?',
        a: 'Yes. The AI-powered resident chatbot can answer common questions about dues, rules, upcoming events, and community documents — 24/7, without requiring board involvement. It is trained on your community\'s specific documents and FAQs.',
      },
      {
        q: 'Can we build our own HOA website with HOA Alchemy?',
        a: 'Yes. HOA Alchemy includes a built-in website builder specifically for HOA communities. You can publish news, event calendars, pool schedules, and important announcements on a public-facing community website.',
      },
    ],
  },
  {
    category: 'Pricing & Plans',
    items: [
      {
        q: 'How is HOA Alchemy priced?',
        a: 'HOA Alchemy is priced per unit, per month. Plans start at $0.89/unit/month for communities under 50 units. Volume discounts apply for larger communities and management companies. See our Pricing page for full details.',
      },
      {
        q: 'Is there a free trial or demo?',
        a: 'Yes. We offer a 14-day free trial with full access to all features. We also offer live demos with a product specialist — book one through the Get Started button.',
      },
      {
        q: 'Are there setup fees or data migration fees?',
        a: 'No setup fees and no data migration fees. Onboarding, training, and migration are included with every plan.',
      },
      {
        q: 'Can we cancel at any time?',
        a: 'Yes. HOA Alchemy operates on a month-to-month basis with no long-term contracts required. Annual plans are available at a discount if preferred.',
      },
    ],
  },
];

function FAQAccordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-accordion-item">
      <button
        className={`faq-accordion-trigger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        {q}
        <span className={`faq-accordion-chevron${open ? ' open' : ''}`}>▾</span>
      </button>
      {open && (
        <div className="faq-accordion-body">{a}</div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = faqs.map(cat => ({
    ...cat,
    items: cat.items.filter(
      item =>
        (!activeCategory || cat.category === activeCategory) &&
        (!search ||
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase()))
    ),
  })).filter(cat => cat.items.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="faq-page-hero">
        <div className="container">
          <span className="feature-badge">Help Center</span>
          <h1>Frequently Asked Questions</h1>
          <p className="lead">
            Everything you need to know about HOA Alchemy. Can't find your answer?{' '}
            <Link href="/contact" style={{ color: '#6b2fa0', fontWeight: 600 }}>Contact us →</Link>
          </p>
          <div className="faq-search-bar">
            <input
              type="text"
              placeholder="Search questions…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button type="button">Search</button>
          </div>
        </div>
      </section>

      {/* FAQ Categories + Accordions */}
      <section className="faq-categories-section">
        <div className="container">
          <div className="faq-categories-grid">

            {/* Sidebar nav */}
            <nav className="faq-category-nav">
              <button
                className={`faq-cat-btn${!activeCategory ? ' active' : ''}`}
                onClick={() => setActiveCategory(null)}
              >
                All Topics
              </button>
              {faqs.map(cat => (
                <button
                  key={cat.category}
                  className={`faq-cat-btn${activeCategory === cat.category ? ' active' : ''}`}
                  onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
                >
                  {cat.category}
                </button>
              ))}
            </nav>

            {/* Accordion content */}
            <div className="faq-content-area">
              {filtered.length === 0 ? (
                <p style={{ color: '#888', fontSize: '0.95rem' }}>
                  No results found for "{search}". Try a different search term or{' '}
                  <Link href="/contact" style={{ color: '#6b2fa0' }}>ask us directly</Link>.
                </p>
              ) : (
                filtered.map(cat => (
                  <div key={cat.category} className="faq-category-block">
                    <h3>{cat.category}</h3>
                    {cat.items.map(item => (
                      <FAQAccordion key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Still Have Questions?"
        subtitle="Our team is happy to walk you through HOA Alchemy, answer your specific questions, and set up a free trial tailored to your community."
        primaryText="Talk to Us"
        primaryLink="/contact"
        secondaryText="View Pricing"
        secondaryLink="/pricing"
      />

      <AllFeaturesStrip />
      <Footer />
    </>
  );
}
