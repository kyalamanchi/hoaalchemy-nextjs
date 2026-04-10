'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import AllFeaturesStrip from '@/components/AllFeaturesStrip';
import PageHeader from '@/components/PageHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    community_size: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        community_size: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      type: 'email',
      label: 'Email',
      value: 'info@hoaalchemy.com',
      icon: '✉️'
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '(925) 319-5758',
      icon: '📞'
    },
    {
      type: 'location',
      label: 'Location',
      value: 'Pleasanton, CA',
      icon: '📍'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Schedule Your Demo',
      description: 'Tell us about your community and we\'ll set up a personalized walkthrough.'
    },
    {
      number: 2,
      title: 'See It In Action',
      description: 'Our team will show you how HOA Alchemy can solve your specific challenges.'
    },
    {
      number: 3,
      title: 'Get Started',
      description: 'We\'ll help you onboard and train your team to maximize your ROI.'
    }
  ];

  const faqItems = [
    {
      question: 'How long is the demo?',
      answer: 'Our demos typically last 30-45 minutes. We customize the experience based on your community\'s specific needs and pain points.'
    },
    {
      question: 'Do I need to prepare anything?',
      answer: 'No preparation needed! Just bring your questions. If you have specific processes or challenges you\'d like to discuss, feel free to share them in the message field.'
    },
    {
      question: 'When can we schedule?',
      answer: 'We offer flexible scheduling. Our team is available Monday-Friday, 9 AM - 5 PM Pacific Time. Let us know your preferred times in the form.'
    },
    {
      question: 'What if I have questions during the demo?',
      answer: 'Absolutely! Ask as many questions as you like. Our product experts love discussing how we can help your HOA succeed.'
    }
  ];

  return (
    <div className="contact-page">
      <PageHeader title="Get In Touch" />

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column - Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Request a Demo</h2>

              {submitted ? (
                <div className="success-message">
                  <h3>Thank you!</h3>
                  <p>We've received your request. Our team will contact you shortly to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company/HOA Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Your HOA or Company"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="community_size">Community Size *</label>
                    <select
                      id="community_size"
                      name="community_size"
                      value={formData.community_size}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select community size</option>
                      <option value="under-50">Under 50 units</option>
                      <option value="50-150">50-150 units</option>
                      <option value="150-300">150-300 units</option>
                      <option value="300-500">300-500 units</option>
                      <option value="over-500">Over 500 units</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your HOA and any specific challenges you'd like to discuss..."
                      rows="5"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Request Demo
                  </button>
                </form>
              )}
            </div>

            {/* Right Column - Contact Information */}
            <div className="contact-info-wrapper">
              <div className="contact-info-box">
                <h3>Contact Information</h3>
                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-item">
                      <span className="contact-icon">{info.icon}</span>
                      <div>
                        <p className="contact-label">{info.label}</p>
                        <p className="contact-value">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="what-to-expect-box">
                <h3>What to Expect</h3>
                <div className="steps-list">
                  {steps.map((step) => (
                    <div key={step.number} className="step">
                      <div className="step-number">{step.number}</div>
                      <div className="step-content">
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Demo FAQs</h2>
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AllFeaturesStrip />
      <Footer />
    </div>
  );
}
