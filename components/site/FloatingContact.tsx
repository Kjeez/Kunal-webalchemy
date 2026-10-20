'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TEL_HREF, whatsappHref, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';

const DISMISS_KEY = 'wa-bubble-closed';

/**
 * Desktop: WhatsApp "chat buddy" pill with a one-time greeting bubble.
 * Mobile (<900px): fixed Call / WhatsApp / Free Estimate action bar.
 * Both are CSS-gated by width, so there is no resize listener.
 */
export default function FloatingContact() {
  const pathname = usePathname();
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    try {
      setBubble(sessionStorage.getItem(DISMISS_KEY) !== '1');
    } catch {
      setBubble(true);
    }
  }, []);

  const close = () => {
    setBubble(false);
    try { sessionStorage.setItem(DISMISS_KEY, '1'); } catch { /* storage blocked */ }
  };

  const wa = whatsappHref(WHATSAPP_DEFAULT_MESSAGE);
  const estimateHref = pathname === '/' ? '#contact' : '/contact';

  return (
    <>
      <div className="chat-buddy">
        {bubble && (
          <div className="chat-bubble" role="status">
            <b>Hi there!</b>
            Need a quick estimate? Chat with us on WhatsApp.
            <button type="button" className="x" aria-label="Dismiss" onClick={close}>×</button>
          </div>
        )}
        <a href={wa} className="chat-btn" target="_blank" rel="noopener noreferrer">
          <span className="face" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#25a35a"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.1Z" /></svg>
          </span>
          WhatsApp us
        </a>
      </div>

      <div className="action-bar-spacer" aria-hidden="true" />
      <nav className="action-bar" aria-label="Quick contact">
        <a href={TEL_HREF} className="call">Call</a>
        <a href={wa} className="wapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        {estimateHref.startsWith('#')
          ? <a href={estimateHref} className="est">Free Estimate</a>
          : <Link href={estimateHref} className="est">Free Estimate</Link>}
      </nav>
    </>
  );
}
