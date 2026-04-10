'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import PageHeader from '@/components/PageHeader';

export default function Blog() {
  const [emailSubscription, setEmailSubscription] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Benefits of Digital Document Management for HOAs',
      excerpt: 'Learn how going digital can streamline your document workflows, improve compliance, and save your community thousands of dollars.',
      date: 'March 28, 2026',
      image: 'https://via.placeholder.com/400x250?text=Digital+Documents',
      category: 'Best Practices'
    },
    {
      id: 2,
      title: 'HOA Budget Planning: A Step-by-Step Guide',
      excerpt: 'Discover best practices for creating accurate HOA budgets that satisfy residents and ensure financial stability for your community.',
      date: 'March 21, 2026',
      image: 'https://via.placeholder.com/400x250?text=Budget+Planning',
      category: 'Finance'
    },
    {
      id: 3,
      title: 'Improving Communication Between Boards and Residents',
      excerpt: 'Effective communication is key to a healthy HOA community. Explore strategies and tools to keep everyone informed and engaged.',
      date: 'March 14, 2026',
      image: 'https://via.placeholder.com/400x250?text=Communication',
      category: 'Communication'
    },
    {
      id: 4,
      title: 'Common HOA Compliance Mistakes and How to Avoid Them',
      excerpt: 'Regulatory compliance is critical. We break down the most common mistakes HOAs make and provide practical solutions.',
      date: 'March 7, 2026',
      image: 'https://via.placeholder.com/400x250?text=Compliance',
      category: 'Compliance'
    },
    {
      id: 5,
      title: 'Technology Trends Shaping the Future of HOA Management',
      excerpt: 'Explore emerging technologies like AI and cloud computing that are transforming how HOAs operate and serve their communities.',
      date: 'February 28, 2026',
      image: 'https://via.placeholder.com/400x250?text=Technology',
      category: 'Technology'
    },
    {
      id: 6,
      title: 'Case Study: How Sunset Hills HOA Saved $50K Annually',
      excerpt: 'See how a 200-unit community transformed their operations and realized significant cost savings with better management practices.',
      date: 'February 21, 2026',
      image: 'https://via.placeholder.com/400x250?text=Case+Study',
      category: 'Case Studies'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSubscription.trim()) {
      console.log('Subscribed with email:', emailSubscription);
      setSubscriptionMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmailSubscription('');

      setTimeout(() => {
        setSubscriptionMessage('');
      }, 3000);
    }
  };

  return (
    <div className="blog-page">
      <PageHeader title="Insights & Resources" />

      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <p className="blog-date">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link href="#" className="read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get the latest insights on HOA management delivered to your inbox monthly.</p>

            {subscriptionMessage && (
              <div className="subscription-success">
                {subscriptionMessage}
              </div>
            )}

            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={emailSubscription}
                onChange={(e) => setEmailSubscription(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <AllFeaturesStrip />
      <Footer />
    </div>
  );
}
