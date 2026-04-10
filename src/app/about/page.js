import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'About Us | HOA Alchemy',
  description: 'Learn about HOA Alchemy. Founded in 2015, we serve 500+ communities with transparent, innovative HOA management software.',
};

const values = [
  {
    name: 'Transparency',
    emoji: '👁️',
    description: 'We believe in open communication and clear visibility into HOA operations. Our platform makes it easy for boards and residents to access important information.'
  },
  {
    name: 'Innovation',
    emoji: '⚡',
    description: 'Technology should make life easier. We continuously innovate to provide modern solutions that address the real challenges HOAs face.'
  },
  {
    name: 'Community-First',
    emoji: '🤝',
    description: 'At the heart of every HOA is a community. We design our software to strengthen community bonds and foster better relationships.'
  }
];

const stats = [
  {
    label: 'Founded',
    value: '2015',
    description: 'In Pleasanton, California'
  },
  {
    label: 'Communities Served',
    value: '500+',
    description: 'Growing every day'
  },
  {
    label: 'Residents Served',
    value: '10,000+',
    description: 'Trust us with their HOA'
  },
  {
    label: 'Savings Generated',
    value: '$2M+',
    description: 'Through efficient management'
  }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    description: 'Sarah founded HOA Alchemy with a vision to modernize HOA management. She brings 15 years of experience in property management and software development.'
  },
  {
    name: 'Michael Chen',
    role: 'VP of Product',
    description: 'Michael leads product development and strategy. His passion for user experience and understanding of HOA operations drives our feature roadmap.'
  },
  {
    name: 'Jessica Martinez',
    role: 'VP of Operations',
    description: 'Jessica oversees our customer success and support teams. She is committed to ensuring every HOA community achieves their management goals.'
  }
];

export default function About() {
  return (
    <div className="about-page">
      <PageHeader title="About HOA Alchemy" />

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              Founded in 2015 in Pleasanton, California, HOA Alchemy was created with a simple mission: to transform how homeowner associations manage their communities through transparency, accountability, and modern technology.
            </p>
            <p>
              We believe that when HOA management is easier and more transparent, communities thrive. Our software empowers boards to make better decisions and keeps residents informed and engaged.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.emoji}</div>
                <h3>{value.name}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <p className="stat-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img
                    src={`https://via.placeholder.com/300x300?text=${member.name}`}
                    alt={member.name}
                  />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to join 500+ communities?"
        subtitle="Transform your HOA management experience today."
        primaryText="Start Free Trial"
        primaryLink="/contact"
        secondaryText="Schedule Demo"
        secondaryLink="/contact"
      />

      <AllFeaturesStrip />
      <Footer />
    </div>
  );
}
