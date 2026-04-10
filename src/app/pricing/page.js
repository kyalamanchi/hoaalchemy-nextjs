'use client';

import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import PageHeader from '@/components/PageHeader';

export default function Pricing() {
  const checkmarkSVG = (
    <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="#7c3aed"/>
    </svg>
  );

  const pricingCards = [
    {
      name: 'Starter',
      price: '$0.50',
      period: 'unit/month',
      description: 'Perfect for small communities',
      features: [
        'Basic accounting & budgeting',
        'Document management',
        'Resident portal',
        'Mobile app access',
        'Email support',
        'Up to 50 units'
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-secondary',
      featured: false
    },
    {
      name: 'Professional',
      price: '$1.25',
      period: 'unit/month',
      description: 'Most popular for growing communities',
      features: [
        'Advanced accounting & budgeting',
        'Document management',
        'Resident portal & communications',
        'Mobile app access',
        'Violation management',
        'Priority email & chat support',
        'Up to 500 units'
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-primary',
      featured: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large communities & portfolios',
      features: [
        'Custom integrations',
        'Dedicated account manager',
        'Advanced reporting & analytics',
        'API access',
        'Custom training & onboarding',
        'Phone support & SLA'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'btn-secondary',
      featured: false
    }
  ];

  const faqItems = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH transfers, and checks. Enterprise customers can arrange custom payment terms.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees. We believe in transparent pricing with no hidden costs. You only pay for what you use.'
    },
    {
      question: 'Do you offer annual discounts?',
      answer: 'Yes, we offer 15% off for annual prepayment on all plans. Contact our sales team to learn more about volume discounts.'
    },
    {
      question: 'What is included in the free trial?',
      answer: 'Your free trial includes full access to all features for 30 days. No credit card required to get started.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time. We have no long-term contracts or commitments required.'
    },
    {
      question: 'How many users can I add to my account?',
      answer: 'All plans include unlimited user accounts. You can add board members, staff, and residents as needed.'
    },
    {
      question: 'Do you provide customer support?',
      answer: 'Yes! Starter plans include email support, Professional includes email & chat, and Enterprise includes dedicated support with phone access.'
    }
  ];

  return (
    <>
      <PageHeader
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. No long-term contracts."
      />

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {pricingCards.map((card, index) => (
              <div
                key={index}
                className={`pricing-card ${card.featured ? 'featured' : ''}`}
              >
                {card.featured && (
                  <div className="pricing-badge">{card.badge}</div>
                )}
                <div className="pricing-header">
                  <h3 className="pricing-name">{card.name}</h3>
                  <p className="pricing-description">{card.description}</p>
                  <div className="pricing-price">
                    <span className="price-amount">{card.price}</span>
                    <span className="price-period">/{card.period}</span>
                  </div>
                </div>

                <ul className="pricing-features">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      {checkmarkSVG}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pricing-footer">
                  <button className={`btn ${card.buttonClass}`}>
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Have questions about our pricing? We have answers.</p>
          </div>

          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to simplify your HOA management?"
        subtitle="Start your free trial today. No credit card required."
        primaryText="Start Free Trial"
        primaryLink="/contact"
        secondaryText="Schedule Demo"
        secondaryLink="/contact"
      />

      <AllFeaturesStrip />
      <Footer />
    </>
  );
}
