'use client';

import React, { useState } from 'react';

/**
 * Paper-styled port of the legacy homepage Contact form panel:
 * same tabs (Send Message / Book Strategy Call), field labels,
 * phone validation, /api/contact payload and /thank-you redirect.
 * Holds only form chrome — page copy stays in the server component.
 */
const ContactPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'message' | 'call'>('message');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Web Development');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(value);
    if (value === '') setPhoneError('');
    else if (value.length < 10) setPhoneError(`Enter 10 digits (remaining: ${10 - value.length})`);
    else setPhoneError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (!name || !email) {
      setSubmitError('Please fill in your name and email');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: phone ? `+91 ${phone}` : '',
          message: `Service: ${service}\n\n${message}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        window.location.href = '/thank-you';
      } else {
        setSubmitError(data.message || 'Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('Failed to send. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-panel">
      <div className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === 'message'}
          className={activeTab === 'message' ? 'on' : ''}
          onClick={() => setActiveTab('message')}
        >
          Send Message
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'call'}
          className={activeTab === 'call' ? 'on' : ''}
          onClick={() => setActiveTab('call')}
        >
          Book Strategy Call
        </button>
      </div>

      {activeTab === 'message' ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="c-name">Your Name</label>
              <input id="c-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
            </div>
            <div className={`field${phoneError ? ' invalid' : ''}`}>
              <label htmlFor="c-phone">Mobile Number</label>
              <input id="c-phone" type="tel" value={phone} onChange={handlePhoneChange} placeholder="78385 83051" maxLength={10} />
              {phoneError && <span className="ferr">{phoneError}</span>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-email">Email Address</label>
            <input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@company.com" />
          </div>
          <div className="field">
            <label htmlFor="c-service">Service Interested In</label>
            <select id="c-service" value={service} onChange={(e) => setService(e.target.value)}>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>SEO & Marketing</option>
              <option>Mobile App</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="c-message">Project Details</label>
            <textarea
              id="c-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Tell us about your project goals and timeline..."
            ></textarea>
          </div>
          {submitError && <p className="ferr" role="alert">{submitError}</p>}
          <button type="submit" className="btn btn-dark btn-lg" disabled={isSubmitting} style={{ width: '100%' }}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div style={{ height: 700, borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
          <iframe
            src="https://calendly.com/yourtrickster-kg/30min"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule Call"
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ContactPanel;
