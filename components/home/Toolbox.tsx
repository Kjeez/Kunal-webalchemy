import type { CSSProperties } from 'react';
import Peep from '@/components/site/motion/Peep';
import { CMS_TOOLS, CODE_TOOLS, DESIGN_TOOLS, SKILLS, type Tool } from './data';
import ToolBadge from './ToolBadge';
import s from './home.module.css';

type Vars = CSSProperties & Record<`--${string}`, string>;

/* Inner ring = design, middle = CMS, outer = code. [tools, seconds per lap, reverse?] */
const RINGS: [Tool[], number, boolean][] = [
  [DESIGN_TOOLS, 26, false],
  [CMS_TOOLS, 38, true],
  [CODE_TOOLS, 52, false],
];

const GROUPS: [string, string, Tool[]][] = [
  ['DESIGN', 'var(--violet)', DESIGN_TOOLS],
  ['CMS & NO-CODE', 'var(--green)', CMS_TOOLS],
  ['CODE', 'var(--blue-soft)', CODE_TOOLS],
];

/* Made-up land masses for the spinning planet (drawn twice, side by side, so the strip loops). */
const Land = () => (
  <svg viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true">
    <path d="M12 30c8-10 22-12 30-4s4 18-6 22-12 14-20 10S4 40 12 30z" />
    <path d="M58 58c10-6 24-4 28 6s-6 22-16 24-20-4-20-14 0-12 8-16z" />
    <path d="M70 18c6-6 18-6 22 0s0 12-8 14-20-6-14-14z" />
    <path d="M120 26c12-8 30-6 36 4s-2 20-14 22-16 10-24 6-10-24 2-32z" />
    <path d="M150 66c8-4 18 0 18 8s-10 14-18 10-8-14 0-18z" />
    <path d="M176 40c6-4 14-2 16 4s-4 12-10 12-10-12-6-16z" />
  </svg>
);

/**
 * "My world of tools": a little planet with three rings of tool icons in
 * orbit (hover pauses them and names each tool), beside the grouped
 * toolbox and skill meters that fill as they scroll into view.
 */
export default function Toolbox() {
  return (
    <section id="toolbox" className={`band-dark ${s.anchor} ${s.space}`} aria-labelledby="toolbox-h">
      <div className={s.stars} aria-hidden="true" />
      <div className={`wrap section ${s.toolGrid}`}>
        <div className={s.world} aria-hidden="true">
          {RINGS.map(([tools, dur, rev], r) => (
            <div
              key={r}
              className={`${s.lap} ${s[`lap${r}`]}`}
              style={{ '--dur': `${dur}s`, '--dir': rev ? 'reverse' : 'normal' } as Vars}
            >
              {tools.map((tool, i) => {
                const a = (i / tools.length) * Math.PI * 2 + r * 0.5;
                return (
                  <span
                    key={tool[0]}
                    className={s.orbitItem}
                    style={{ left: `${(50 + 50 * Math.cos(a)).toFixed(2)}%`, top: `${(50 + 50 * Math.sin(a)).toFixed(2)}%` }}
                  >
                    <span className={s.lapCounter}><ToolBadge tool={tool} decorative /></span>
                  </span>
                );
              })}
            </div>
          ))}
          <div className={s.planet}>
            <div className={s.land}><Land /><Land /></div>
          </div>
          <span className={s.planetPeep}>
            <Peep seed="Kunal" bg="9fb0ff" pose="wave" size={64} bubble="Welcome to my world!" />
          </span>
          <span className={s.comet} />
        </div>

        <div className={s.toolText}>
          <p className="eyebrow" style={{ color: 'var(--blue-soft)' }}>TOOLBOX</p>
          <h2 id="toolbox-h" className="h2 h2-lg rise">
            My <span className="serif" style={{ color: 'var(--blue-soft)' }}>world</span> of tools
          </h2>
          <p className={s.darkLede}>
            Strong UI/UX instincts, pixel-level design skills and every major CMS. I pick the platform that fits your
            business, not the one I happen to like.
          </p>

          <div className={s.toolGroups}>
            {GROUPS.map(([label, c, tools]) => (
              <div key={label} className={s.toolGroup}>
                <div className={s.toolGroupK} style={{ color: c }}>{label}</div>
                <ul className={s.toolChips}>
                  {tools.map((t) => (
                    <li key={t[0]} className={s.toolChip}>
                      <ToolBadge tool={t} size={22} decorative />
                      {t[0]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <ul className={s.meters} aria-label="Skill levels">
            {SKILLS.map(([skill, lvl, c]) => (
              <li key={skill} className={s.meter}>
                <div className={s.meterTop}><span>{skill}</span><span className={s.meterV}>{lvl}%</span></div>
                <div className={s.meterTrack}>
                  <span className={s.meterFill} style={{ width: `${lvl}%`, background: c }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
