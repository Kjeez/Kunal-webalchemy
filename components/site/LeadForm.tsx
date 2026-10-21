'use client';

import { useEffect, useState } from 'react';
import { CALENDLY_URL } from '@/lib/site';
import {
  goToThankYou,
  normalisePhone,
  PREFILL_EVENT,
  sendLead,
  SERVICES,
  type PrefillDetail,
  whatsappLead,
} from '@/lib/leads';

const BUDGETS = ['Under ₹15k', '₹15–30k', '₹30–50k', '₹50k+'];

/**
 * "Send Message / Book Strategy Call" panel from the design (home contact
 * section and /contact). Renders the tabs + form only — the surrounding
 * card is the page's. Listens for `prefillLead()` events.
 */
export default function LeadForm({
  source,
  serviceInput = 'select',
  showBudget = false,
  defaultService = 'Website Development',
}: {
  source: string;
  serviceInput?: 'select' | 'chips';
  showBudget?: boolean;
  defaultService?: string;
}) {
  const [tab, setTab] = useState<'msg' | 'call'>('msg');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState('₹15–30k');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');
  const [fallback, setFallback] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const onPrefill = (e: Event) => {
      const d = (e as CustomEvent<PrefillDetail>).detail || {};
      setTab('msg');
      if (d.service) setService(d.service);
      if (d.details) setDetails(d.details);
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setFallback('');
    const mobile = normalisePhone(phone);
    if (!mobile) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setSending(true);
    const lead = {
      name,
      phone: mobile,
      email,
      service,
      fields: showBudget ? { Budget: budget } : undefined,
      details,
      source,
    };
    const res = await sendLead(lead);
    if (res.ok) {
      goToThankYou(name, service);
    } else {
      setError("We couldn't send your message just now — tap below to send it on WhatsApp instead.");
      setFallback(whatsappLead(lead));
      setSending(false);
    }
  };

  return (
    <div className="stack" style={{ gap: 22 }}>
      <div className="tabs" role="tablist" aria-label="How would you like to talk?">
        <button type="button" role="tab" aria-selected={tab === 'msg'} onClick={() => setTab('msg')}>Send Message</button>
        <button type="button" role="tab" aria-selected={tab === 'call'} onClick={() => setTab('call')}>Book Strategy Call</button>
      </div>

      {tab === 'msg' ? (
        <form onSubmit={submit} className="stack" style={{ gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            <label className="field">Your name
              <input className="input" required autoComplete="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="field">Mobile number
              <input className="input" required type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
          </div>
          <label className="field">
            <span>Email address <span className="opt">(optional)</span></span>
            <input className="input" type="email" autoComplete="email" placeholder="john@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          {serviceInput === 'select' ? (
            <label className="field">Service interested in
              <select className="input" value={service} onChange={(e) => setService(e.target.value)}>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>
          ) : (
            <fieldset className="field" style={{ border: 0, padding: 0, margin: 0, gap: 9 }}>
              <legend style={{ padding: 0, marginBottom: 9 }}>What do you need?</legend>
              <div className="chiprow">
                {SERVICES.filter((s) => s !== 'PR & Advertising').map((s) => (
                  <button key={s} type="button" className="chip" aria-pressed={service === s} onClick={() => setService(s)}>{s}</button>
                ))}
              </div>
            </fieldset>
          )}

          {showBudget && (
            <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
              <legend style={{ padding: 0, marginBottom: 9 }}>Budget</legend>
              <div className="chiprow">
                {BUDGETS.map((b) => (
                  <button key={b} type="button" className="chip" aria-pressed={budget === b} onClick={() => setBudget(b)}>{b}</button>
                ))}
              </div>
            </fieldset>
          )}

          <label className="field">Project details
            <textarea className="input" rows={4} placeholder="Tell us about your project goals and timeline..." value={details} onChange={(e) => setDetails(e.target.value)} />
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          {fallback && (
            <a href={fallback} className="btn btn-whatsapp btn-block" target="_blank" rel="noopener noreferrer">
              Send on WhatsApp instead →
            </a>
          )}
          <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={sending}>
            {sending ? 'Sending…' : 'Send Message →'}
          </button>
          <p className="form-note">We reply within 24 hours. No spam, ever.</p>
        </form>
      ) : (
        <div className="stack" style={{ gap: 14 }}>
          <iframe
            title="Book a 30-minute strategy call"
            src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f7f6f2&primary_color=3557f5`}
            loading="lazy"
            style={{ width: '100%', height: 620, border: '1px solid var(--line)', borderRadius: 14, background: '#fff' }}
          />
          <p style={{ fontSize: 14, color: 'var(--muted-2)' }}>
            30-minute call. We&apos;ll review your current site and map out what to build.
          </p>
        </div>
      )}
    </div>
  );
}
