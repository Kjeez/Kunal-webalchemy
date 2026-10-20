import type { CSSProperties } from 'react';
import type { LocationData } from '@/data/locations';
import s from './LocationPage.module.css';

/*
 * Decorative, abstract "map" for the location hero (the design has a
 * striped placeholder here). Pure inline SVG: paper ground, street-grid
 * neighbourhoods, parks, an optional river / ridge, ring road and
 * arterials. The labelled pins sit on top as real text. No map embeds.
 */

const RIVERS = {
  east: 'M 332 -10 C 300 70, 352 140, 322 222 S 298 338, 352 412',
  west: 'M 62 -10 C 92 76, 40 156, 72 236 S 104 340, 48 412',
  centre: 'M 236 -10 C 214 78, 266 150, 244 228 S 222 330, 272 412',
} as const;

// neighbourhood blocks that get the street-grid pattern
const BLOCKS = [
  'M 40 40 C 110 20, 170 40, 180 90 C 190 150, 120 170, 70 150 C 30 130, 10 70, 40 40 Z',
  'M 200 60 C 260 40, 300 70, 290 120 C 282 160, 230 170, 205 140 C 185 115, 175 75, 200 60 Z',
  'M 60 210 C 120 190, 190 210, 190 260 C 190 320, 120 340, 80 320 C 40 300, 20 240, 60 210 Z',
  'M 220 220 C 280 200, 340 230, 330 290 C 322 340, 260 360, 230 330 C 200 300, 190 240, 220 220 Z',
];

const PARKS = [
  'M 150 170 C 175 160, 205 172, 200 196 C 196 216, 168 220, 152 206 C 140 196, 136 178, 150 170 Z',
  'M 300 40 C 322 32, 350 44, 346 62 C 342 80, 316 84, 302 72 C 292 63, 290 46, 300 40 Z',
  'M 30 340 C 52 330, 82 340, 78 360 C 74 378, 46 382, 32 370 C 22 362, 20 346, 30 340 Z',
];

const ARTERIALS = [
  'M -10 118 C 100 104, 230 146, 410 98',
  'M 118 -10 C 132 120, 162 262, 136 410',
  'M -10 302 C 120 282, 262 306, 410 262',
  'M 262 -10 C 248 120, 282 258, 330 410',
  'M -10 392 C 90 320, 160 250, 200 196 C 240 140, 320 60, 410 12',
];

export default function LocationMap({ map }: { map: LocationData['map'] }) {
  const river = map.river ? RIVERS[map.river] : null;

  return (
    <figure className={s.map} aria-label={`Map of ${map.label} with the places we work`}>
      <svg className={s.mapSvg} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="wa-map-streets" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(14)">
            <path d="M 0 0 H 18 M 0 0 V 18" stroke="#fff" strokeWidth="1.6" fill="none" />
          </pattern>
          <pattern id="wa-map-streets-b" width="22" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(-24)">
            <path d="M 0 0 H 22 M 0 0 V 14" stroke="#fff" strokeWidth="1.4" fill="none" />
          </pattern>
        </defs>

        {/* neighbourhood blocks */}
        {BLOCKS.map((d, i) => (
          <g key={d}>
            <path d={d} fill="#ebe9e2" />
            <path d={d} fill={`url(#wa-map-streets${i % 2 ? '-b' : ''})`} />
          </g>
        ))}

        {/* parks */}
        {PARKS.map((d) => <path key={d} d={d} fill="#dfeadb" />)}

        {/* ridge (Aravalli) */}
        {map.ridge && (
          <>
            <path d="M 250 410 C 270 330, 330 300, 410 280 L 410 410 Z" fill="#dfeadb" />
            <path id="wa-map-ridge" d="M 284 392 C 306 340, 348 318, 404 306" fill="none" />
            <text className={s.mapText}><textPath href="#wa-map-ridge" startOffset="12%">ARAVALLI</textPath></text>
          </>
        )}

        {/* river */}
        {river && (
          <>
            <path d={river} fill="none" stroke="#dbe5f6" strokeWidth="30" strokeLinecap="round" />
            <path id="wa-map-river" d={river} fill="none" stroke="#c9d7f3" strokeWidth="16" strokeLinecap="round" />
            <text className={s.mapText} dy="3"><textPath href="#wa-map-river" startOffset="58%">YAMUNA</textPath></text>
          </>
        )}

        {/* ring road */}
        <ellipse cx="200" cy="196" rx="124" ry="104" fill="none" stroke="#dcd9cf" strokeWidth="10" />
        <ellipse cx="200" cy="196" rx="124" ry="104" fill="none" stroke="#fff" strokeWidth="6" />

        {/* arterials: casing + carriageway + centre dash */}
        {ARTERIALS.map((d) => <path key={`c${d}`} d={d} fill="none" stroke="#dcd9cf" strokeWidth="9" strokeLinecap="round" />)}
        {ARTERIALS.map((d) => <path key={`w${d}`} d={d} fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" />)}
        {ARTERIALS.slice(0, 2).map((d) => (
          <path key={`d${d}`} d={d} fill="none" stroke="#f3cf7a" strokeWidth="1.2" strokeDasharray="6 7" />
        ))}
      </svg>

      <figcaption className={s.mapLabel}>map · {map.label}</figcaption>

      <ul className={s.pins} aria-label="Places on the map">
        {map.pins.map((p, i) => (
          <li
            key={p.name}
            className={s.pin}
            style={{ left: p.x, top: p.y } as CSSProperties}
          >
            <span className={s.pinInner} style={{ animationDelay: `${0.15 + i * 0.09}s` }}>
              <span className={s.pinLabel}>{p.name}</span>
              <span className={s.pinDot} style={{ background: p.color }} aria-hidden="true" />
            </span>
          </li>
        ))}
      </ul>

      <span className={s.compass} aria-hidden="true">N</span>
    </figure>
  );
}
