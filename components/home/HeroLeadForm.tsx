'use client';

import { useState } from 'react';
import { goToThankYou, normalisePhone, sendLead } from '@/lib/leads';
import s from './home.module.css';

const SERVICE = 'Website Development';

/** Hero one-field lead form: mobile number → /api/contact → /thank-you. */
export default function HeroLeadForm() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const mobile = normalisePhone(phone);
    if (!mobile) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setSending(true);
    const res = await sendLead({ name: 'Website visitor', phone: mobile, source: 'Home · hero', service: SERVICE });
    if (res.ok) {
      goToThankYou('', SERVICE);
    } else {
      setError(res.message || 'Something went wrong. Please try again.');
      setSending(false);
    }
  };

  return (
    <div className={s.heroFormWrap}>
      <form className={`${s.heroForm}${error ? ` ${s.invalid}` : ''}`} onSubmit={submit} noValidate aria-label="Get a free estimate">
        <label className={s.heroField}>
          <span className={s.cc} aria-hidden="true">+91</span>
          <span className={s.srOnly}>Your mobile number</span>
          <input
            className={s.heroInput}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            required
            placeholder="Your mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'hero-form-error' : undefined}
          />
        </label>
        <button type="submit" className={s.heroSubmit} data-magnetic="" disabled={sending}>
          {sending ? 'Sending…' : 'Get my free estimate →'}
        </button>
      </form>
      {error && <p id="hero-form-error" className="form-error" role="alert">{error}</p>}
    </div>
  );
}
