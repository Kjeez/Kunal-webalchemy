import type { CSSProperties } from 'react';
import type { ShapeDef } from './data';
import s from './home.module.css';

type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** Decorative floating shapes. Depth > 0 = parallax via the parent's --mx/--my. */
export default function FloatShapes({ list }: { list: ShapeDef[] }) {
  return (
    <div className={s.shapes} aria-hidden="true">
      {list.map(([kind, w, h, color, left, top, depth, dur, r = 0, z = 1], i) => {
        const inner: Vars = {
          width: w,
          height: h,
          background: color,
          borderRadius: kind === 'circle' ? '50%' : kind === 'pill' ? 999 : kind === 'half' ? `${w}px ${w}px 0 0` : 6,
          '--r': `${r}deg`,
          '--dur': `${dur}s`,
          '--delay': `${-i * 0.9}s`,
        };
        if (kind === 'ring') Object.assign(inner, { background: 'transparent', border: `3px solid ${color}`, borderRadius: '50%' });
        return (
          <div key={i} className={s.shape} style={{ left, top, zIndex: z, '--depth': depth } as Vars}>
            <div className={s.shapeIn} style={inner} />
          </div>
        );
      })}
    </div>
  );
}
