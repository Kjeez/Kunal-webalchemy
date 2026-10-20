'use client';
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useState, type CSSProperties } from 'react';
import s from './home.module.css';

export interface WorkItem {
  id: string;
  title: string;
  type: string;
  cat: string;
  image: string;
  host: string;
  c: string;
  tint: string;
}

/** Filter chips + project grid for the homepage "Recent work" section. */
export default function WorkGrid({
  intro,
  cats,
  groups,
}: {
  intro: React.ReactNode;
  cats: string[];
  groups: Record<string, WorkItem[]>;
}) {
  const [filter, setFilter] = useState('All');
  const items = groups[filter] ?? [];

  return (
    <>
      <div className={s.headRow}>
        {intro}
        <div className="chiprow" role="group" aria-label="Filter projects by industry">
          {cats.map((c) => (
            <button key={c} type="button" className="chip" aria-pressed={filter === c} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className={s.workGrid}>
        {items.map((p, i) => (
          <Link
            key={p.id}
            href="/portfolio"
            className={`rise ${s.proj}`}
            style={{ '--tint': p.tint, '--c': p.c } as CSSProperties}
          >
            <div className={s.projTop}>
              <span>{String(i + 1).padStart(3, '0')}</span>
              <span style={{ color: p.c }}>{p.cat.toUpperCase()}</span>
            </div>
            <div className="browser">
              <div className="browser-bar" aria-hidden="true">
                <i /><i /><i />
                <span className="url">{p.host}</span>
              </div>
              <div className={s.projShot}>
                <img src={p.image} alt={`${p.title} website, home page`} width={1898} height={965} loading="lazy" />
              </div>
            </div>
            <div className="stack" style={{ gap: 6 }}>
              <h3 className={s.projName}>{p.title}</h3>
              <div className={s.projType}>{p.type.toUpperCase()}</div>
            </div>
            <div className={s.projFoot}>
              <span>View project</span>
              <span aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
