import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

function FeatureIntegrations() {
  const seoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Integrations - HOA Alchemy',
    description: 'HOA Alchemy integrates with payment processing, unified messaging, security cameras, smart irrigation, and more.',
    url: 'https://www.hoaalchemy.com/features/integrations',
  };

  const integrations = [
    {
      name: 'Receivables',
      category: 'Payment Processing',
      description: 'Accept ACH and credit card payments from residents with industry-low processing fees. Funds deposit directly into your association bank account with next-day funding available.',
      features: ['ACH & credit card processing', 'AutoPay enrollment', 'PCI-compliant security', 'Next-day funding available'],
    },
    {
      name: 'Unified Messaging',
      category: 'Communications',
      description: 'Power mass text messages, automated phone calls, and two-way SMS conversations with residents through a carrier-grade network with delivery tracking.',
      features: ['Mass SMS broadcasts', 'Automated phone calls', 'Two-way messaging', 'Delivery tracking'],
    },
    {
      name: 'Camera and Access Control',
      category: 'Security',
      description: 'Integrate your community security cameras with HOA Alchemy for real-time monitoring, incident documentation, motion alerts, and access control.',
      features: ['Live camera feeds', 'Incident recording', 'Motion alerts', 'Access control sync'],
    },
    {
      name: 'Smart Irrigation Controllers',
      category: 'Irrigation & Landscaping',
      description: 'Connect smart irrigation controllers to monitor water usage, automate watering schedules based on weather, and reduce landscaping costs across your community.',
      features: ['Smart water scheduling', 'Usage monitoring', 'Weather-based adjustments', 'Cost savings reporting'],
    },
  ];

  return (
    <>
      <FeatureSubNav />

      {/* Hero */}
      <section className="feature-page-hero">
        <div className="container">
          <div className="feature-page-hero-content">
            <span className="feature-badge">Integrations</span>
            <h1>Connected to the Tools Your Community Already Uses</h1>
            <p className="lead">
              HOA Alchemy integrates with leading payment, communication, security, and
              smart property platforms — all included free with every plan.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="feature-detail-section">
        <div className="container">
          <h2 className="section-center-title">All Integrations Included — No Extra Fees</h2>
          <p className="section-center-subtitle">
            Every integration below is available on all plans at no additional cost.
          </p>
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div className="integration-card" key={index}>
                <div className="integration-header">
                  <span className="integration-category">{integration.category}</span>
                  <h3>{integration.name}</h3>
                </div>
                <p>{integration.description}</p>
                <ul className="integration-features">
                  {integration.features.map((feature, i) => (
                    <li key={i}><span className="check-mark">&#10003;</span> {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Open API</span>
              <h2>Build Custom Integrations with Our API</h2>
              <p>
                Need something we don't have yet? HOA Alchemy's RESTful API lets management
                companies and developers build custom integrations, automate workflows,
                and connect to any third-party system.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> RESTful API with full documentation</li>
                <li><span className="check-mark">&#10003;</span> Webhooks for real-time events</li>
                <li><span className="check-mark">&#10003;</span> OAuth 2.0 authentication</li>
                <li><span className="check-mark">&#10003;</span> Rate limiting & sandbox environment</li>
                <li><span className="check-mark">&#10003;</span> Developer portal & support</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">API Response — GET /api/v1/units</div>
                <div className="mockup-body">
                  <pre className="code-preview">{`{
  "data": [
    {
      "id": "unit_204",
      "address": "204 Sunset Ridge Dr",
      "owner": "Jennifer Martinez",
      "balance": 0.00,
      "status": "current"
    },
    {
      "id": "unit_118",
      "address": "118 Sunset Ridge Dr",
      "owner": "Robert Chen",
      "balance": 485.00,
      "status": "due"
    }
  ],
  "total": 342,
  "page": 1
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="feature-detail-section">
        <div className="container">
          <h2 className="section-center-title">More Integrations Than the Competition</h2>
          <p className="section-center-subtitle">
            HOA Alchemy connects to tools the others can't — including camera systems, smart irrigation, and live location tracking.
          </p>
          <div style={{overflowX: 'auto'}}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Integration</th>
                  <th>HOA Alchemy</th>
                  <th>PayHOA</th>
                  <th>Buildium</th>
                  <th>Vantaca</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Receivables (ACH + Card)</td><td style={{color: '#16a34a', fontWeight: 700}}>&#10003;</td><td style={{color: '#16a34a'}}>&#10003;</td><td style={{color: '#16a34a'}}>&#10003;</td><td style={{color: '#16a34a'}}>&#10003;</td></tr>
                <tr><td>Unified Messaging (SMS + Calls)</td><td style={{color: '#16a34a', fontWeight: 700}}>&#10003;</td><td style={{color: '#16a34a'}}>&#10003;</td><td style={{color: '#dc2626'}}>&#10007;</td><td style={{color: '#f59e0b'}}>Partial</td></tr>
                <tr><td>Camera & Access Control</td><td style={{color: '#16a34a', fontWeight: 700}}>&#10003;</td><td style={{color: '#dc2626'}}>&#10007;</td><td style={{color: '#dc2626'}}>&#10007;</td><td style={{color: '#dc2626'}}>&#10007;</td></tr>
                <tr><td>Smart Irrigation Controllers</td><td style={{color: '#16a34a', fontWeight: 700}}>&#10003;</td><td style={{color: '#dc2626'}}>&#10007;</td><td style={{color: '#dc2626'}}>&#10007;</td><td style={{color: '#dc2626'}}>&#10007;</td></tr>
                <tr><td>Live Location for Onsite Crew</td><td style={{color: '#16a34a', fontWeight: 700}}>&#10003;</td><td style={{color: '#dc2626'}}>&#10007;</td><td style={{color: '#dc2626'}}>&#10007;</td><td style={{color: '#dc2626'}}>&#10007;</td></tr>
                <tr><td>Open API</td><td style={{color: '#16a34a', fontWeight: 700}}>&#10003;</td><td style={{color: '#dc2626'}}>&#10007;</td><td style={{color: '#16a34a'}}>&#10003;</td><td style={{color: '#16a34a'}}>&#10003;</td></tr>
                <tr><td>AI Chatbot</td><td style={{color: '#16a34a', fontWeight: 700}}>&#10003;</td><td style={{color: '#16a34a'}}>&#10003;</td><td style={{color: '#dc2626'}}>&#10007;</td><td style={{color: '#dc2626'}}>&#10007;</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner
        title="All Integrations. Zero Extra Cost."
        subtitle="Every integration is included on every plan. No add-ons, no surprises."
        primaryText="Start Free Trial"
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

export default FeatureIntegrations;
