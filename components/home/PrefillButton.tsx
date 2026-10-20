'use client';

import { prefillLead } from '@/lib/leads';

/** Button that prefills the home contact form (service/details) and scrolls to #contact. */
export default function PrefillButton({
  service,
  details,
  className,
  children,
}: {
  service: string;
  details?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" className={className} onClick={() => prefillLead({ service, details })}>
      {children}
    </button>
  );
}
