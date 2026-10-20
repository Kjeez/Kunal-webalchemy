'use client';

import { useState, type FormEvent } from 'react';
import { sendLead } from '@/lib/leads';
import s from './blog.module.css';

/** "Stay updated" signup. No newsletter backend yet: it goes through the
    lead mailer (/api/contact) and confirms inline, without a redirect. */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setState('sending');
    const res = await sendLead({ name: 'Newsletter subscriber', email: email.trim(), source: 'Blog · newsletter' });
    if (res.ok) {
      setState('done');
    } else {
      setState('idle');
      setError(res.message || 'Something went wrong. Please try again.');
    }
  }

  if (state === 'done') {
    return (
      <p className={s.subbed} role="status">
        You&apos;re subscribed. Thanks!
      </p>
    );
  }

  return (
    <div className="stack" style={{ gap: 8 }}>
      <form className={s.newsForm} onSubmit={onSubmit}>
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          aria-label="Email address"
          className={s.newsInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className={`btn btn-primary ${s.newsBtn}`} disabled={state === 'sending'}>
          {state === 'sending' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
