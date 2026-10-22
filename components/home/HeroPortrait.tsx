/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from 'react';
import { CMS_TOOLS, CODE_TOOLS, DESIGN_TOOLS } from './data';
import ToolBadge from './ToolBadge';
import s from './home.module.css';

type Vars = CSSProperties & Record<`--${string}`, string>;

/* Eight tools around the portrait, alternating design / CMS / code. */
const ORBIT = [
  DESIGN_TOOLS[0], CMS_TOOLS[0], CODE_TOOLS[4], DESIGN_TOOLS[1],
  CMS_TOOLS[3], CODE_TOOLS[5], DESIGN_TOOLS[2], CMS_TOOLS[4],
];

const Pointer = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 2l7.5 19 2.6-7.9L21 10.5z" fill={c} stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

/**
 * Hero visual: Kunal's photo on a card, a ring of tool icons orbiting it,
 * two Figma-style "multiplayer" cursors drifting over it, a little Figma
 * frame building itself and a code card typing. All CSS-looped; parallax
 * comes from the parent HeroStage (--mx/--my).
 */
export default function HeroPortrait() {
  return (
    <div className={s.portrait}>
      <div className={s.orbit} aria-hidden="true">
        {ORBIT.map((tool, i) => {
          const a = (i / ORBIT.length) * Math.PI * 2 - Math.PI / 2;
          const pos: Vars = {
            left: `${(50 + 50 * Math.cos(a)).toFixed(2)}%`,
            top: `${(50 + 50 * Math.sin(a)).toFixed(2)}%`,
          };
          return (
            <span key={tool[0]} className={s.orbitItem} style={pos}>
              <span className={s.orbitCounter}><ToolBadge tool={tool} size={46} decorative /></span>
            </span>
          );
        })}
      </div>

      <figure className={s.photoCard}>
        <img src="/founder.jpg" alt="Kunal, website developer and UI/UX designer" width={821} height={1024} fetchPriority="high" />
        <figcaption className={s.photoTag}>
          <span className="live-dot pulse" aria-hidden="true" />
          Kunal · New Delhi
        </figcaption>
      </figure>

      <span className={s.hiBubble} aria-hidden="true">Hey, I&apos;m Kunal <span className={s.waveHand}>👋</span></span>

      <div className={s.frameCard} aria-hidden="true">
        <div className={s.frameHead}><span className={s.frameIcon}><ToolBadge tool={DESIGN_TOOLS[0]} size={16} decorative /></span>home.fig</div>
        <div className={s.frameBody}>
          <i className={s.fb1} /><i className={s.fb2} /><i className={s.fb3} />
          <i className={s.fbImg} />
          <span className={s.fbSel}><b /><b /><b /><b /></span>
        </div>
      </div>

      <div className={s.codeCard} aria-hidden="true">
        <span className={s.codeLine} style={{ '--d': '0s' } as Vars}><em>const</em> site = design(<q>figma</q>)</span>
        <span className={s.codeLine} style={{ '--d': '.9s' } as Vars}>&nbsp;&nbsp;.build(<q>wordpress</q>)</span>
        <span className={s.codeLine} style={{ '--d': '1.8s' } as Vars}>&nbsp;&nbsp;.launch() <i>{'// ✓ live'}</i></span>
      </div>

      <span className={`${s.mp} ${s.mpA}`} aria-hidden="true"><Pointer c="#3557f5" /><span style={{ background: '#3557f5' }}>Kunal</span></span>
      <span className={`${s.mp} ${s.mpB}`} aria-hidden="true"><Pointer c="#ff8a6b" /><span style={{ background: '#ff8a6b' }}>You</span></span>
    </div>
  );
}
