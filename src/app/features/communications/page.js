import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import CTABanner from '@/components/CTABanner';
import FeatureSubNav from '@/components/FeatureSubNav';
import ExploreMoreFeatures from '@/components/ExploreMoreFeatures';

function FeatureCommunications() {
  const seoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Communications Features - HOA Alchemy',
    description: 'HOA communication tools: mass email, SMS, phone calls, message boards, website builder, and AI chatbot.',
    url: 'https://www.hoaalchemy.com/features/communications',
  };

  return (
    <>
      <FeatureSubNav />

      {/* Hero */}
      <section className="feature-page-hero">
        <div className="container">
          <div className="feature-page-hero-content">
            <span className="feature-badge">Communications</span>
            <h1>Every Resident, Every Channel, One Platform</h1>
            <p className="lead">
              Reach your entire community through email, text, phone, mail, and message boards.
              HOA Alchemy keeps everyone informed without the chaos.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mass Email */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Mass Email</span>
              <h2>Professional Emails to Your Entire Community in Seconds</h2>
              <p>
                Send announcements, meeting notices, newsletters, and reminders to every
                homeowner — or target specific groups. Track opens, clicks, and bounces
                so you know your message was received.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Send to all owners or custom groups</li>
                <li><span className="check-mark">&#10003;</span> Rich text editor with templates</li>
                <li><span className="check-mark">&#10003;</span> File & document attachments</li>
                <li><span className="check-mark">&#10003;</span> Open & click tracking</li>
                <li><span className="check-mark">&#10003;</span> Scheduled sends & recurring emails</li>
                <li><span className="check-mark">&#10003;</span> Reply management</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Email Campaign — Board Meeting Reminder</div>
                <div className="mockup-body">
                  <div className="email-stats-grid">
                    <div className="email-stat">
                      <div className="email-stat-number">342</div>
                      <div className="email-stat-label">Delivered</div>
                    </div>
                    <div className="email-stat">
                      <div className="email-stat-number">289</div>
                      <div className="email-stat-label">Opened</div>
                    </div>
                    <div className="email-stat">
                      <div className="email-stat-number">84.5%</div>
                      <div className="email-stat-label">Open Rate</div>
                    </div>
                    <div className="email-stat">
                      <div className="email-stat-number">0</div>
                      <div className="email-stat-label">Bounced</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMS & Phone */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">SMS & Phone Calls</span>
              <h2>Urgent Updates Delivered Instantly via Text and Phone</h2>
              <p>
                When email won't cut it, send mass text messages or automated phone calls
                to every resident. Perfect for emergencies, weather alerts, gate closures,
                and time-sensitive reminders.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Mass SMS to all or selected owners</li>
                <li><span className="check-mark">&#10003;</span> Automated phone call broadcasts</li>
                <li><span className="check-mark">&#10003;</span> Delivery confirmation & read receipts</li>
                <li><span className="check-mark">&#10003;</span> Two-way text messaging</li>
                <li><span className="check-mark">&#10003;</span> Emergency broadcast mode</li>
                <li><span className="check-mark">&#10003;</span> Opt-in/opt-out management</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">SMS Broadcast</div>
                <div className="mockup-body">
                  <div className="sms-preview">
                    <div className="sms-bubble outgoing">
                      <div className="sms-sender">HOA Alchemy</div>
                      <div className="sms-text">Pool will be closed tomorrow 8am-12pm for maintenance. We apologize for any inconvenience.</div>
                      <div className="sms-time">Sent to 342 residents — 2:15 PM</div>
                    </div>
                    <div className="sms-delivery">
                      <span className="delivery-stat">&#10003; 338 delivered</span>
                      <span className="delivery-stat">&#10003; 4 pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Boards */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">Message Boards</span>
              <h2>Private Community Forums for Organized Discussions</h2>
              <p>
                Create topic-based boards for general announcements, social events, marketplace,
                and board-only discussions. Keep conversations organized and searchable — unlike
                group chats that spiral out of control.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Public & private boards</li>
                <li><span className="check-mark">&#10003;</span> Board-only restricted channels</li>
                <li><span className="check-mark">&#10003;</span> Threaded conversations</li>
                <li><span className="check-mark">&#10003;</span> File sharing & photo uploads</li>
                <li><span className="check-mark">&#10003;</span> Moderation & pin important posts</li>
                <li><span className="check-mark">&#10003;</span> Notification preferences per board</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Community Boards</div>
                <div className="mockup-body">
                  <div className="board-list">
                    <div className="board-item">
                      <div className="board-icon">&#128227;</div>
                      <div className="board-info">
                        <div className="board-name">Announcements</div>
                        <div className="board-meta">12 posts this month — Public</div>
                      </div>
                    </div>
                    <div className="board-item">
                      <div className="board-icon">&#128274;</div>
                      <div className="board-info">
                        <div className="board-name">Board Members Only</div>
                        <div className="board-meta">5 posts this month — Private</div>
                      </div>
                    </div>
                    <div className="board-item">
                      <div className="board-icon">&#127881;</div>
                      <div className="board-info">
                        <div className="board-name">Social & Events</div>
                        <div className="board-meta">8 posts this month — Public</div>
                      </div>
                    </div>
                    <div className="board-item">
                      <div className="board-icon">&#128722;</div>
                      <div className="board-info">
                        <div className="board-name">Community Marketplace</div>
                        <div className="board-meta">23 posts this month — Public</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPS Mail */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">USPS Mailroom</span>
              <h2>Send Physical Mail Without Leaving Your Dashboard</h2>
              <p>
                When your governing documents require certified letters or physical notices,
                HOA Alchemy handles it. Print, stuff, stamp, and mail letters to any
                homeowner directly through the platform with delivery confirmation.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Send USPS mail from your dashboard</li>
                <li><span className="check-mark">&#10003;</span> Certified & first class options</li>
                <li><span className="check-mark">&#10003;</span> Delivery confirmation tracking</li>
                <li><span className="check-mark">&#10003;</span> Bulk mailing for violations & notices</li>
                <li><span className="check-mark">&#10003;</span> Template library for common letters</li>
                <li><span className="check-mark">&#10003;</span> Merge fields for personalization</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Mailroom — Recent Mailings</div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <tbody>
                      <tr><td>Violation Notice — Unit 305</td><td className="amount" style={{color: '#16a34a'}}>Delivered</td></tr>
                      <tr><td>Assessment Reminder — Unit 412</td><td className="amount" style={{color: '#f59e0b'}}>In Transit</td></tr>
                      <tr><td>Annual Meeting Notice — All</td><td className="amount" style={{color: '#16a34a'}}>Delivered</td></tr>
                      <tr><td>Lien Notice — Unit 108</td><td className="amount" style={{color: '#16a34a'}}>Delivered</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail-grid">
            <div className="feature-detail-content">
              <span className="feature-label">AI-Powered Chatbot</span>
              <h2>Instant Answers for Homeowners, 24/7</h2>
              <p>
                Reduce the burden on your board and managers with an AI chatbot that answers
                common homeowner questions instantly — pool hours, payment status, architectural
                guidelines, upcoming meetings, and more.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Trained on your community's rules & docs</li>
                <li><span className="check-mark">&#10003;</span> Answers FAQs automatically</li>
                <li><span className="check-mark">&#10003;</span> Escalates complex issues to managers</li>
                <li><span className="check-mark">&#10003;</span> Available 24/7 on resident portal</li>
                <li><span className="check-mark">&#10003;</span> Learns & improves over time</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Community Assistant</div>
                <div className="mockup-body">
                  <div className="chat-preview">
                    <div className="chat-bubble user">What time does the pool close?</div>
                    <div className="chat-bubble bot">The community pool is open daily from 8:00 AM to 9:00 PM. Guests are welcome during staffed hours (10 AM - 6 PM). Remember to bring your key fob!</div>
                    <div className="chat-bubble user">When is the next board meeting?</div>
                    <div className="chat-bubble bot">The next board meeting is Thursday, April 17 at 7:00 PM in the clubhouse. The agenda was posted to the Announcements board.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Builder */}
      <section className="feature-detail-section alt">
        <div className="container">
          <div className="feature-detail-grid reverse">
            <div className="feature-detail-content">
              <span className="feature-label">Community Website</span>
              <h2>A Professional Website for Your Association</h2>
              <p>
                Give your community a polished online presence. HOA Alchemy includes a
                drag-and-drop website builder so your HOA can publish rules, meeting minutes,
                calendars, contact information, and more — no developer needed.
              </p>
              <ul className="feature-check-list">
                <li><span className="check-mark">&#10003;</span> Drag-and-drop page builder</li>
                <li><span className="check-mark">&#10003;</span> Custom domain support</li>
                <li><span className="check-mark">&#10003;</span> Document library & downloads</li>
                <li><span className="check-mark">&#10003;</span> Event calendar widget</li>
                <li><span className="check-mark">&#10003;</span> Resident login portal</li>
                <li><span className="check-mark">&#10003;</span> Mobile responsive design</li>
              </ul>
            </div>
            <div className="feature-detail-visual">
              <div className="mockup-card">
                <div className="mockup-header">Website Builder</div>
                <div className="mockup-body">
                  <div className="website-preview">
                    <div className="wp-nav">Sunset Ridge HOA</div>
                    <div className="wp-hero">Welcome to Our Community</div>
                    <div className="wp-sections">
                      <div className="wp-block">About Us</div>
                      <div className="wp-block">Rules & Docs</div>
                      <div className="wp-block">Calendar</div>
                      <div className="wp-block">Contact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Connect with Every Resident"
        subtitle="Stop chasing down homeowners. HOA Alchemy delivers your message through every channel that matters."
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

export default FeatureCommunications;
