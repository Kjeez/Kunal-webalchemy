'use client';

import React, { useEffect, useRef } from 'react';

export interface AccordionGroupProps {
  /** Server-rendered <details> elements — this wrapper holds no copy. */
  children: React.ReactNode;
  /** Close the other items in the group when one opens (template behavior). */
  single?: boolean;
  className?: string;
}

/**
 * Progressive enhancement for native <details> accordions
 * (details.skill / details.q from the template). Animates the
 * .s-body/.q-body max-height and optionally closes siblings.
 * With JS disabled the CSS collapse never applies (html.js gate),
 * so the native <details> behavior keeps all content readable.
 */
const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  single = true,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const details = Array.from(root.querySelectorAll<HTMLDetailsElement>('details'));
    const cleanups: (() => void)[] = [];

    details.forEach((d) => {
      const body = d.querySelector<HTMLElement>('.s-body, .q-body');
      if (!body) return;
      const sync = () => {
        body.style.maxHeight = d.open ? `${body.scrollHeight}px` : '0px';
      };
      // useEffect already runs post-layout, so measure synchronously —
      // a rAF here can be deferred indefinitely in throttled tabs.
      if (d.open) sync();

      const summary = d.querySelector('summary');
      const onClick = (e: Event) => {
        e.preventDefault();
        if (single && !d.open) {
          details.forEach((o) => {
            if (o !== d && o.open) {
              o.open = false;
              const b = o.querySelector<HTMLElement>('.s-body, .q-body');
              if (b) b.style.maxHeight = '0px';
            }
          });
        }
        d.open = !d.open;
        sync();
      };
      const onResize = () => {
        if (d.open) sync();
      };

      summary?.addEventListener('click', onClick);
      window.addEventListener('resize', onResize);
      cleanups.push(() => {
        summary?.removeEventListener('click', onClick);
        window.removeEventListener('resize', onResize);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [single]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AccordionGroup;
